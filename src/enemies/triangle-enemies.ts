import * as PIXI from 'pixi.js';
import { RAPIER } from '../helper/rapier';
import { Vector2 } from '@dimforge/rapier2d';

import Game from '../app';
import { Projectile } from '../weapons/projectile';
import Enemy from './enemy';
import Player from '../player/player';

export class TriangleEnemy extends Enemy {
	projectile: Projectile;

	color = 0x0ea5e9;

	constructor(game: Game) {
		super(game);

		this.type = 0;
		this.speed = 600;

		let position = { x: this.x, y: this.y };

		this.projectile = new Projectile(this.game, {
			position,
			enemyPosition: position,
			speed: 0.0,
			damage: 10,
			size: 2,
			angleOffset: 0,
			hit: () => {
				this.destroy();
			},
			collisionGroups: 0x00100001,
			color: this.color
		});

		this.setup();
	}

	createEyes() {
		super.createEyes();
	}

	createShape(): void {
		this.size = 20;
		this.shape = new PIXI.Graphics()
			.poly([-this.size, -this.size / 2, this.size, -this.size / 2, 0, this.size])
			.fill(0);
		this.enemyContainer.addChild(this.shape);

		this.highlight = new PIXI.Graphics()
			.poly([-this.size, -this.size / 2, this.size, -this.size / 2, 0, this.size])
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
			.ColliderDesc.triangle(
				new Vector2(-this.size, this.size / 2),
				new Vector2(this.size, this.size / 2),
				new Vector2(0, -this.size)
			)
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

		this.leftEye?.move(Math.PI / 2);
		this.rightEye?.move(Math.PI / 2);

		this.updateEyes(deltaTime, nearestPlayer, distance);

		this.rotation = angle - Math.PI / 2;

		this.enemyContainer.position.set(this.x, this.y);

		this.updateHighlight(deltaTime);
	}

	attack(deltaTime: number, nearestPlayer: Player, dx: number, dy: number, distance: number): void {
		if (this.destroyed) return;

		const x = Math.cos(this.rotation + Math.PI / 2);
		const y = Math.sin(this.rotation + Math.PI / 2);

		this.projectile.setPosition(this.x + x * 20 - 1, this.y + y * 20 - 1);

		if (distance < nearestPlayer.viewDistance) {
			this.projectile.shape.alpha = 1;
		} else {
			this.projectile.shape.alpha = 0;
		}
	}

	destroy(dropItem: boolean = true): void {
		if (this.destroyed) return;

		this.projectile.destroy();
		super.destroy(dropItem);
	}
}
