import Game from './app';
import { Projectile } from './projectile';

import { sound } from '@pixi/sound';

export type WeaponOptions = {
	damage?: number;
	fireRate?: number;
	projectileSpeed?: number;
	projectileSize?: number;
	color?: number;
	collisionGroups?: number;
};

export class Weapon {
	game: Game;

	cooldown: number = 0;

	damage: number = 20;
	fireRate: number = 100;
	projectileSpeed: number = 0.3;
	projectileSize: number = 5;

	color: number = 0xffffff;

	collisionGroups: number = 0x00040002;

	constructor(game: Game, options: WeaponOptions | undefined = undefined) {
		this.game = game;

		this.cooldown = 0;

		if (!options) return;

		if (options.damage) this.damage = options.damage;
		if (options.fireRate) this.fireRate = options.fireRate;
		if (options.projectileSpeed) this.projectileSpeed = options.projectileSpeed;
		if (options.projectileSize) this.projectileSize = options.projectileSize;

		if (options.color) this.color = options.color;
		if (options.collisionGroups) this.collisionGroups = options.collisionGroups;
	}

	fire(position: { x: number; y: number }, enemyPosition: { x: number; y: number }) {
		if (this.cooldown <= 0) {
			this.game.addProjectile({
				position,
				enemyPosition,
				angleOffset: 0,
				speed: this.projectileSpeed,
				size: this.projectileSize,
				damage: this.damage,
				color: this.color,
				collisionGroups: this.collisionGroups
			});
			this.cooldown = this.fireRate;

			sound.play('laser');
		}
	}

	update(deltaTime: number) {
		this.cooldown -= deltaTime;
	}
}
