import Game from './app';
import { Projectile } from './projectile';

export type ProjectileData = {
	position: { x: number; y: number };
	enemyPosition: { x: number; y: number };
	speed: number;
	damage: number;
	angleOffset: number;
	size?: number;
	color?: number;
	lifetime?: number;
	collisionGroups?: number;
	showParticles?: boolean;

	outline?: boolean;

	hit?: () => void;

	piercing?: number;
};

export default class ProjectileManager {
	projectiles: Projectile[] = [];

	game: Game;
	constructor(game: Game) {
		this.game = game;
	}

	addProjectile(data: ProjectileData) {
		const projectile = new Projectile(this.game, data);

		this.projectiles.push(projectile);
	}

	update(deltaTime: number) {
		for (let i = this.projectiles.length - 1; i >= 0; i--) {
			let projectile = this.projectiles[i];
			if (projectile.destroyed) {
				this.projectiles.splice(i, 1);
				continue;
			}
			projectile.update(deltaTime);

			const center = this.game.playerManager?.getCenter();
			if (!center) continue;

			// Check if projectile is too far from 0, 0
			const dx = projectile.shape.x - center.x;
			const dy = projectile.shape.y - center.y;
			const distanceSquared = dx * dx + dy * dy;

			if (distanceSquared > 1000000) {
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
