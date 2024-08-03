import Game from './app';
import Enemy, { PentagonEnemy, SphereEnemy, TriangleEnemy } from './enemy';

type EnemySpawnConfig = {
	type: typeof Enemy;
	spawnRate: number;
	maxCount?: number;
	upgradeFunction?: (enemy: Enemy) => void;
};

export class Wave {
	game: Game;
	enemies: EnemySpawnConfig[];
	spawnAccumulators: number[];
	enemyCounts: number[];
	waveTime: number = 0;
	isActive: boolean = false;
	startDelay: number;
	index: number;

	constructor(game: Game, enemies: EnemySpawnConfig[], index: number, startDelay: number = 3) {
		this.game = game;
		this.enemies = enemies;
		this.spawnAccumulators = new Array(enemies.length).fill(0);
		this.enemyCounts = new Array(enemies.length).fill(0);
		this.startDelay = startDelay;
		this.index = index;
	}

	update(deltaTime: number) {
		const deltaTimeSeconds = deltaTime / 1000;
		this.waveTime += deltaTimeSeconds;

		if (this.waveTime >= this.startDelay) {
			this.isActive = true;
		}

		// if (this.isActive) {
		this.enemies.forEach((enemy, index) => {
			this.spawnAccumulators[index] += deltaTimeSeconds;
			const spawnInterval = 1 / enemy.spawnRate;

			while (this.spawnAccumulators[index] >= spawnInterval) {
				if (!enemy.maxCount || this.enemyCounts[index] < enemy.maxCount) {
					let spawned = this.spawnEnemy(enemy.type);

					// if (index === 0 && spawned) {
					// 	// triple speed
					// 	spawned.speed *= 3;
					// }

					this.enemyCounts[index]++;
				}
				this.spawnAccumulators[index] -= spawnInterval;
			}
		});
		// }
	}

	spawnEnemy(enemyType: typeof Enemy) {
		const enemy = this.game.enemyManager?.addEnemy(enemyType);
		if (enemy) {
			// Apply all accumulated upgrades to the new enemy
			const upgrades = this.game.waveManager?.getEnemyUpgrades(enemyType) ?? [];
			upgrades.forEach((upgrade) => upgrade(enemy));
		}
		return enemy;
	}
}

type WaveData = {
	enemies: EnemySpawnConfig[];
	startDelay?: number;
	neededItems: number;
};

export class WaveManager {
	game: Game;
	waves: Wave[];
	currentWave: number = -1;
	private enemyUpgrades: Map<typeof Enemy, ((enemy: Enemy) => void)[]> = new Map();

	data: WaveData[];

	constructor(game: Game, startWave: number = -1, waves: WaveData[] = exampleWaves) {
		this.game = game;
		this.currentWave = startWave;
		this.waves = waves.map(
			(wave, index) => new Wave(this.game, wave.enemies, index, wave.startDelay)
		);

		this.data = waves;
	}

	update(deltaTime: number) {
		if (this.waves.length === 0 || this.currentWave >= this.waves.length) return;

		if (this.currentWave === -1) {
			this.nextWave();
		}

		if (this.currentWave >= 0 && this.currentWave < this.waves.length) {
			this.waves[this.currentWave].update(deltaTime);
		}
	}

	nextWave() {
		if (this.currentWave < this.waves.length - 1) {
			this.collectEnemyUpgrades();

			this.currentWave++;
			this.game.upgradeManager.neededXP = this.data[this.currentWave].neededItems;
		}
	}

	collectEnemyUpgrades() {
		if (this.currentWave < 0 || this.currentWave >= this.waves.length) return;

		const currentWaveData = this.waves[this.currentWave];
		currentWaveData.enemies.forEach((enemy) => {
			if (enemy.upgradeFunction) {
				if (!this.enemyUpgrades.has(enemy.type)) {
					this.enemyUpgrades.set(enemy.type, []);
				}
				const upgrades = this.enemyUpgrades.get(enemy.type);
				if (!upgrades) {
					console.error('No upgrades found for', enemy.type);
					return;
				}
				upgrades.push(enemy.upgradeFunction);
				this.enemyUpgrades.set(enemy.type, upgrades);
			}
		});
	}

	getEnemyUpgrades(enemyType: typeof Enemy): ((enemy: Enemy) => void)[] {
		return this.enemyUpgrades.get(enemyType) || [];
	}

	getCurrentWave(): Wave | undefined {
		if (this.currentWave >= 0 && this.currentWave < this.waves.length) {
			return this.waves[this.currentWave];
		}
	}
}

