import { Vector2 } from '@dimforge/rapier2d';
import Game from './app.js';
import Enemy, { PentagonEnemy, SphereEnemy, TriangleEnemy } from './enemy.js';

export default class EnemyManager {
	game: Game;

	enemies: Enemy[] = [];

	enemyTypes = [SphereEnemy, TriangleEnemy, PentagonEnemy];

	point: Vector2 = new Vector2(0, 0);

	constructor(game: Game) {
		this.game = game;
	}

	randomEnemyType() {
		const randomIndex = Math.floor(Math.random() * this.enemyTypes.length);
		return this.enemyTypes[randomIndex];
	}

	addEnemy(enemyType: typeof Enemy = this.randomEnemyType()) {
		const enemy = new enemyType(this.game);
		this.enemies.push(enemy);
	}

	update(deltaTime: number) {
		// delete enemies that are destroyed
		this.enemies = this.enemies.filter((enemy) => !enemy.destroyed);

		this.enemies.forEach((enemy) => {
			enemy.update(deltaTime);
		});
	}

	getClosestEnemy(
		position: { x: number; y: number },
		maxDist: number,
		output:
			| {
					enemy: Enemy | undefined;
					distance: number;
			  }
			| undefined = undefined
	): Enemy | undefined {
		this.point.x = position.x;
		this.point.y = -position.y;

		let solid = true;

		let proj = this.game.world.projectPoint(this.point, solid, undefined, 0x00020002);

		if (proj) {
			let enemy = proj.collider.parent()?.userData as Enemy;

			if (!enemy) {
				if (output) {
					output.enemy = undefined;
					output.distance = 0;
				}
				return;
			}

			// check if enemy is within max distance
			const dist = Math.sqrt((enemy.x - position.x) ** 2 + (enemy.y - position.y) ** 2);

			if (dist < maxDist) {
				if (output) {
					output.enemy = enemy;
					output.distance = dist;
				}
				return enemy;
			}
		}

		if (output) {
			output.enemy = undefined;
			output.distance = 0;
		}
		return undefined;
	}

	killAll(dropItems: boolean = false) {
		this.enemies.forEach((enemy) => {
			enemy.destroy(dropItems);
		});

		this.enemies = [];
	}
}
