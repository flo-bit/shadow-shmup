/*

each wave, we have a list of enemies that will spawn,
each enemy has a type, and a number of enemies of that type that will spawn

*/

import Game from './app';
import Enemy, { CrossEnemy, PentagonEnemy, SphereEnemy, TriangleEnemy } from './enemy';

export class Wave {
	game: Game;

	enemies: { type: typeof Enemy; num: number; spawned: number }[] = [];

	spawnPerSecond: number = 1;
	spawnAccumulator: number = 0;
	startDelay: number;
	waveTime: number = 0;
	isActive: boolean = false;

	index: number;

	constructor(
		game: Game,
		enemies: { type: typeof Enemy; num: number }[],
		index: number,
		spawnPerSecond: number = 1,
		startDelay: number = 3
	) {
		this.game = game;

		this.enemies = enemies.map((enemy) => ({
			type: enemy.type,
			num: enemy.num,
			spawned: 0
		}));
		this.spawnPerSecond = spawnPerSecond;
		this.startDelay = startDelay;
		this.index = index;
	}

	randomEnemyIndex(): number {
		if (this.isComplete()) return -1;

		let i = Math.floor(Math.random() * this.enemies.length);
		let enemy = this.enemies[i];
		if (enemy.spawned >= enemy.num * (this.game.playerManager?.players.length ?? 1)) {
			return this.randomEnemyIndex();
		}

		return i;
	}

	update(deltaTime: number) {
		// Convert deltaTime to seconds if it's in milliseconds
		const deltaTimeSeconds = deltaTime / 1000;

		// Update wave time
		this.waveTime += deltaTimeSeconds;

		// Check if we should start spawning
		if (this.waveTime >= this.startDelay) {
			this.isActive = true;
		}

		// Only spawn if the wave is active
		if (this.isActive) {
			this.spawnAccumulator += deltaTimeSeconds;
			const spawnInterval =
				1 / (this.spawnPerSecond * (this.game.playerManager?.players.length ?? 1));

			while (this.spawnAccumulator >= spawnInterval) {
				const enemyIndex = this.randomEnemyIndex();
				if (enemyIndex !== -1) {
					const enemy = this.enemies[enemyIndex];
					this.game.enemyManager?.addEnemy(enemy.type); // Assuming there's an addEnemy method in the Game class
					enemy.spawned++;
				}
				this.spawnAccumulator -= spawnInterval;
			}
		}
	}

	isComplete(): boolean {
		const playerCount = this.game.playerManager?.players.length ?? 1;
		return this.isActive && this.enemies.every((e) => e.spawned >= e.num * playerCount);
	}
}

type WaveData = {
	enemies: { type: typeof Enemy; num: number }[];
	spawnSpeed: number;
	startDelay?: number;
};

