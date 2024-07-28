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

	light?: PIXI.Sprite;

	constructor(game: Game, options: ItemOptions) {
		this.game = game;

		this.size = options.size;
		this.color = options.color;

		this.type = options.type;

		this.lifetime = options.lifetime ?? 20000;

		this.shape = new PIXI.Graphics().circle(0, 0, this.size / 2).fill(this.color);

		this.shape.x = options.x;
		this.shape.y = options.y;

		game.container.addChild(this.shape);

		this.addGlow();

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

	get x() {
		if (this.rigidBody) return this.rigidBody.translation().x;

		return this.shape.x;
	}
	set x(value) {
		this.shape.x = value;
		this.rigidBody?.setTranslation({ x: value, y: -this.y }, true);
	}

	get y() {
		if (this.rigidBody) return -this.rigidBody.translation().y;

		return this.shape.y;
	}
	set y(value) {
		this.shape.y = value;
		this.rigidBody?.setTranslation({ x: this.x, y: -value }, true);
	}

	get position() {
		if (this.rigidBody) {
			let v = this.rigidBody.translation();
			return { x: v.x, y: -v.y };
		}

		return this.shape.position;
	}
	set position(value) {
		this.shape.position = value;

		this.rigidBody?.setTranslation({ x: this.x, y: -this.y }, true);
	}

	async addGlow() {
		const texture = await PIXI.Assets.load('./light.png');
		this.light = PIXI.Sprite.from(texture);
		this.light.tint = this.color;
		this.light.anchor.set(0.5);
		this.light.scale.set(0.1);
		this.light.zIndex = -1;
		this.light.alpha = 0.2;

		this.shape.addChild(this.light);
	}

	pickup(player: Player) {
		this.game.spawnParticles(this.shape.x, this.shape.y, 5, this.color);

		player.items[this.type] += 1;

		this.game.upgradeManager.addItem(this.type);
		this.destroy();
	}

	update(deltaTime: number) {
		if (this.destroyed) return;
		this.life += deltaTime;

		if (this.life >= this.lifetime) {
			this.destroy();
			return;
		}

		let closestPlayer = this.game.playerManager?.getClosestPlayer({
			x: this.shape.x,
			y: this.shape.y
		});

		if (closestPlayer) {
			let dx = closestPlayer.x - this.shape.x;
			let dy = closestPlayer.y - this.shape.y;
			let dist = Math.hypot(dx, dy);

			// move towards player
			if (dist < 80) {
				let speed = 0.3;
				this.x += (dx / dist) * speed * deltaTime;
				this.y += (dy / dist) * speed * deltaTime;
			}
		}
		/*
		let closestPlayer = this.game.lightManager?.getClosestLight({
			x: this.shape.x,
			y: this.shape.y
		});

		if (closestPlayer) {
			let dist = Math.hypot(closestPlayer.x - this.shape.x, closestPlayer.y - this.shape.y);
			this.shape.alpha = 1 - dist / (closestPlayer.scale * 300);
		}*/

		this.shape.scale.set(1 - this.life / this.lifetime + 0.2);
	}

	destroy() {
		if (this.destroyed) return;

		this.destroyed = true;
		this.shape.destroy();
		this.game.world.removeRigidBody(this.rigidBody);
	}
}
