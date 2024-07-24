import Game from './app';
import * as PIXI from 'pixi.js';
import Obstacle from './obstacles';

export class ObstacleManager {
	container: PIXI.Container;

	obstacles: Obstacle[] = [];

	game: Game;
	constructor(game: Game) {
		this.game = game;

		this.container = new PIXI.Container();
		this.container.zIndex = 5;

		this.game.container.addChild(this.container);

		this.createObstacles();
	}

	createObstacles() {
		for (let i = 0; i < 50; i++) {
			const x = (Math.random() - 0.5) * 1400;
			const y = (Math.random() - 0.5) * 1400;
			const width = 60;
			const height = 60;

			const obstacle = new Obstacle(this.game, this.container, x, y, width, height);
			this.obstacles.push(obstacle);
		}
	}

	update(deltaTime: number) {
		const position = this.game.playerManager?.getCenter();

		if (!position) return;
	}
}
