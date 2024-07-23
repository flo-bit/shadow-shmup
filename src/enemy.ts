import * as PIXI from 'pixi.js';
import Game from './app';
import { RAPIER } from './rapier';
import { Vector2, type RigidBody } from '@dimforge/rapier2d';
import Eye from './eye';
import Player from './player';
import { Weapon } from './weapon';

interface PlayerHit {
	hitPlayer?(player: Player): void;
}

export default class Enemy implements PlayerHit {
	game: Game;

	size: number = 30;

	enemyContainer: PIXI.Container;

	health: number;
	maxHealth: number;

	healthBar?: PIXI.Graphics;

	damage: number = 10;

	speed: number = 0.05;

	shape?: PIXI.Graphics;

	exploding: boolean;
	destroyTime: number;

	destroyed: boolean;

	isEnemy: true;

	rigidBody?: RigidBody;

	leftEye?: Eye;
	rightEye?: Eye;

	eyes?: PIXI.Container;

	color: number = 0xfb923c;

	hitPlayer?(player: Player): void;

	constructor(game: Game) {
		this.game = game;

		this.enemyContainer = new PIXI.Container();

		this.enemyContainer.x = Math.random() * 800 - 400;
		this.enemyContainer.y = Math.random() * 800 - 400;

		// get player position
		let position = this.game.playerManager?.getClosestPlayer(this.position)?.position;
		if (position) {
			// create random direction vector
			let point = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
			let length = 1000;
			let norm = Math.sqrt(point.x * point.x + point.y * point.y);
			point.x = (point.x / norm) * length;
			point.y = (point.y / norm) * length;

			this.enemyContainer.x = position.x + point.x;
			this.enemyContainer.y = position.y + point.y;
		}

		game.container.addChild(this.enemyContainer);

		this.createShape();

		this.maxHealth = 100;
		this.health = this.maxHealth;

		if (game.debug) this.createHealthBar();

		this.createRidigBody();

		this.exploding = false;
		this.destroyTime = -1;

		this.destroyed = false;

		this.isEnemy = true;

		this.createEyes();
	}

	createEyes() {
		this.eyes = new PIXI.Container();
		this.enemyContainer.addChild(this.eyes);

		this.leftEye = new Eye(this.eyes, -this.size / 4, 0, this.color);
		this.rightEye = new Eye(this.eyes, this.size / 4, 0, this.color);
	}

	createShape() {
		this.shape = new PIXI.Graphics().circle(0, 0, this.size / 2).fill(0);
		this.enemyContainer.addChild(this.shape);
	}

