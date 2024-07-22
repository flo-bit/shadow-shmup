import Game from './app.js';
import Enemy from './enemy.js';
import Player from './player.js';

export default class EnemyManager {
	game: Game;

	enemies: Enemy[] = [];

	constructor(game: Game, num: number) {
		this.game = game;

		for (let i = 0; i < num; i++) {
			this.addEnemy();
		}
	}

	addEnemy() {
		const enemy = new Enemy(this.game);
		this.enemies.push(enemy);
	}

	update(deltaTime: number) {
		// delete enemies that are destroyed
		this.enemies = this.enemies.filter((enemy) => !enemy.destroyed);

		this.enemies.forEach((enemy) => {
			enemy.update(deltaTime);
		});
	}

	getClosestEnemy(position: { x: number; y: number }, maxDist: number): Enemy | undefined {
		let point = { x: position.x, y: -position.y };
		let solid = true;

		let proj = this.game.world.projectPoint(point, solid, undefined, 0x00020002);

		if (proj) {
			let enemy = proj.collider.parent()?.userData as Enemy;

			if (!enemy) return;

			// check if enemy is within max distance
			const dist = Math.sqrt(
				(enemy.enemyContainer.x - position.x) ** 2 + (enemy.enemyContainer.y - position.y) ** 2
			);

			if (dist < maxDist) {
				return enemy;
			}
		}
	}
}
