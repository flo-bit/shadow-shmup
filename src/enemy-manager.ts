import Game from './app.js';
import Enemy, { PentagonEnemy, SphereEnemy, TriangleEnemy } from './enemy.js';

export default class EnemyManager {
	game: Game;

	enemies: Enemy[] = [];

	enemyTypes = [SphereEnemy, TriangleEnemy, PentagonEnemy];

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

	getClosestEnemy(position: { x: number; y: number }, maxDist: number): Enemy | undefined {
		let point = { x: position.x, y: -position.y };
		let solid = true;

		let proj = this.game.world.projectPoint(point, solid, undefined, 0x00020002);

		if (proj) {
			let enemy = proj.collider.parent()?.userData as Enemy;

			if (!enemy) return;

			// check if enemy is within max distance
			const dist = Math.sqrt((enemy.x - position.x) ** 2 + (enemy.y - position.y) ** 2);

			if (dist < maxDist) {
				return enemy;
			}
		}
	}

	killAll() {
		this.enemies.forEach((enemy) => {
			enemy.destroy();
		});

		this.enemies = [];
	}
}
