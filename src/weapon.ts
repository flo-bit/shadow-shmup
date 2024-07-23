import Game from './app';
import { Projectile } from './projectile';

export class Weapon {
	game: Game;

	cooldown: number;
	projectiles: Projectile[];

	damage: number;
	fireRate: number;
	projectileSpeed: number;
	projectileSize: number;

	color: number;

	collisionGroups: number;

	constructor(game: Game, color: number, collisionGroups: number = 0x00040002) {
		this.game = game;

		this.cooldown = 0;
		this.projectiles = [];

		this.damage = 20;
		this.fireRate = 100;
		this.projectileSpeed = 0.3;
		this.projectileSize = 5;

		this.color = color;

		this.collisionGroups = collisionGroups;
	}

	fire(position: { x: number; y: number }, enemyPosition: { x: number; y: number }) {
		if (this.cooldown <= 0) {
			console.log('Firing');
			this.createProjectile(position, enemyPosition, 0);
			this.cooldown = this.fireRate;
		}
	}

	createProjectile(
		position: { x: number; y: number },
		enemyPosition: { x: number; y: number },
		angleOffset: number
	) {
		const projectile = new Projectile(
			this.game,
			position,
			enemyPosition,
			this.projectileSpeed,
			this.projectileSize,
			this.damage,
			this.color,
			angleOffset,
			this.collisionGroups
		);

		this.projectiles.push(projectile);
	}

	update(deltaTime: number) {
		this.cooldown -= deltaTime;

		for (let i = this.projectiles.length - 1; i >= 0; i--) {
			let projectile = this.projectiles[i];
			if (projectile.destroyed) {
				this.projectiles.splice(i, 1);
				continue;
			}
			projectile.update(deltaTime);

			// Check if projectile is too far from 0, 0
			const dx = projectile.shape.x;
			const dy = projectile.shape.y;
			const distanceSquared = dx * dx + dy * dy;

			if (distanceSquared > 100000000) {
				// 1000 units squared
				projectile.destroy();
				this.projectiles.splice(i, 1);
			}
		}
	}

	clearAllProjectiles() {
		for (let projectile of this.projectiles) {
			projectile.destroy();
		}
		this.projectiles = [];
	}
}
