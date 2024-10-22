import * as PIXI from 'pixi.js';
import { type RigidBody } from '@dimforge/rapier2d';
import { RAPIER } from '../helper/rapier';
import { sound } from '@pixi/sound';

import Game from '../app';
import Eye from '../visuals/eye';
import Player from '../player/player';
import { GunWeapon } from '../weapons/gun';

interface PlayerHit {
	hitPlayer?(player: Player): void;
}

export default class Enemy implements PlayerHit {
	game: Game;

	size: number = 30;

	enemyContainer: PIXI.Container;

	health: number = 0;
	maxHealth: number = 0;

	healthBar?: PIXI.Graphics;

	speed: number = 500;

	shape?: PIXI.Graphics;
	highlight?: PIXI.Graphics;

	timeSinceLastHit: number = 10000;

	exploding: boolean;
	destroyTime: number;

	destroyed: boolean;

	isEnemy: true;

	rigidBody?: RigidBody;

	leftEye?: Eye;
	rightEye?: Eye;

	eyes?: PIXI.Container;

	color: number = 0xffffff;

	type: number = -1;

	value: number = 1;

	eyeScale: number = 1;

	eyeDistance: number = 0.5;

	hitPlayer?(player: Player): void;

	constructor(game: Game) {
		this.game = game;

		this.enemyContainer = new PIXI.Container();

		this.enemyContainer.x = Math.random() * 800 - 400;
		this.enemyContainer.y = Math.random() * 800 - 400;

		this.setPositionNearPlayer();

		game.container.addChild(this.enemyContainer);

		this.exploding = false;
		this.destroyTime = -1;

		this.destroyed = false;

		this.isEnemy = true;

		this.setStats();
	}

	setStats() {
		this.maxHealth = 30;
		this.health = this.maxHealth;
	}

	setup() {
		this.createShape();
		this.createRidigBody();
		this.createEyes();

		if (this.game.debug) this.createHealthBar();
	}

	setPositionNearPlayer() {
		let position = this.game.playerManager?.getClosestPlayer(this.position)?.position;
		if (position) {
			// create random direction vector
			let point = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
			let length = 500;
			let norm = Math.sqrt(point.x * point.x + point.y * point.y);
			point.x = (point.x / norm) * length;
			point.y = (point.y / norm) * length;

			this.x = position.x + point.x;
			this.y = position.y + point.y;
		}
	}

	createEyes() {
		this.eyes = new PIXI.Container();
		this.enemyContainer.addChild(this.eyes);

		this.leftEye = new Eye(
			this.eyes,
			-this.size * this.eyeDistance * 0.5,
			0,
			this.color,
			this.eyeScale
		);
		this.rightEye = new Eye(
			this.eyes,
			this.size * this.eyeDistance * 0.5,
			0,
			this.color,
			this.eyeScale
		);
	}

	createShape() {
		this.shape = new PIXI.Graphics().circle(0, 0, this.size / 2).fill(0);
		this.enemyContainer.addChild(this.shape);

		this.highlight = new PIXI.Graphics().circle(0, 0, this.size / 2).fill(this.color);
		this.highlight.alpha = 0;
		this.enemyContainer.addChild(this.highlight);
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
			.setTranslation(this.x, -this.y)
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

	move(deltaTime: number, nearestPlayer: Player, dx: number, dy: number, distance: number) {
		const mult = deltaTime * 120 * 0.001;
		const x = (dx / distance) * this.speed * mult;
		const y = (dy / distance) * this.speed * mult;

		this.rigidBody?.applyImpulse({ x: x, y: -y }, true);

		// if too far away (> 2000), teleport to player
		if (distance > 2000) {
			this.setPositionNearPlayer();
			console.log('teleporting', this.x, this.y);
		}
	}

	updateEyes(deltaTime: number, nearestPlayer: Player, distance: number) {
		if (distance < nearestPlayer.viewDistance * 1.5) {
			let alpha = Math.min(1, 1 - distance / (nearestPlayer.viewDistance * 1.5));
			this.leftEye?.update(deltaTime, alpha);
			this.rightEye?.update(deltaTime, alpha);
		} else {
			this.leftEye?.update(deltaTime, 0);
			this.rightEye?.update(deltaTime, 0);
		}
	}

	updateVisuals(
		deltaTime: number,
		nearestPlayer: Player,
		dx: number,
		dy: number,
		distance: number
	) {
		const angle = Math.atan2(dy, dx);

		this.leftEye?.move(angle);
		this.rightEye?.move(angle);

		this.updateEyes(deltaTime, nearestPlayer, distance);

		this.enemyContainer.position.set(this.x, this.y);

		this.updateHighlight(deltaTime);
	}

	updateHighlight(deltaTime: number) {
		this.timeSinceLastHit += deltaTime;
		if (this.highlight) {
			if (this.timeSinceLastHit < 400)
				this.highlight.alpha = (1 - this.timeSinceLastHit / 400) * 0.8;
			else this.highlight.alpha = 0;
		}
	}

	attack(deltaTime: number, nearestPlayer: Player, dx: number, dy: number, distance: number) {
		console.log('attack');
	}

	update(deltaTime: number) {
		let player = this.game.playerManager?.getClosestPlayer(this.position);
		//let light = this.game.lightManager?.getClosestLight(this.position);

		if (this.destroyed || !player) return;

		const dx = player.x - this.x;
		const dy = player.y - this.y;
		const distance = Math.sqrt(dx * dx + dy * dy);

		this.move(deltaTime, player, dx, dy, distance);

		this.updateVisuals(deltaTime, player, dx, dy, distance);

		this.attack(deltaTime, player, dx, dy, distance);
	}

	destroy(dropItem: boolean = true) {
		if (this.destroyed) return;

		if (dropItem)
			this.game.dropItem({
				x: this.x,
				y: this.y,
				color: this.color,
				size: 10,
				type: this.type,
				value: this.value
			});

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

		this.timeSinceLastHit = 0;

		if (this.health <= 0) {
			this.destroy();
		}

		sound.play('enemy-hit');
	}
}

export class CrossEnemy extends Enemy {
	weapon: GunWeapon;

