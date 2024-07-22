import * as PIXI from 'pixi.js';
import { RAPIER } from './rapier';
import Game from './app';

export class Projectile {
	game: Game;
	vx: number;
	vy: number;
	damage: number;
	size: number;
	shape: PIXI.Graphics;
	rigidBody: any;
	collider: any;
	destroyed: boolean = false;

	isProjectile: true;

	constructor(
		game: Game,
		position: { x: number; y: number },
		enemyPosition: { x: number; y: number },
		speed: number,
		size: number,
		damage: number,
		color: number,
		angleOffset: number
	) {
		this.game = game;
		const angle =
			Math.atan2(enemyPosition.y - position.y, enemyPosition.x - position.x) + angleOffset;

		this.vx = Math.cos(angle) * speed;
		this.vy = Math.sin(angle) * speed;
		this.damage = damage;
		this.size = size;

		this.shape = new PIXI.Graphics().rect(0, 0, size, size).fill(color);

		this.shape.x = position.x;
		this.shape.y = position.y;

		game.container.addChild(this.shape);

		const rigidBodyDesc = RAPIER()
			.RigidBodyDesc.dynamic()
			.setTranslation(this.shape.x, this.shape.y);
		this.rigidBody = game.world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER()
			.ColliderDesc.ball(size)
			.setCollisionGroups(0x00040002)
			.setSensor(true)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS);

		this.collider = game.world.createCollider(colliderDesc, this.rigidBody);

		this.rigidBody.userData = this;

		this.isProjectile = true;
	}

	update(deltaTime: number) {
		if (this.destroyed) return;

		this.shape.x += this.vx * deltaTime;
		this.shape.y += this.vy * deltaTime;

		this.rigidBody.setTranslation({ x: this.shape.x, y: -this.shape.y });
	}

	destroy() {
		this.destroyed = true;
		this.game.world.removeRigidBody(this.rigidBody);
		this.game.container.removeChild(this.shape);
	}
}
