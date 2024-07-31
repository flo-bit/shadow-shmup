import Game from '../app';
import { Light } from '../light';
import * as PIXI from 'pixi.js';
import { RAPIER } from '../rapier';
import { Collider, RigidBody } from '@dimforge/rapier2d';
import { Weapon } from './weapon';

/**
 * ball that flies in a circle around player
 */
export class BallWeapon extends Weapon {
	distance: number = 100;
	speed: number = 0.002;
	angle: number = 0;

	constructor(game: Game, color: number) {
		super(game, color);

		this.shape = new PIXI.Graphics().circle(0, 0, this.size).fill(this.color);
		for (let i = 0; i < 10; i++) {
			let angle1 = (Math.PI * 2 * i) / 10;
			let angle2 = (Math.PI * 2 * (i + 1)) / 10;
			let angleBetween = (Math.PI * 2 * (i + 0.5)) / 10;

			let x1 = Math.cos(angle1) * this.size;
			let y1 = Math.sin(angle1) * this.size;
			let x2 = Math.cos(angle2) * this.size;
			let y2 = Math.sin(angle2) * this.size;
			let x3 = Math.cos(angleBetween) * this.size * 1.5;
			let y3 = Math.sin(angleBetween) * this.size * 1.5;
			this.shape.poly([x1, y1, x2, y2, x3, y3]).fill(this.color);
		}
		this.game.container.addChild(this.shape);

		const rigidBodyDesc = RAPIER()
			.RigidBodyDesc.kinematicPositionBased()
			.setTranslation(this.shape.x, this.shape.y);
		this.rigidBody = game.world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER()
			.ColliderDesc.ball(this.size * 1.5)
			.setCollisionGroups(0x00040002)
			.setSensor(true)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS);

		this.collider = game.world.createCollider(colliderDesc, this.rigidBody);

		this.rigidBody.userData = this;
	}

	set x(value: number) {
		if (this.shape) this.shape.x = value;
		this.rigidBody?.setTranslation({ x: value, y: -(this.shape?.y ?? 0) }, true);
	}

	set y(value: number) {
		if (this.shape) this.shape.y = value;
		this.rigidBody?.setTranslation({ x: this.shape?.x ?? 0, y: -value }, true);
	}

	get x() {
		if (this.shape) return this.shape.x;

		return this.rigidBody?.translation().x ?? 0;
	}

	get y() {
		if (this.shape) return this.shape.y;

		return -(this.rigidBody?.translation().y ?? 0);
	}

	update(deltaTime: number, x: number, y: number) {
		this.angle += deltaTime * this.speed;

		this.x = x + Math.cos(this.angle) * this.distance;
		this.y = y + Math.sin(this.angle) * this.distance;

		if (this.shape) {
			this.shape.rotation = this.angle * 2;
		}
	}

	destroy() {
		if (this.shape) this.shape.destroy();
		if (this.rigidBody) this.game.world.removeRigidBody(this.rigidBody);
	}
}
