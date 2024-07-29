import { Collider, RigidBody } from '@dimforge/rapier2d';
import Game from '../app';
import * as PIXI from 'pixi.js';

/**
 * ball that flies in a circle around player
 */
export class Weapon {
	game: Game;

	size: number = 10;

	damage: number = 20;

	color: number;

	shape?: PIXI.Graphics;

	rigidBody?: RigidBody;
	collider?: Collider;

	constructor(game: Game, color: number) {
		this.game = game;

		this.color = color;
	}

	get x() {
		if (this.shape) this.shape?.x ?? 0;

		return this.rigidBody?.translation().x ?? 0;
	}
	set x(value) {
		if (this.shape) this.shape.x = value;
		this.rigidBody?.setTranslation({ x: value, y: -this.y }, true);
	}

	get y() {
		if (this.shape) return this.shape.y;

		return -(this.rigidBody?.translation().y ?? 0);
	}
	set y(value) {
		if (this.shape) this.shape.y = value;
		this.rigidBody?.setTranslation({ x: this.x, y: -value }, true);
	}

	update(deltaTime: number, x: number, y: number) {}

	destroy() {}
}
