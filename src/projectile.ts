import * as PIXI from 'pixi.js';
import { RAPIER } from './rapier';
import Game from './app';
import { ProjectileData } from './projectile-manager';

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
	color: number;

	isProjectile: true;

	lifetime: number | undefined = undefined;

	showParticles: boolean = true;

	hit?: () => void;

	piercing: number = 0;

	constructor(
		game: Game,
		data: ProjectileData
		// position: { x: number; y: number },
		// enemyPosition: { x: number; y: number },
		// speed: number,
		// size: number,
		// damage: number,
		// color: number,
		// angleOffset: number,
		// collisionGroups: number = 0x00040002
	) {
		this.game = game;
		const angle =
			Math.atan2(data.enemyPosition.y - data.position.y, data.enemyPosition.x - data.position.x) +
			data.angleOffset;

		this.vx = Math.cos(angle) * data.speed;
		this.vy = Math.sin(angle) * data.speed;
		this.damage = data.damage;
		this.size = data.size ?? 2;

		this.color = data.color ?? 0xffffff;

		this.shape = new PIXI.Graphics().rect(0, 0, this.size, this.size);
		if (data.outline) this.shape.stroke({ color: this.color, width: 4 });
		else this.shape.fill(this.color);

		this.shape.zIndex = 10;
		this.shape.pivot.set(this.size / 2, this.size / 2);

		this.shape.x = data.position.x;
		this.shape.y = data.position.y;

		game.container.addChild(this.shape);

		const rigidBodyDesc = RAPIER()
			.RigidBodyDesc.kinematicPositionBased()
			.setTranslation(this.shape.x, this.shape.y);
		this.rigidBody = game.world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER()
			.ColliderDesc.cuboid(this.size / 2, this.size / 2)
			.setCollisionGroups(data.collisionGroups ?? 0x00040002)
			.setSensor(true)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS);

		this.collider = game.world.createCollider(colliderDesc, this.rigidBody);

		this.rigidBody.userData = this;

		this.lifetime = data.lifetime;

		this.showParticles = data.showParticles ?? true;

		this.hit = data.hit;

		if (data.piercing) this.piercing = data.piercing;

		this.isProjectile = true;
	}

	update(deltaTime: number) {
		if (this.destroyed) return;

		this.shape.x += this.vx * deltaTime;
		this.shape.y += this.vy * deltaTime;

		this.rigidBody.setTranslation({ x: this.shape.x, y: -this.shape.y });

		if (this.lifetime !== undefined) {
			this.lifetime -= deltaTime;

			if (this.lifetime <= 0) {
				this.destroy();

				if (this.showParticles) this.game.spawnParticles(this.shape.x, this.shape.y, 4, this.color);
			}
		}
	}

	setPosition(x: number, y: number) {
		this.shape.x = x;
		this.shape.y = y;

		this.rigidBody.setTranslation({ x, y: -y });
	}

	onHit() {
		if (this.hit) this.hit();
	}

	destroy() {
		if (this.destroyed) return;
		this.destroyed = true;
		this.game.world.removeRigidBody(this.rigidBody);
		this.game.container.removeChild(this.shape);
	}
}