// Example usage:
const exampleWaves: WaveData[] = [
	// wave 1
	{
		enemies: [
			{
				type: SphereEnemy,
				spawnRate: 1,
				upgradeFunction: (enemy) => {
					enemy.health *= 1.8;
					enemy.value *= 3;
				}
			},
			{
				type: TriangleEnemy,
				spawnRate: 1,
				upgradeFunction: (enemy) => {
					enemy.speed *= 1.3;
					enemy.value *= 2.5;
				}
			}
		],
		startDelay: 3,
		neededItems: 10
	},
	// wave 2
	{
		enemies: [
			{
				type: SphereEnemy,
				spawnRate: 1,
				upgradeFunction: (enemy) => {
					enemy.health *= 2;
					enemy.value *= 2;
					if (enemy instanceof SphereEnemy) {
						enemy.burstNumber *= 1.3;
					}
				}
			},
			{
				type: PentagonEnemy,
				spawnRate: 0.1,
				upgradeFunction: (enemy) => {
					if (enemy instanceof PentagonEnemy) {
						enemy.weapon.fireRate *= 0.8;
					}

					enemy.value *= 3;
				}
			}
		],
		startDelay: 3,
		neededItems: 20
	},
	// wave 3
	{
		enemies: [
			{
				type: PentagonEnemy,
				spawnRate: 1,
				upgradeFunction: (enemy) => {
					enemy.health *= 1.4;

					enemy.value *= 2;
				}
			},
			{
				type: TriangleEnemy,
				spawnRate: 2,
				upgradeFunction: (enemy) => {
					enemy.speed *= 1.3;

					enemy.value *= 3;
				}
			}
		],
		startDelay: 3,
		neededItems: 50
	},
	// wave 4
	{
		enemies: [
			{
				type: SphereEnemy,
				spawnRate: 0.6,
				upgradeFunction: (enemy) => {
					enemy.value *= 3;

					if (enemy instanceof SphereEnemy) {
						enemy.weapon.damage *= 2;
						enemy.burstNumber *= 1.5;
						if (enemy.weapon.lifetime) enemy.weapon.lifetime *= 1.5;
					}
				}
			},
			{
				type: TriangleEnemy,
				spawnRate: 0.6,
				upgradeFunction: (enemy) => {
					enemy.value *= 2;

					enemy.speed *= 1.2;
					if (enemy instanceof TriangleEnemy) {
						enemy.projectile.damage *= 2;
					}
				}
			},
			{
				type: PentagonEnemy,
				spawnRate: 0.6,
				upgradeFunction: (enemy) => {
					enemy.value *= 3;

					if (enemy instanceof PentagonEnemy) {
						enemy.weapon.damage *= 2;
						enemy.health *= 1.5;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 100
	},
	// wave 5
	{
		enemies: [
			{
				type: PentagonEnemy,
				spawnRate: 1,
				upgradeFunction: (enemy) => {
					enemy.value *= 4;

					if (enemy instanceof PentagonEnemy) {
						enemy.weapon.damage *= 1.5;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 300
	},
	// wave 6
	{
		enemies: [
			{
				type: TriangleEnemy,
				spawnRate: 3,
				upgradeFunction: (enemy) => {
					enemy.value *= 4;

					if (enemy instanceof TriangleEnemy) {
						enemy.speed *= 1.5;
						enemy.projectile.damage *= 2;
						enemy.health *= 1.7;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 500
	},
	// wave 7
	{
		enemies: [
			{
				type: SphereEnemy,
				spawnRate: 3,
				upgradeFunction: (enemy) => {
					enemy.value *= 3;

					if (enemy instanceof SphereEnemy) {
						enemy.speed *= 1.5;
						enemy.health *= 1.2;
						enemy.burstNumber *= 1.5;
						enemy.weapon.damage *= 1.5;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 1000
	},
	// wave 8
	{
		enemies: [
			{
				type: SphereEnemy,
				spawnRate: 2,
				upgradeFunction: (enemy) => {
					enemy.value *= 3;

					if (enemy instanceof SphereEnemy) {
						enemy.speed *= 1.5;
						enemy.health *= 1.2;
						enemy.burstNumber *= 1.5;
						enemy.weapon.damage *= 1.5;
					}
				}
			},
			{
				type: PentagonEnemy,
				spawnRate: 2,
				upgradeFunction: (enemy) => {
					enemy.value *= 3;

					if (enemy instanceof PentagonEnemy) {
						enemy.speed *= 1.5;
						enemy.health *= 1.2;
						enemy.weapon.damage *= 1.5;
						enemy.weapon.fireRate *= 0.8;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 2000
	},
	// wave 9
	{
		enemies: [
			{
				type: SphereEnemy,
				spawnRate: 2,
				upgradeFunction: (enemy) => {
					enemy.value *= 4;

					if (enemy instanceof SphereEnemy) {
						enemy.speed *= 2;
						enemy.health *= 1.4;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 4000
	},
	// wave 10
	{
		enemies: [
			{
				type: TriangleEnemy,
				spawnRate: 4,
				upgradeFunction: (enemy) => {
					enemy.value *= 3;

					if (enemy instanceof SphereEnemy) {
						enemy.speed *= 1.5;
						enemy.health *= 1.5;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 10000
	},
	// wave 11
	{
		enemies: [
			{
				type: PentagonEnemy,
				spawnRate: 4,
				upgradeFunction: (enemy) => {
					enemy.value *= 5;

					if (enemy instanceof SphereEnemy) {
						enemy.speed *= 1.5;
						enemy.health *= 1.3;
						enemy.weapon.damage *= 2;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 20000
	},
	// wave 12
	{
		enemies: [
			{
				type: TriangleEnemy,
				spawnRate: 3,
				upgradeFunction: (enemy) => {
					enemy.value *= 3;

					if (enemy instanceof TriangleEnemy) {
						enemy.speed *= 2;
						enemy.health *= 1.2;
					}
				}
			},
			{
				type: SphereEnemy,
				spawnRate: 3,
				upgradeFunction: (enemy) => {
					enemy.value *= 4;

					if (enemy instanceof SphereEnemy) {
						enemy.weapon.damage *= 1.5;
						enemy.health *= 1.5;
						enemy.burstNumber *= 1.5;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 40000
	},
	// wave 13
	{
		enemies: [
			{
				type: TriangleEnemy,
				spawnRate: 3,
				upgradeFunction: (enemy) => {
					enemy.value *= 3;

					if (enemy instanceof TriangleEnemy) {
						enemy.speed *= 2;
						enemy.health *= 1.2;
					}
				}
			},
			{
				type: SphereEnemy,
				spawnRate: 3,
				upgradeFunction: (enemy) => {
					enemy.value *= 4;

					if (enemy instanceof SphereEnemy) {
						enemy.weapon.damage *= 1.5;
						enemy.health *= 2;
						enemy.burstNumber *= 1.5;
					}
				}
			},
			{
				type: PentagonEnemy,
				spawnRate: 4,
				upgradeFunction: (enemy) => {
					enemy.value *= 5;

					if (enemy instanceof SphereEnemy) {
						enemy.speed *= 1.5;
						enemy.health *= 2;
						enemy.weapon.fireRate *= 0.6;
						enemy.weapon.damage *= 2;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 80000
	},
	// wave 14
	{
		enemies: [
			{
				type: TriangleEnemy,
				spawnRate: 5,
				upgradeFunction: (enemy) => {
					enemy.value *= 3;

					if (enemy instanceof TriangleEnemy) {
						enemy.speed *= 2;
						enemy.health *= 1.2;
					}
				}
			},
			{
				type: SphereEnemy,
				spawnRate: 5,
				upgradeFunction: (enemy) => {
					enemy.value *= 4;

					if (enemy instanceof SphereEnemy) {
						enemy.weapon.damage *= 1.5;
						enemy.health *= 1.5;
						enemy.burstNumber *= 1.5;
					}
				}
			},
			{
				type: PentagonEnemy,
				spawnRate: 3,
				upgradeFunction: (enemy) => {
					enemy.value *= 3;

					if (enemy instanceof SphereEnemy) {
						enemy.speed *= 1.5;
						enemy.health *= 2;
						enemy.weapon.fireRate *= 0.6;
						enemy.weapon.damage *= 2;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 80000
	},
	// wave 15
	{
		enemies: [
			{
				type: SphereEnemy,
				spawnRate: 8,
				upgradeFunction: (enemy) => {
					enemy.value *= 4;

					if (enemy instanceof SphereEnemy) {
						enemy.weapon.damage *= 1.5;
						enemy.health *= 1.5;
						enemy.burstNumber *= 1.5;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 100000
	}, // wave 15
	{
		enemies: [
			{
				type: SphereEnemy,
				spawnRate: 8,
				upgradeFunction: (enemy) => {}
			},
			{
				type: TriangleEnemy,
				spawnRate: 8,
				upgradeFunction: (enemy) => {}
			},
			{
				type: PentagonEnemy,
				spawnRate: 8,
				upgradeFunction: (enemy) => {}
			}
		],
		startDelay: 3,
		neededItems: 1000000000
	}
];
