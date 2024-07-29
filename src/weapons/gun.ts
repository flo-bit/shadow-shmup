import Game from '../app';
import { Projectile } from '../projectile';

import { sound } from '@pixi/sound';

export type WeaponOptions = {
	damage?: number;
	fireRate?: number;
	projectileSpeed?: number;
	projectileSize?: number;
	color?: number;
	collisionGroups?: number;

	lifetime?: number;

	sound?: boolean;

	showParticles?: boolean;

	piercing?: number;
};

export class GunWeapon {
	game: Game;

	cooldown: number = 0;

	damage: number = 20;
	fireRate: number = 100;
	projectileSpeed: number = 0.3;
	projectileSize: number = 5;

	color: number = 0xffffff;

	collisionGroups: number = 0x00040002;

	lifetime: number | undefined = undefined;

	sound: boolean = true;

	showParticles: boolean = false;

	piercing: number = 0;

	constructor(game: Game, options: WeaponOptions | undefined = undefined) {
		this.game = game;

		this.cooldown = 0;

		if (!options) return;

		if (options.damage) this.damage = options.damage;
		if (options.fireRate) this.fireRate = options.fireRate;
		if (options.projectileSpeed !== undefined) this.projectileSpeed = options.projectileSpeed;
		if (options.projectileSize) this.projectileSize = options.projectileSize;

		if (options.color) this.color = options.color;
		if (options.collisionGroups) this.collisionGroups = options.collisionGroups;
		if (options.lifetime) this.lifetime = options.lifetime;

		if (options.sound !== undefined) this.sound = options.sound;

		if (options.showParticles !== undefined) this.showParticles = options.showParticles;

		if (options.piercing) this.piercing = options.piercing;
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
				collisionGroups: this.collisionGroups,
				lifetime: this.lifetime,
				showParticles: this.showParticles,
				piercing: this.piercing
			});
			this.cooldown = this.fireRate;

			if (this.sound) sound.play('laser');
		}
	}

	update(deltaTime: number) {
		this.cooldown -= deltaTime;
	}
}