export const defaultWaves: WaveData[] = [
	//{ enemies: [{ type: CrossEnemy, num: 1 }], spawnSpeed: 1 },
	{ enemies: [{ type: TriangleEnemy, num: 5 }], spawnSpeed: 3 },
	{
		enemies: [
			{ type: TriangleEnemy, num: 10 },
			{ type: SphereEnemy, num: 5 }
		],
		spawnSpeed: 3
	},
	{
		enemies: [
			{ type: TriangleEnemy, num: 15 },
			{ type: SphereEnemy, num: 10 }
		],
		spawnSpeed: 2
	},
	{
		enemies: [
			{ type: TriangleEnemy, num: 20 },
			{ type: SphereEnemy, num: 15 },
			{ type: PentagonEnemy, num: 5 }
		],
		spawnSpeed: 3
	},
	{ enemies: [{ type: SphereEnemy, num: 50 }], spawnSpeed: 3 },
	{ enemies: [{ type: TriangleEnemy, num: 50 }], spawnSpeed: 2 },
	{ enemies: [{ type: PentagonEnemy, num: 50 }], spawnSpeed: 3 },
	{
		enemies: [
			{ type: PentagonEnemy, num: 25 },
			{ type: TriangleEnemy, num: 25 },
			{ type: SphereEnemy, num: 25 }
		],
		spawnSpeed: 3
	},
	{
		enemies: [
			{ type: TriangleEnemy, num: 40 },
			{ type: SphereEnemy, num: 30 },
			{ type: PentagonEnemy, num: 15 }
		],
		spawnSpeed: 4
	},
	{
		enemies: [{ type: PentagonEnemy, num: 75 }],
		spawnSpeed: 3
	},
	{
		enemies: [
			{ type: TriangleEnemy, num: 80 },
			{ type: SphereEnemy, num: 60 }
		],
		spawnSpeed: 5
	},
	{
		enemies: [
			{ type: TriangleEnemy, num: 50 },
			{ type: PentagonEnemy, num: 40 }
		],
		spawnSpeed: 4
	},
	{
		enemies: [
			{ type: SphereEnemy, num: 70 },
			{ type: PentagonEnemy, num: 50 }
		],
		spawnSpeed: 5
	},
	{
		enemies: [{ type: TriangleEnemy, num: 150 }],
		spawnSpeed: 6
	},
	{
		enemies: [
			{ type: TriangleEnemy, num: 70 },
			{ type: SphereEnemy, num: 50 },
			{ type: PentagonEnemy, num: 30 }
		],
		spawnSpeed: 5
	},
	{
		enemies: [{ type: SphereEnemy, num: 120 }],
		spawnSpeed: 5
	},
	{
		enemies: [
			{ type: PentagonEnemy, num: 60 },
			{ type: TriangleEnemy, num: 80 }
		],
		spawnSpeed: 4
	},
	{
		enemies: [
			{ type: TriangleEnemy, num: 100 },
			{ type: SphereEnemy, num: 75 },
			{ type: PentagonEnemy, num: 50 }
		],
		spawnSpeed: 6
	},
	// 10 new waves start here
	{
		enemies: [
			{ type: TriangleEnemy, num: 120 },
			{ type: SphereEnemy, num: 90 },
			{ type: PentagonEnemy, num: 60 }
		],
		spawnSpeed: 7
	},
	{
		enemies: [{ type: PentagonEnemy, num: 150 }],
		spawnSpeed: 5
	},
	{
		enemies: [
			{ type: TriangleEnemy, num: 200 },
			{ type: SphereEnemy, num: 100 }
		],
		spawnSpeed: 8
	},
	{
		enemies: [
			{ type: SphereEnemy, num: 150 },
			{ type: PentagonEnemy, num: 100 }
		],
		spawnSpeed: 6
	},
	{
		enemies: [
			{ type: TriangleEnemy, num: 180 },
			{ type: PentagonEnemy, num: 90 }
		],
		spawnSpeed: 7
	},
	{
		enemies: [{ type: SphereEnemy, num: 250 }],
		spawnSpeed: 8
	},
	{
		enemies: [
			{ type: TriangleEnemy, num: 150 },
			{ type: SphereEnemy, num: 100 },
			{ type: PentagonEnemy, num: 75 }
		],
		spawnSpeed: 7
	},
	{
		enemies: [
			{ type: PentagonEnemy, num: 120 },
			{ type: TriangleEnemy, num: 180 }
		],
		spawnSpeed: 6
	},
	{
		enemies: [
			{ type: TriangleEnemy, num: 200 },
			{ type: SphereEnemy, num: 150 },
			{ type: PentagonEnemy, num: 100 }
		],
		spawnSpeed: 8
	},
	{
		enemies: [
			{ type: TriangleEnemy, num: 250 },
			{ type: SphereEnemy, num: 200 },
			{ type: PentagonEnemy, num: 150 }
		],
		spawnSpeed: 9
	}
];

export class WaveManager {
	game: Game;

	waves: Wave[];

	currentWave: number = 0;

	constructor(game: Game, startWave: number = 0, waves: WaveData[] = defaultWaves) {
		this.game = game;

		this.currentWave = startWave;

		this.waves = waves.map(
			(wave, index) => new Wave(this.game, wave.enemies, index, wave.spawnSpeed, wave.startDelay)
		);
	}

	update(deltaTime: number) {
		if (this.waves.length === 0) return;
		if (this.currentWave >= this.waves.length) return;

		if (
			this.currentWave === -1 ||
			(this.game.enemyManager?.enemies.length === 0 && this.waves[this.currentWave].isComplete())
		) {
			this.currentWave += 1;
		}

		if (this.currentWave >= 0 && this.currentWave < this.waves.length) {
			this.waves[this.currentWave].update(deltaTime);
		}
	}

	getCurrentWave(): Wave | undefined {
		if (this.currentWave >= 0 && this.currentWave < this.waves.length) {
			return this.waves[this.currentWave];
		}
	}
}
