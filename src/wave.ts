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

		if (this.isActive) {
			this.enemies.forEach((enemy, index) => {
				this.spawnAccumulators[index] += deltaTimeSeconds;
				const spawnInterval = 1 / enemy.spawnRate;

				while (this.spawnAccumulators[index] >= spawnInterval) {
					if (!enemy.maxCount || this.enemyCounts[index] < enemy.maxCount) {
						this.spawnEnemy(enemy.type);
						this.enemyCounts[index]++;
					}
					this.spawnAccumulators[index] -= spawnInterval;
				}
			});
		}
	}

	spawnEnemy(enemyType: typeof Enemy) {
		const enemy = this.game.enemyManager?.addEnemy(enemyType);
		if (enemy) {
			// Apply all accumulated upgrades to the new enemy
			const upgrades = this.game.waveManager?.getEnemyUpgrades(enemyType) ?? [];
			upgrades.forEach((upgrade) => upgrade(enemy));
		}
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
			this.game.upgradeManager.neededItems = this.data[this.currentWave].neededItems;
			console.log('Starting wave', this.currentWave, this.game.upgradeManager.neededItems);
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
	{
		enemies: [
			{
				type: PentagonEnemy,
				spawnRate: 1,
				upgradeFunction: (enemy) => {
					enemy.health = 20;
					enemy.value = 3;
				}
			},
			{
				type: TriangleEnemy,
				spawnRate: 1,
				upgradeFunction: (enemy) => {
					enemy.speed *= 1.5;
				}
			}
		],
		startDelay: 3,
		neededItems: 4
	},
	{
		enemies: [
			{
				type: SphereEnemy,
				spawnRate: 1,
				upgradeFunction: (enemy) => {
					enemy.health = 30;
				}
			},
			{
				type: PentagonEnemy,
				spawnRate: 0.1,
				upgradeFunction: (enemy) => {
					if (enemy instanceof PentagonEnemy) {
						enemy.weapon.fireRate = 1000;
					}
				}
			}
		],
		startDelay: 3,
		neededItems: 20
	},
	{
		enemies: [
			{
				type: PentagonEnemy,
				spawnRate: 1,
				upgradeFunction: (enemy) => {
					if (enemy instanceof PentagonEnemy) {
						enemy.weapon.fireRate = 100;
					}
				}
			},
			{
				type: TriangleEnemy,
				spawnRate: 2,
				upgradeFunction: (enemy) => {
					enemy.speed *= 1.05;
				}
			}
		],
		startDelay: 3,
		neededItems: 100
	}
	// Add more waves as needed
];
