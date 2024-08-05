import * as PIXI from 'pixi.js';
import { sound } from '@pixi/sound';

import { GunWeapon } from '../weapons/gun';
import Enemy from './enemy';
import Game from '../app';
import Player from '../player/player';

export class SphereEnemy extends Enemy {
	weapon: GunWeapon;

	indicator?: PIXI.Graphics;

	shootingDistance = 20;

	fireDelay: number = 1000;
	cooldown: number = 0;

	shooting: boolean = false;

	burstNumber: number = 10;

	color: number = 0xd946ef;

	constructor(game: Game) {
		super(game);

		this.type = 1;

		this.weapon = new GunWeapon(this.game, {
			color: this.color,
			collisionGroups: 0x00100001,
			projectileSpeed: 0.3,
			fireRate: 1000,
			projectileSize: 4,
			lifetime: 300,
			damage: 5,
			showParticles: true,
			sound: false
		});

		this.createIndicator();

		this.speed = 300;

		this.setup();
	}

	async createIndicator() {
		this.indicator = new PIXI.Graphics()
			.circle(0, 0, this.size + this.shootingDistance)
			.stroke({ color: this.color, width: 5 });
		this.indicator.scale.set(0);
		this.indicator.zIndex = -10;
		this.enemyContainer.addChild(this.indicator);
	}

	attack(deltaTime: number, nearestPlayer: Player, dx: number, dy: number, distance: number): void {
		if (this.cooldown > 0) {
			this.cooldown -= deltaTime;

			if (this.indicator) {
				this.indicator.scale.set(1 - this.cooldown / this.fireDelay);
			}
		}

		if (this.shooting && this.cooldown <= 0 && this.weapon.cooldown <= 0) {
			for (let i = 0; i < this.burstNumber; i++) {
				this.weapon.cooldown = -1;
				// get angle
				let angle = (Math.PI / this.burstNumber) * 2 * i;
				let x = Math.cos(angle) + this.position.x;
				let y = Math.sin(angle) + this.position.y;
				this.weapon.fire(this.position, { x, y });
			}

			this.shooting = false;

			this.indicator?.scale.set(0);

			sound.play('enemy-exploding');
		}

		if (distance < 150 && this.cooldown <= 0) {
			this.shooting = true;
			this.cooldown = this.fireDelay;
		}

		this.weapon.update(deltaTime);
	}
}
