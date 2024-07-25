import { Weapon } from './weapon.js';
import * as PIXI from 'pixi.js';

import Game from './app';
import { RAPIER } from './rapier';
import { type RigidBody } from '@dimforge/rapier2d';
import Eye from './eye.js';

/**
 * Player class
 *
 * @export
 * @class Player
 */
export default class Player {
	game: Game;

	size: number;

	maxHealth: number;
	health: number;

	playerContainer: PIXI.Container;

	shadow: PIXI.Graphics;

	healthBar?: PIXI.Graphics;

	speed: number;

	shape: PIXI.Graphics;

	weapon: Weapon;

	isPlayer: true;

	rigidBody?: RigidBody;

	color: number;

	light?: PIXI.Sprite;

	leftEye: Eye;
	rightEye: Eye;

	num: number;

	viewDistance: number = 250;

	timeSinceLastDamage: number = 5000;

	dead: boolean = false;

	respawnTime: number = 0;

	constructor(game: Game, num: number) {
		this.game = game;
		this.num = num;

		this.size = 25;

		this.maxHealth = 100;
		this.health = this.maxHealth;

		this.color = num === 0 ? 0xe11d48 : 0x4f46e5;

		this.playerContainer = new PIXI.Container();
		game.container.addChild(this.playerContainer);

		this.shadow = new PIXI.Graphics();
		this.playerContainer.addChild(this.shadow);

		this.createLight();

		const shape = new PIXI.Graphics().rect(0, 0, this.size, this.size).fill(this.color);
		shape.pivot.set(this.size / 2, this.size / 2);
		this.playerContainer.addChild(shape);

		this.createRigidBody();

		this.createHealthBar();

		this.speed = 30000;
		this.shape = shape;

		this.weapon = new Weapon(this.game, { color: this.color, lifetime: 2000 });

		this.isPlayer = true;

		this.leftEye = new Eye(this.playerContainer, -this.size / 4, 0);
		this.rightEye = new Eye(this.playerContainer, this.size / 4, 0);

		this.x = 0;
		this.y = 0;
	}

	async createLight() {
		const texture = await PIXI.Assets.load('./light.png');
		this.light = PIXI.Sprite.from(texture);
		this.light.tint = 0xfda4af;
		this.light.anchor.set(0.5);
		this.light.scale.set((0.5 * this.viewDistance) / 200);
		this.light.zIndex = -1;

		this.playerContainer.addChild(this.light);

		this.light.mask = this.shadow;
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
			.setCollisionGroups(0x00010013);
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
			let dx = 0,
				dy = 0;
			if (this.game.controls.up(this.num)) dy -= 1;
			if (this.game.controls.down(this.num)) dy += 1;
			if (this.game.controls.left(this.num)) dx -= 1;
			if (this.game.controls.right(this.num)) dx += 1;

			// Normalize diagonal movement
			if (dx !== 0 && dy !== 0) {
				dx *= Math.SQRT1_2;
				dy *= Math.SQRT1_2;
			}

			let mult = deltaTime * 120 * 0.001;
			if (dx || dy)
				this.rigidBody?.applyImpulse(
					{ x: dx * this.speed * mult, y: -dy * this.speed * mult },
					true
				);
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
				this.health = this.maxHealth;

				this.playerContainer.alpha = 1;
			}

			return;
		}

		this.timeSinceLastDamage += deltaTime;

		if (this.light) {
			this.light.scale = (0.5 + Math.random() * 0.05) * (this.viewDistance / 200);
			this.light.alpha = 0.2 + Math.random() * 0.01;
		}

		this.leftEye.update(deltaTime, 1);
		this.rightEye.update(deltaTime, 1);

		// get closest enemy
		const closestEnemy = this.game.enemyManager?.getClosestEnemy(this.position, 200);

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

		this.drawShadow();

		this.weapon.update(deltaTime);

		this.playerContainer.position.set(this.x, this.y);
	}

	drawShadow() {
		// ray cast around the player to create a shadow
		this.shadow.clear();

		const rays = 1080 / 3;

		const angleStep = (Math.PI * 2) / rays;
		const rayLength = 100000;

		let firstPoint;

		for (let i = 0; i < rays; i++) {
			const angle = i * angleStep;

			const ray = new (RAPIER().Ray)(
				new (RAPIER().Vector2)(this.x, -this.y),
				new (RAPIER().Vector2)(Math.cos(angle), Math.sin(angle))
			);

			const hit = this.game.world.castRay(ray, rayLength, false, undefined, 0x000a000a);

			let hitPoint = hit
				? ray.pointAt(hit.toi)
				: { x: ray.dir.x * rayLength, y: ray.dir.y * rayLength };

			let x = hitPoint.x - this.x;
			let y = -hitPoint.y - this.y;

			if (i === 0) {
				this.shadow.moveTo(x, y);
				firstPoint = { x, y };
			} else {
				this.shadow.lineTo(x, y);
			}

			if (i === rays - 1 && firstPoint) {
				this.shadow.lineTo(firstPoint.x, firstPoint.y);
			}
		}
		this.shadow.fill(0);
	}

	takeDamage(amount: number) {
		this.health -= amount;
		if (this.health < 0) {
			this.health = 0;
			this.dead = true;
			this.respawnTime = 5000;
		}
		if (this.healthBar) this.healthBar.width = this.size * (this.health / this.maxHealth);

		this.timeSinceLastDamage = 0;
	}

	destroy() {
		if (this.rigidBody) this.game.world.removeRigidBody(this.rigidBody);
		this.game.container.removeChild(this.playerContainer);
	}
}
