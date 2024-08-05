import * as PIXI from 'pixi.js';
import { RAPIER } from '../helper/rapier';
import { Vector2 } from '@dimforge/rapier2d';

import Game from '../app';
import Enemy from './enemy';
import Player from '../player/player';

export class LineEnemy extends Enemy {
	color = 0x22c55e;

	line: PIXI.Graphics;

	cooldown: number = 0;
	fireTime: number = 1000;
	fireRate: number = 1000;

	currentTime: number = 0;

	constructor(game: Game) {
		super(game);

		this.type = 0;
		this.speed = 600;

		this.line = new PIXI.Graphics();
		this.enemyContainer.addChild(this.line);

		this.setup();
	}

	createEyes() {
		super.createEyes();
	}

	createShape(): void {
		this.size = 20;
		this.shape = new PIXI.Graphics()
			.rect(-this.size * 2, -this.size / 4, this.size * 4, this.size / 2)
			.fill(0);
		this.enemyContainer.addChild(this.shape);

		this.highlight = new PIXI.Graphics()
			.rect(-this.size * 2, -this.size / 4, this.size * 4, this.size / 2)
			.fill(this.color);

		this.enemyContainer.addChild(this.highlight);
		this.highlight.alpha = 0;
	}

	createRidigBody(): void {
		const rigidBodyDesc = RAPIER()
			.RigidBodyDesc.dynamic()
			.setTranslation(this.x, this.y)
			.lockRotations()
			.setLinearDamping(1);
		this.rigidBody = this.game.world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER()
			.ColliderDesc.cuboid(this.size * 2, this.size / 4)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020007)
			.setDensity(1);

		this.game.world.createCollider(colliderDesc, this.rigidBody);

		this.rigidBody.userData = this;
	}

	updateVisuals(
		deltaTime: number,
		nearestPlayer: Player,
		dx: number,
		dy: number,
		distance: number
	) {
		// move eyes
		const angle = Math.atan2(dy, dx);

		const rotationSpeed = 0.0003;
		this.rotation += rotationSpeed * deltaTime;

		// move eyes
		this.leftEye?.move(-this.rotation + angle);
		this.rightEye?.move(-this.rotation + angle);

		this.updateEyes(deltaTime, nearestPlayer, distance);

		this.enemyContainer.position.set(this.x, this.y);

		this.updateHighlight(deltaTime);

		const ray = new (RAPIER().Ray)(
			new (RAPIER().Vector2)(this.x, -this.y),
			new (RAPIER().Vector2)(Math.cos(this.rotation), -Math.sin(this.rotation))
		);

		let hitPoint = { x: 0, y: 0 };

		const rayLength = 10000000;

		const hit = this.game.world.castRay(ray, rayLength, true, undefined, 0x00090009);

		if (hit) {
			let hitRB = hit.collider.parent();
			if (hitRB?.userData instanceof Player) {
				hitRB.userData.takeDamage(deltaTime * 0.05);
			}
			hitPoint = ray.pointAt(hit.toi);
		} else {
			hitPoint.x = ray.dir.x * rayLength;
			hitPoint.y = ray.dir.y * rayLength;
		}

		let x = hitPoint.x - this.x;
		let y = -hitPoint.y - this.y;

		let length = Math.hypot(x, y);

		this.line.clear();
		this.line.moveTo(0, 0);
		this.line.lineTo(length, 0);

		this.line.stroke({ width: 4, color: this.color });
	}

	attack(deltaTime: number, nearestPlayer: Player, dx: number, dy: number, distance: number): void {
		if (this.destroyed) return;

		const x = Math.cos(this.rotation + Math.PI / 2);
		const y = Math.sin(this.rotation + Math.PI / 2);

		let hitPoint = { x: 0, y: 0 };
	}

	move(deltaTime: number, nearestPlayer: Player, dx: number, dy: number, distance: number) {
		if (distance > 300) {
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
	}

	destroy(dropItem: boolean = true): void {
		if (this.destroyed) return;

		super.destroy(dropItem);
	}
}
