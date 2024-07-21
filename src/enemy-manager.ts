import Enemy from './enemy.js';

export default class EnemyManager {
	constructor(num) {
		this.enemies = [];

		for (let i = 0; i < num; i++) {
			this.addEnemy();
		}
	}

	addEnemy() {
		const enemy = new Enemy(this.container);
		this.enemies.push(enemy);
	}

	update(deltaTime, player) {
		// delete enemies that are destroyed
		this.enemies = this.enemies.filter((enemy) => !enemy.destroyed);

		this.enemies.forEach((enemy) => {
			enemy.update(deltaTime, player);
		});
	}

	getClosestEnemy(position: { x: number; y: number }) {
		let point = { x: position.x, y: -position.y };
		let solid = true;

		let proj = world.projectPoint(point, solid, null, 0x00020002);

		if (proj) {
			return proj.collider._parent.userData;
		}
	}
}
