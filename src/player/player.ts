import { GunWeapon } from '../weapons/gun.js';
import * as PIXI from 'pixi.js';

import Game from '../app.js';
import { RAPIER } from '../helper/rapier.js';
import { type RigidBody } from '@dimforge/rapier2d';
import Eye from '../visuals/eye.js';
import { Light } from '../visuals/light.js';
import { blendColors } from '../helper/helper.js';
import { Weapon } from '../weapons/weapon.js';
import { sound } from '@pixi/sound';

export default class Player {
	game: Game;

	size: number;

	_maxHealth: number;
	_health: number;

	playerContainer: PIXI.Container;

	healthBar?: PIXI.Graphics;

	speed: number;

	shape: PIXI.Graphics;

	weapon: GunWeapon;

	isPlayer: true;

	rigidBody?: RigidBody;

	color: number;

	light: Light;

	leftEye: Eye;
	rightEye: Eye;

	num: number;

	viewDistance: number = 250;

	timeSinceLastDamage: number = 5000;

	dead: boolean = false;

	respawnTime: number = 0;

	items: number[] = [0, 0, 0, 0];

	weapons: Weapon[] = [];

	shootingRange: number = 200;

	coinMagnetRange: number = 80;

	constructor(game: Game, num: number) {
		this.game = game;
		this.num = num;

		this.size = 25;

		this._maxHealth = 200;
		this._health = this._maxHealth;

		this.color = num === 0 ? 0xbe123c : 0xf97316;

		this.playerContainer = new PIXI.Container();
		game.container.addChild(this.playerContainer);

		this.light = this.game.lightManager.addLight({
			color: blendColors(this.color, 0xffffff, 0.1),
			detail: 360
		});

		const shape = new PIXI.Graphics().rect(0, 0, this.size, this.size).fill(this.color);
		shape.pivot.set(this.size / 2, this.size / 2);
		this.playerContainer.addChild(shape);

		this.createRigidBody();

		this.createHealthBar();

		this.speed = 16000;
		this.shape = shape;

		this.weapon = new GunWeapon(this.game, {
			color: this.color,
			lifetime: 2000,
			piercing: 1,
			fireRate: 300,
			damage: 20
		});

		this.isPlayer = true;

		this.leftEye = new Eye(this.playerContainer, -this.size / 4, 0);
		this.rightEye = new Eye(this.playerContainer, this.size / 4, 0);

		this.x = 0;
		this.y = 0;
	}

	set health(value: number) {
		this._health = value;
		if (this.healthBar) this.healthBar.width = this.size * (this._health / this._maxHealth);
	}
	get health() {
		return this._health;
	}

	set maxHealth(value: number) {
		this._maxHealth = value;
		if (this.healthBar) this.healthBar.width = this.size * (this._health / this._maxHealth);
	}
	get maxHealth() {
		return this._maxHealth;
	}

	createHealthBar() {
		const healthBarWidth = this.size;
		const healthBarHeight = 5;

		this.healthBar = new PIXI.Graphics()
			.rect(0, 0, healthBarWidth, healthBarHeight)
			.fill(this.color);
		this.healthBar.position.set(0, -this.size);
		this.healthBar.pivot.set(healthBarWidth / 2, healthBarHeight / 2);

		this.playerContainer.addChild(this.healthBar);
	}

	createRigidBody() {
		const rigidBodyDesc = RAPIER()
			.RigidBodyDesc.dynamic()
			.setTranslation(0, 0)
			.lockRotations()
			.setLinearDamping(10);
		this.rigidBody = this.game.world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER()
			.ColliderDesc.cuboid(this.size / 2, this.size / 2)
			.setCollisionGroups(0x00010033);
		this.game.world.createCollider(colliderDesc, this.rigidBody);

		// Attach this Player instance to the rigid body's user data
		this.rigidBody.userData = this;
	}

	get x() {
		if (this.rigidBody) return this.rigidBody.translation().x;

		return this.playerContainer.x;
	}
	set x(value) {
		this.playerContainer.x = value;
		this.rigidBody?.setTranslation({ x: value, y: -this.y }, true);
	}

	get y() {
		if (this.rigidBody) return -this.rigidBody.translation().y;

		return this.playerContainer.y;
	}
	set y(value) {
		this.playerContainer.y = value;
		this.rigidBody?.setTranslation({ x: this.x, y: -value }, true);
	}

	get position() {
		if (this.rigidBody) {
			let v = this.rigidBody.translation();
			return { x: v.x, y: -v.y };
		}

		return this.playerContainer.position;
	}
	set position(value) {
		this.playerContainer.position = value;

		this.rigidBody?.setTranslation({ x: this.x, y: -this.y }, true);
	}

	update(deltaTime: number, keys: Record<string, boolean>) {
		// move the player, wasd
		if (this.game.playing && !this.dead) {
			let dx = this.game.controls.x(this.num),
				dy = this.game.controls.y(this.num);

			let dist = Math.hypot(dx, dy);

			if (dist > 1) {
				dx /= dist;
				dy /= dist;
			}

			let mult = deltaTime * 120 * 0.001;
			if (dx || dy)
				this.rigidBody?.applyImpulse(
					{ x: dx * this.speed * mult, y: -dy * this.speed * mult },
					true
				);
		}

		for (let weapon of this.weapons) {
			weapon.update(deltaTime, this.x, this.y);
		}

		if (this.dead && this.respawnTime > 0) {
			this.playerContainer.alpha = 0.1;
			if (this.light) this.light.alpha = 0.0;

			this.respawnTime -= deltaTime;
			if (this.respawnTime <= 0 && this.game.playing) {
				// get closest player
				const closestPlayer = this.game.playerManager?.getClosestPlayer(this.position);
				this.x = (closestPlayer?.x ?? 0) + 50;
				this.y = closestPlayer?.y ?? 0;

				this.dead = false;
				this._health = this._maxHealth;

				this.playerContainer.alpha = 1;
			}

			return;
		}

		this.timeSinceLastDamage += deltaTime;

		if (this.light) {
			this.light.scale = (0.5 + Math.random() * 0.05) * (this.viewDistance / 200);
			this.light.alpha = 0.4;
		}

		this.leftEye.update(deltaTime, 1);
		this.rightEye.update(deltaTime, 1);

		// get closest enemy
		const closestEnemy = this.game.enemyManager?.getClosestEnemy(this.position, this.shootingRange);

		if (closestEnemy) {
			this.weapon.fire(this.position, closestEnemy.position);

			// get angle between enemy and player
			const dx = closestEnemy.x - this.x;
			const dy = closestEnemy.y - this.y;
			const angle = Math.atan2(dy, dx);

			// move eyes
			this.leftEye.move(angle);
			this.rightEye.move(angle);
		}

		this.light.x = this.x;
		this.light.y = this.y;

		this.weapon.update(deltaTime);

		this.playerContainer.position.set(this.x, this.y);
	}

	takeDamage(amount: number) {
		if (this.dead) return;

		this.health -= amount;

		sound.play('player-hit');

		this.game.controls.rumble(this.num, (amount / this._maxHealth) * 50);

		if (this.health < 0) {
			this.health = 0;
			this.dead = true;
			this.respawnTime = 5000;
		}

		this.timeSinceLastDamage = 0;
	}

	destroy() {
		if (this.rigidBody) this.game.world.removeRigidBody(this.rigidBody);
		this.playerContainer.destroy();
		this.light.destroy();

		for (let weapon of this.weapons) {
			weapon.destroy();
		}
	}
}