	shootAngle: number = 0;

	constructor(game: Game) {
		super(game);

		this.type = 4;

		this.weapon = new GunWeapon(this.game, {
			color: this.color,
			collisionGroups: 0x00100001,
			projectileSpeed: 0.2,
			fireRate: 100,
			projectileSize: 6,
			damage: 10,
			lifetime: 8000
		});

		this.speed = 20000;
		this.health = 10000;
	}

	createEyes() {
		this.size = 100;
		this.color = 0x0284c7;
		this.eyes = new PIXI.Container();
		this.enemyContainer.addChild(this.eyes);
		this.eyes.scale.set(5);

		this.leftEye = new Eye(this.eyes, -10, 0, this.color);
		this.rightEye = new Eye(this.eyes, 10, 0, this.color);
	}

	createShape(): void {
		this.size = 600;
		this.shape = new PIXI.Graphics().rect(0, 0, this.size, this.size / 8).fill(0);
		this.shape.pivot.set(this.size / 2, this.size / 16);
		let shape2 = new PIXI.Graphics().rect(0, 0, this.size / 8, this.size).fill(0);
		shape2.pivot.set(this.size / 16, this.size / 2);
		this.enemyContainer.addChild(this.shape);
		this.enemyContainer.addChild(shape2);
	}

	createRidigBody(): void {
		this.size = 600;
		const rigidBodyDesc = RAPIER()
			.RigidBodyDesc.dynamic()
			.setTranslation(this.x, -this.y)
			.lockRotations()
			.setLinearDamping(0.5);
		this.rigidBody = this.game.world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER()
			.ColliderDesc.cuboid(this.size / 2, this.size / 16)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020007);

		this.game.world.createCollider(colliderDesc, this.rigidBody);

		const colliderDesc2 = RAPIER()
			.ColliderDesc.cuboid(this.size / 16, this.size / 2)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020007);

		this.game.world.createCollider(colliderDesc2, this.rigidBody);
		const colliderDesc3 = RAPIER()
			.ColliderDesc.cuboid(this.size / 4, this.size / 32)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020007)
			.setTranslation(0, this.size / 3);
		this.game.world.createCollider(colliderDesc3, this.rigidBody);

		const colliderDesc4 = RAPIER()
			.ColliderDesc.cuboid(this.size / 4, this.size / 32)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020007)
			.setTranslation(0, -this.size / 3);
		this.game.world.createCollider(colliderDesc4, this.rigidBody);

		const colliderDesc5 = RAPIER()
			.ColliderDesc.cuboid(this.size / 64, this.size / 8)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020007)
			.setTranslation(this.size / 6, this.size / 3);

		this.game.world.createCollider(colliderDesc5, this.rigidBody);

		const colliderDesc6 = RAPIER()
			.ColliderDesc.cuboid(this.size / 64, this.size / 8)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020007)
			.setTranslation(this.size / 6, -this.size / 3);

		this.game.world.createCollider(colliderDesc6, this.rigidBody);
		const colliderDesc7 = RAPIER()
			.ColliderDesc.cuboid(this.size / 64, this.size / 8)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020007)
			.setTranslation(-this.size / 6, this.size / 3);

		this.game.world.createCollider(colliderDesc7, this.rigidBody);

		const colliderDesc8 = RAPIER()
			.ColliderDesc.cuboid(this.size / 64, this.size / 8)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020007)
			.setTranslation(-this.size / 6, -this.size / 3);

		this.game.world.createCollider(colliderDesc8, this.rigidBody);

		this.rigidBody.userData = this;
	}

	updateVisuals(
		deltaTime: number,
		nearestPlayer: Player,
		dx: number,
		dy: number,
		distance: number
	): void {
		const angle = Math.atan2(dy, dx);

		const rotationSpeed = 0.0001;
		this.rotation += rotationSpeed * deltaTime;

		// move eyes
		this.leftEye?.move(-this.rotation + angle);
		this.rightEye?.move(-this.rotation + angle);

		this.updateEyes(deltaTime, nearestPlayer, distance);

		this.enemyContainer.position.set(this.x, this.y);
	}

	attack(deltaTime: number, nearestPlayer: Player, dx: number, dy: number, distance: number): void {
		if (this.weapon.cooldown <= 0) {
			// get angle
			let x = Math.cos(this.shootAngle) + this.position.x;
			let y = Math.sin(this.shootAngle) + this.position.y;
			this.weapon.fire(this.position, { x, y });

			this.shootAngle += Math.PI / 10;
		}

		this.weapon.update(deltaTime);
	}
}
