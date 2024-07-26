import { Collider, RigidBody } from '@dimforge/rapier2d';
import Game from './app';
import * as PIXI from 'pixi.js';
import { RAPIER } from './rapier';
import Player from './player';

export type ItemOptions = {
	x: number;
	y: number;
	size: number;
	color: number;
	type: number;
	collisionGroups?: number;
	lifetime?: number;
};

export class Item {
	game: Game;

	shape: PIXI.Graphics;
	size: number;
	color: number;

	rigidBody: RigidBody;

	collider: Collider;

	destroyed: boolean = false;

	type: number;

	lifetime: number;

	life: number = 0;

	constructor(game: Game, options: ItemOptions) {
		this.game = game;

		this.size = options.size;
		this.color = options.color;

		this.type = options.type;

		this.lifetime = options.lifetime ?? 10000;

		this.shape = new PIXI.Graphics().rect(0, 0, this.size, this.size).fill(this.color);

		this.shape.x = options.x;
		this.shape.y = options.y;
		this.shape.pivot.set(this.size / 2, this.size / 2);

		game.container.addChild(this.shape);

		const rigidBodyDesc = RAPIER()
			.RigidBodyDesc.dynamic()
			.setTranslation(this.shape.x, -this.shape.y);
		this.rigidBody = game.world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER()
			.ColliderDesc.cuboid(this.size / 2, this.size / 2)
			.setCollisionGroups(options.collisionGroups ?? 0x00200001)
			.setSensor(true)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS);

		this.collider = game.world.createCollider(colliderDesc, this.rigidBody);

		this.rigidBody.userData = this;
	}

	pickup(player: Player) {
		this.game.spawnParticles(this.shape.x, this.shape.y, 5, this.color);

		player.items[this.type] += 1;
		this.destroy();
	}

	update(deltaTime: number) {
		if (this.destroyed) return;
		this.life += deltaTime;

		if (this.life >= this.lifetime) {
			this.destroy();
			return;
		}

		let closestPlayer = this.game.lightManager?.getClosestLight({
			x: this.shape.x,
			y: this.shape.y
		});

		if (closestPlayer) {
			let dist = Math.hypot(closestPlayer.x - this.shape.x, closestPlayer.y - this.shape.y);
			this.shape.alpha = 1 - dist / (closestPlayer.scale * 300);
		}

		this.shape.alpha *= 1 - this.life / this.lifetime;
	}

	destroy() {
		if (this.destroyed) return;

		this.destroyed = true;
		this.shape.destroy();
		this.game.world.removeRigidBody(this.rigidBody);
	}
}