	createHealthBar() {
		const healthBarWidth = this.size;
		const healthBarHeight = 2;
		this.healthBar = new PIXI.Graphics().rect(0, 0, healthBarWidth, healthBarHeight).fill(0x00ff00);

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

	get rotation() {
		if (this.rigidBody) return -this.rigidBody.rotation();

		return this.enemyContainer.rotation;
	}

	set rotation(value) {
		this.enemyContainer.rotation = value;
		this.rigidBody?.setRotation(-value, true);
	}

	impulse(x: number, y: number) {
		this.rigidBody?.applyImpulse({ x, y }, true);
	}

	update(deltaTime: number) {
		let player = this.game.playerManager?.getClosestPlayer(this.position);

		if (this.destroyed || !player) return;

		// move the player, wasd
		let dx = player.x - this.x;
		let dy = player.y - this.y;

		const distance = Math.sqrt(dx * dx + dy * dy);

		// get angle between enemy and player
		const angle = Math.atan2(dy, dx);
		// move eyes
		this.leftEye?.move(angle);
		this.rightEye?.move(angle);

		let alpha = Math.min(1, 1 - distance / 300);

		this.leftEye?.update(deltaTime, alpha);
		this.rightEye?.update(deltaTime, alpha);

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
		if (this.destroyed) return;
		this.game.spawnParticles(this.x, this.y, 50, this.color);

		this.destroyed = true;
		// remove the square
		this.enemyContainer.destroy();
		this.shape?.destroy();
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

export class TriangleEnemy extends Enemy {
	createEyes() {
		this.color = 0x38bdf8;
		super.createEyes();
	}

	createShape(): void {
		this.size = 20;
		this.shape = new PIXI.Graphics()
			.poly([-this.size, -this.size / 2, this.size, -this.size / 2, 0, this.size])
			.fill(0);
		this.enemyContainer.addChild(this.shape);
	}

	createRidigBody(): void {
		const rigidBodyDesc = RAPIER()
			.RigidBodyDesc.dynamic()
			.setTranslation(this.x, this.y)
			.lockRotations()
			.setLinearDamping(0.3);
		this.rigidBody = this.game.world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER()
			.ColliderDesc.triangle(
				new Vector2(-this.size, this.size / 2),
				new Vector2(this.size, this.size / 2),
				new Vector2(0, -this.size)
			)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020007);

		this.game.world.createCollider(colliderDesc, this.rigidBody);

		this.rigidBody.userData = this;
	}

	update(deltaTime: number) {
		let player = this.game.playerManager?.getClosestPlayer(this.position);

		if (this.destroyed || !player) return;

		// move the player, wasd
		let dx = player.x - this.x;
		let dy = player.y - this.y;

		const distance = Math.sqrt(dx * dx + dy * dy);

		// get angle between enemy and player
		const angle = Math.atan2(dy, dx);

		// apply rotation
		//let rotationDelta = this.rotation - (angle - Math.PI / 2);
		//this.rigidBody?.applyTorqueImpulse(rotationDelta * 1000000, true);

		this.rotation = angle - Math.PI / 2;

		// move eyes
		this.leftEye?.move(Math.PI / 2);
		this.rightEye?.move(Math.PI / 2);

		let alpha = Math.min(1, 1 - distance / 300);
		this.leftEye?.update(deltaTime, alpha);
		this.rightEye?.update(deltaTime, alpha);

		const force = 600;

		const x = dx / distance;
		const y = dy / distance;

		this.rigidBody?.applyImpulse({ x: x * force, y: -y * force }, true);

		this.enemyContainer.position.set(this.x, this.y);
		//this.enemyContainer.rotation = this.rotation;

		if (this.exploding) {
			this.destroy();

			if (distance < this.size + 20) {
				player.takeDamage(10);
			}
		}

		if (distance < 50) {
			if (this.destroyTime < 0) this.destroyTime = 1000;
			else this.destroyTime -= deltaTime;

			if (this.destroyTime < 0) this.exploding = true;
		} else {
			this.destroyTime = -1;
		}
	}

	hitPlayer(player: Player) {
		// explode on next update()
		this.exploding = true;
	}
}

export class PentagonEnemy extends Enemy {
	weapon: Weapon;

	constructor(game: Game) {
		super(game);

		this.weapon = new Weapon(this.game, {
			color: this.color,
			collisionGroups: 0x00100001,
			projectileSpeed: 0.2,
			fireRate: 2000,
			projectileSize: 6
		});
	}

	createEyes() {
		this.color = 0x4ade80;
		super.createEyes();
	}

	createShape(): void {
		this.size = 30;
		const points: number[] = [];
		for (let i = 0; i < 5; i++) {
			const angle = (i / 5) * Math.PI * 2;
			points.push(Math.cos(angle) * this.size, Math.sin(angle) * this.size);
		}
		this.shape = new PIXI.Graphics().poly(points).fill(0);
		this.enemyContainer.addChild(this.shape);
	}

	createRidigBody(): void {
		const rigidBodyDesc = RAPIER()
			.RigidBodyDesc.dynamic()
			.setTranslation(this.x, this.y)
			.lockRotations()
			.setLinearDamping(0.5);
		this.rigidBody = this.game.world.createRigidBody(rigidBodyDesc);

		const vertices = new Float32Array(10);

		for (let i = 0; i < 5; i++) {
			const angle = (i / 5) * Math.PI * 2;
			vertices[i * 2] = Math.cos(angle) * this.size;
			vertices[i * 2 + 1] = Math.sin(angle) * this.size;
		}

		const convexHull = RAPIER().ColliderDesc.convexHull(vertices);

		if (!convexHull) return;

		const colliderDesc = convexHull
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020007);

		this.game.world.createCollider(colliderDesc, this.rigidBody);

		this.rigidBody.userData = this;
	}

	update(deltaTime: number) {
		let player = this.game.playerManager?.getClosestPlayer(this.position);

		if (this.destroyed || !player) return;

		// move the player, wasd
		let dx = player.x - this.x;
		let dy = player.y - this.y;

		const distance = Math.sqrt(dx * dx + dy * dy);

		// get angle between enemy and player
		const angle = Math.atan2(dy, dx);

		const rotationSpeed = 0.001;
		this.rotation += rotationSpeed * deltaTime;

		// move eyes
		this.leftEye?.move(-this.rotation + angle);
		this.rightEye?.move(-this.rotation + angle);

		let alpha = Math.min(1, 1 - distance / 300);
		this.leftEye?.update(deltaTime, alpha);
		this.rightEye?.update(deltaTime, alpha);

		// Only move if not too close to the player and not exploding
		// lets add some force instead of moving it directly, the further away the player, the more force
		const force = 1000;

		const x = dx / distance;
		const y = dy / distance;

		this.rigidBody?.applyImpulse({ x: x * force, y: -y * force }, true);

		// if player is close enough, fire weapon
		if (distance < 400) {
			this.weapon.fire(this.position, player.position);
		}

		this.weapon.update(deltaTime);

		this.enemyContainer.position.set(this.x, this.y);
	}
}
