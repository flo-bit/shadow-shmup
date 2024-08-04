import Game from '../app';
import { Light } from '../light';
import * as PIXI from 'pixi.js';
import { RAPIER } from '../helper/rapier';
import { Collider, RigidBody, Vector2 } from '@dimforge/rapier2d';
import { Weapon } from './weapon';

/**
 * triangle that spins and goes to left and right of player
 */
export class Knife extends Weapon {
	speed: number = 0.003;
	distance: number = 150;
	current: number = 0;

	angle: number = 1;

	direction: 'left' | 'right' | 'both' = 'both';

	constructor(game: Game, color: number) {
		super(game, color);

		this.shape = new PIXI.Graphics()
			.poly([-this.size, -this.size / 2, this.size, -this.size / 2, 0, this.size])
			.fill(this.color);

		this.game.container.addChild(this.shape);

		this.createRidigBody();
	}

	createRidigBody(): void {
		if (!this.shape) return;

		const rigidBodyDesc = RAPIER()
			.RigidBodyDesc.kinematicPositionBased()
			.setTranslation(this.shape.x, this.shape.y);
		this.rigidBody = this.game.world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER()
			.ColliderDesc.ball(this.size)
			.setCollisionGroups(0x00040002)
			.setSensor(true)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS);

		this.game.world.createCollider(colliderDesc, this.rigidBody);

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

	update(deltaTime: number, x: number, y: number) {
		this.current += deltaTime * this.speed;

		let dx = Math.cos(this.current) * this.distance;
		if (this.direction === 'left') dx = -Math.abs(dx);
		else if (this.direction === 'right') dx = Math.abs(dx);

		this.x = x + Math.cos(this.angle) * dx;
		this.y = y + Math.sin(this.angle) * dx;

		// this.x = x + dx;
		// this.y = y + Math.cos(this.current * 0.25) * this.distance * 0.05;

		if (this.shape) {
			this.shape.rotation = this.current * 4;
		}
	}

	destroy() {
		if (this.shape) this.shape.destroy();
		if (this.rigidBody) this.game.world.removeRigidBody(this.rigidBody);
	}
}
