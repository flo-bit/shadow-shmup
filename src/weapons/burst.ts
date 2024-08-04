import Game from '../app';
import { Light } from '../light';
import * as PIXI from 'pixi.js';
import { RAPIER } from '../helper/rapier';
import { Collider, RigidBody } from '@dimforge/rapier2d';
import { Weapon } from './weapon';
import { GunWeapon } from './gun';

/**
 * ball that flies in a circle around player
 */
export class BurstWeapon extends Weapon {
	cooldown: number = 0;
	fireRate: number = 1000;

	gun: GunWeapon;

	constructor(game: Game, color: number) {
		super(game, color);

		this.gun = new GunWeapon(game, {
			color: this.color,
			lifetime: 200,
			fireRate: 300,
			projectileSpeed: 1,
			projectileSize: 10,
			sound: false
		});
	}

	update(deltaTime: number, x: number, y: number) {
		this.gun.update(deltaTime);

		if (this.gun.cooldown <= 0) {
			for (let i = 0; i < 20; i++) {
				this.gun.cooldown = -1;
				// get angle
				let angle = (Math.PI / 10) * i;
				let dx = Math.cos(angle) + x;
				let dy = Math.sin(angle) + y;
				this.gun.fire({ x, y }, { x: dx, y: dy });
			}
		}
	}
}
