import { Collider } from '@dimforge/rapier2d';
import Game from './app';
import { RAPIER } from './rapier';
import * as PIXI from 'pixi.js';

export default class Obstacle {
	game: Game;
	size: number = 60;
	container: PIXI.Container;
	collider: Collider;
	graphics: PIXI.Graphics;

	constructor(
		game: Game,
		container: PIXI.Container,
		x: number,
		y: number,
		width: number,
		height: number
	) {
		this.game = game;

		const colliderDesc = RAPIER()
			.ColliderDesc.cuboid(width / 2, height / 2)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00090009)
			.setTranslation(x, -y);
		this.collider = this.game.world.createCollider(colliderDesc);

		this.graphics = new PIXI.Graphics().rect(0, 0, width, height).fill(0);
		this.graphics.pivot.set(width / 2, height / 2);
		this.graphics.position.set(x, y);
		this.graphics.zIndex = -10;

		this.container = container;
		container.addChild(this.graphics);
	}

	destroy() {
		this.game.world.removeCollider(this.collider, false);
		this.container.removeChild(this.graphics);
	}
}