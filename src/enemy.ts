import * as PIXI from 'pixi.js';
import Game from './app';
import { RAPIER } from './rapier';
import { type RigidBody } from '@dimforge/rapier2d';

export default class Enemy {
	game: Game;

	size: number;

	enemyContainer: PIXI.Container;

	health: number;
	maxHealth: number;

	healthBar?: PIXI.Graphics;

	damage: number;

	speed: number;

	shape: PIXI.Graphics;

	exploding: boolean;
	destroyTime: number;

	destroyed: boolean;

	isEnemy: true;

	rigidBody?: RigidBody;

	constructor(game: Game) {
		this.game = game;
		// add a square

		this.size = 30;

		this.enemyContainer = new PIXI.Container();

		
		this.enemyContainer.x = Math.random() * 800 - 400;
		this.enemyContainer.y = Math.random() * 800 - 400;

		// get player position
		let position = this.game.player?.position;
		if (position) {
			// create random direction vector
			let point = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
			// set length to 600 (normalize and mutliply)
			let length = 600;
			let norm = Math.sqrt(point.x * point.x + point.y * point.y);
			point.x = (point.x / norm) * length;
			point.y = (point.y / norm) * length;

			this.enemyContainer.x = position.x + point.x;
			this.enemyContainer.y = position.y + point.y;
		}

		game.container.addChild(this.enemyContainer);

		this.shape = new PIXI.Graphics().circle(0, 0, this.size / 2).fill(0x070707);
		this.enemyContainer.addChild(this.shape);

		this.maxHealth = 100;
		this.health = this.maxHealth;

		this.createHealthBar();

		this.createRidigBody();

		this.damage = 10; // Damage dealt to player on contact

		this.speed = 0.05;

		this.exploding = false;
		this.destroyTime = -1;

		this.destroyed = false;

		this.isEnemy = true;
	}

	createHealthBar() {
		const healthBarWidth = this.size;
		const healthBarHeight = 5;
		this.healthBar = new PIXI.Graphics().rect(0, 0, healthBarWidth, healthBarHeight).fill(0);

		this.healthBar.position.set(0, -this.size);
		this.healthBar.pivot.set(healthBarWidth / 2, healthBarHeight / 2);

		this.enemyContainer.addChild(this.healthBar);
	}

	createRidigBody() {
		const rigidBodyDesc = RAPIER()
			.RigidBodyDesc.dynamic()
			.setTranslation(this.x, this.y)
			.lockRotations()
			.setLinearDamping(0.5);
		this.rigidBody = this.game.world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER()
			.ColliderDesc.ball(this.size / 2)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020007);

		this.game.world.createCollider(colliderDesc, this.rigidBody);

		this.rigidBody.userData = this;
	}

	get x() {
		if (this.rigidBody) return this.rigidBody.translation().x;

		return this.enemyContainer.x;
	}
	set x(value) {
		this.enemyContainer.x = value;
		this.rigidBody?.setTranslation({ x: value, y: -this.y }, true);
	}

	get y() {
		if (this.rigidBody) return -this.rigidBody.translation().y;

		return this.enemyContainer.y;
	}
	set y(value) {
		this.enemyContainer.y = value;

		this.rigidBody?.setTranslation({ x: this.x, y: -value }, true);
	}

	get position() {
		if (this.rigidBody) {
			let v = this.rigidBody.translation();
			return { x: v.x, y: -v.y };
		}

		return this.enemyContainer.position;
	}
	set position(value) {
		this.enemyContainer.position = value;
		this.rigidBody?.setTranslation({ x: this.x, y: -this.y }, true);
	}

	update(deltaTime: number) {
		let player = this.game.player;

		if (this.destroyed || !player) return;

		// move the player, wasd
		let dx = player.x - this.x;
		let dy = player.y - this.y;

		const distance = Math.sqrt(dx * dx + dy * dy);

		// Only move if not too close to the player and not exploding
		if (distance > this.size + 10 && !this.exploding) {
			// lets add some force instead of moving it directly, the further away the player, the more force
			const force = 500;

			const x = dx / distance;
			const y = dy / distance;

			this.rigidBody?.applyImpulse({ x: x * force, y: -y * force }, true);
		} else if (!this.exploding) {
			this.exploding = true;
			this.destroyTime = 2000;
		} else {
			this.destroyTime -= deltaTime;
			if (this.destroyTime <= 0) {
				this.destroy();

				if (distance < this.size + 20) {
					player.takeDamage(20);
				}
				return;
			}
		}

		this.enemyContainer.position.set(this.x, this.y);
	}

	destroy() {
		this.game.spawnParticles(this.x, this.y, 50, 0);

		this.destroyed = true;
		// remove the square
		this.enemyContainer.destroy();
		this.shape.destroy();
		if (this.rigidBody) this.game.world.removeRigidBody(this.rigidBody);
	}

	takeDamage(amount: number) {
		this.health -= amount;

		if (this.healthBar) this.healthBar.width = (this.health / this.maxHealth) * this.size;

		if (this.health <= 0) {
			this.destroy();
		}
	}
}
