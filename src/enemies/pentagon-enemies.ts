import * as PIXI from 'pixi.js';
import { RAPIER } from '../helper/rapier';
import { sound } from '@pixi/sound';

import Game from '../app';
import { GunWeapon } from '../weapons/gun';
import Enemy from './enemy';
import Player from '../player/player';

export class PentagonEnemy extends Enemy {
	weapon: GunWeapon;

	constructor(game: Game) {
		super(game);

		this.type = 2;

		this.weapon = new GunWeapon(this.game, {
			color: this.color,
			collisionGroups: 0x00100001,
			projectileSpeed: 0.15,
			fireRate: 5000,
			projectileSize: 12,
			damage: 10,
			lifetime: 4000,
			sound: false
		});

		this.speed = 900;
	}

	createEyes() {
		this.color = 0x6366f1;
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

	updateVisuals(
		deltaTime: number,
		nearestPlayer: Player,
		dx: number,
		dy: number,
		distance: number
	): void {
		const angle = Math.atan2(dy, dx);

		const rotationSpeed = 0.001;
		this.rotation += rotationSpeed * deltaTime;

		// move eyes
		this.leftEye?.move(-this.rotation + angle);
		this.rightEye?.move(-this.rotation + angle);

		this.updateEyes(deltaTime, nearestPlayer, distance);

		this.enemyContainer.position.set(this.x, this.y);
	}

	attack(deltaTime: number, nearestPlayer: Player, dx: number, dy: number, distance: number): void {
		if (distance < 400) {
			if (this.weapon.fire(this.position, nearestPlayer.position)) {
				sound.play('enemy-shooting');
			}
		}

		this.weapon.update(deltaTime);
	}
}
