import Game from './app';
import * as PIXI from 'pixi.js';
import Obstacle from './obstacles';

import Alea from 'alea';
import { Light } from './light';

const CELL_SIZE = 900;
const OBSTACLE_COUNT_PER_CELL = 20;
const LIGHT_COUNT_PER_CELL = 3;

type CellCoord = `${number},${number}`;

const title: { x: number; y: number; width: number; height: number }[] = [
	{ x: 77, y: 105, width: 171, height: 33 },
	{ x: 77, y: 194, width: 171, height: 33 },
	{ x: 77, y: 283, width: 171, height: 33 },
	{ x: 289, y: 194, width: 122, height: 33 },
	{ x: 520, y: 242, width: 171, height: 33 },
	{ x: 539, y: 105, width: 140, height: 33 },
	{ x: 78, y: 377, width: 104, height: 33 },
	{ x: 147, y: 410, width: 80, height: 33 },
	{ x: 197, y: 443, width: 80, height: 33 },
	{ x: 77, y: 541, width: 171, height: 33 },
	{ x: 311, y: 377, width: 171, height: 33 },
	{ x: 311, y: 541, width: 171, height: 33 },
	{ x: 545, y: 549, width: 106, height: 33 },
	{ x: 691, y: 549, width: 106, height: 33 },
	{ x: 619, y: 435, width: 106, height: 33 },
	{ x: 619, y: 435, width: 40, height: 147 },
	{ x: 77, y: 148, width: 40, height: 79 },
	{ x: 208, y: 194, width: 40, height: 81 },
	{ x: 691, y: 435, width: 40, height: 106 },
	{ x: 765, y: 360, width: 40, height: 222 },
	{ x: 545, y: 360, width: 40, height: 181 },
	{ x: 442, y: 377, width: 40, height: 197 },
	{ x: 311, y: 377, width: 40, height: 151 },
	{ x: 289, y: 119, width: 40, height: 197 },
	{ x: 422, y: 119, width: 40, height: 197 },
	{ x: 520, y: 138, width: 40, height: 178 },
	{ x: 659, y: 148, width: 40, height: 168 },
	{ x: 77, y: 377, width: 40, height: 197 },
	{ x: 237, y: 489, width: 40, height: 85 }
];

const titleLights: { x: number; y: number; size: number }[] = [
	{ x: 40, y: 144, size: 200 },
	{ x: 610, y: 185, size: 200 },
	{ x: 397, y: 477, size: 200 },
	{ x: 170, y: 477, size: 200 },
	{ x: 181, y: 262, size: 200 },
	// { x: 116, y: 162, size: 200 },
	{ x: 381, y: 162, size: 200 },
	{ x: 410, y: 262, size: 200 },
	{ x: 610, y: 539, size: 200 },
	{ x: 748, y: 539, size: 200 },
	{ x: 647.5, y: 356.5, size: 589 },
	// { x: 280.5, y: 344.5, size: 589 },
	{ x: 140, y: 50, size: 282 },
	{ x: 607, y: 44, size: 282 },
	{ x: 397, y: 44, size: 282 },
	{ x: 170, y: 618, size: 282 },
	{ x: 397, y: 627, size: 282 },
	{ x: 679, y: 627, size: 282 },
	// { x: 678, y: 362, size: 282 },
	{ x: 29, y: 477, size: 282 },
	{ x: 851, y: 439, size: 282 },
	{ x: 759, y: 204, size: 282 },
	// { x: 240, y: 362, size: 282 },
	{ x: 494, y: 216, size: 282 },
	{ x: 511, y: 477, size: 282 },
	{ x: 142, y: 161, size: 282 }
];

const titleColors = [
	0xf43f5e, 0xec4899, 0xd946ef, 0xa855f7, 0x8b5cf6, 0x6366f1, 0x3b82f6, 0x0ea5e9, 0xdc2626
];

export class ObstacleManager {
	container: PIXI.Container;
	obstacles: Map<CellCoord, (Obstacle | Light)[]> = new Map();
	game: Game;
	currentCells: Set<CellCoord> = new Set();
	debugGraphics: Map<CellCoord, PIXI.Graphics> = new Map();

	lastActiveCell: CellCoord | null = null;

	seed: string;

	constructor(game: Game) {
		this.game = game;
		this.container = new PIXI.Container();
		this.container.zIndex = 5;
		this.game.container.addChild(this.container);

		this.seed = Math.random().toFixed(5);
	}

	update(deltaTime: number) {
		const position = this.game.playerManager?.getCenter();
		if (!position) return;

		const currentCell = this.getCellCoord(position.x, position.y);

		if (this.lastActiveCell === currentCell) return;

		this.lastActiveCell = currentCell;
		const cellsToRender = this.getSurroundingCells(currentCell);

		// Remove obstacles and debug graphics from cells that are no longer visible
		this.currentCells.forEach((cell) => {
			if (!cellsToRender.has(cell)) {
				this.removeCell(cell);
			}
		});

		// Add new cells that have come into view
		cellsToRender.forEach((cell) => {
			if (!this.currentCells.has(cell)) {
				this.createCell(cell);
			}
		});

		this.currentCells = cellsToRender;

		// Update debug visualization
		if (this.game.debug) {
			this.updateDebugVisualization();
		}
	}

	private getCellCoord(x: number, y: number): CellCoord {
		const cellX = Math.floor(x / CELL_SIZE);
		const cellY = Math.floor(y / CELL_SIZE);
		return `${cellX},${cellY}`;
	}

	private getSurroundingCells(centerCell: CellCoord): Set<CellCoord> {
		const [centerX, centerY] = centerCell.split(',').map(Number);
		const cells = new Set<CellCoord>();
		for (let dx = -1; dx <= 1; dx++) {
			for (let dy = -1; dy <= 1; dy++) {
				cells.add(`${centerX + dx},${centerY + dy}`);
			}
		}
		return cells;
	}

	private createCell(cellCoord: CellCoord) {
		const [cellX, cellY] = cellCoord.split(',').map(Number);
		const obstacles: (Obstacle | Light)[] = [];

		// @ts-ignore
		let rng = new Alea(cellCoord + (cellCoord !== '0,0' ? this.seed : '1'));

		if (cellCoord === '0,01') {
			for (let rect of title) {
				const width = rect.width;
				const height = rect.height;
				const x = rect.x + width / 2;
				const y = rect.y + height / 2;

				const obstacle = new Obstacle(this.game, this.container, x, y, width, height);
				obstacles.push(obstacle);
			}

			for (let lightPos of titleLights) {
				const x = lightPos.x;
				const y = lightPos.y;
				const size = lightPos.size;

				const color = titleColors[Math.floor(rng() * titleColors.length)];

				const light = this.game.lightManager.addLight({
					x,
					y,
					color: color,
					alpha: 0.3,
					scale: size / 800,
					flicker: false
				});
				obstacles.push(light);
			}
		} else {
			for (let i = 0; i < OBSTACLE_COUNT_PER_CELL; i++) {
				const x = cellX * CELL_SIZE + rng() * CELL_SIZE;
				const y = cellY * CELL_SIZE + rng() * CELL_SIZE;
				const width = rng() * 90 + 10;
				const height = rng() * 90 + 10;

				const obstacle = new Obstacle(this.game, this.container, x, y, width, height);
				obstacles.push(obstacle);
			}
			for (let i = 0; i < LIGHT_COUNT_PER_CELL; i++) {
				const x = cellX * CELL_SIZE + rng() * CELL_SIZE;
				const y = cellY * CELL_SIZE + rng() * CELL_SIZE;

				const color = titleColors[Math.floor(rng() * titleColors.length)];

				const light = this.game.lightManager.addLight({
					x,
					y,
					color: color, //0xffffff * rng(),
					alpha: 0.05 + rng() * 0.15,
					scale: 0.5 + rng() * 1
				});
				obstacles.push(light);
			}
		}

		this.obstacles.set(cellCoord, obstacles);

		if (this.game.debug) {
			this.createDebugGraphicsForCell(cellCoord);
		}
	}

	private removeCell(cellCoord: CellCoord) {
		const obstacles = this.obstacles.get(cellCoord);
		if (obstacles) {
			obstacles.forEach((obstacle) => obstacle.destroy());
			this.obstacles.delete(cellCoord);
		}

		const debugGraphics = this.debugGraphics.get(cellCoord);
		if (debugGraphics) {
			this.container.removeChild(debugGraphics);
			this.debugGraphics.delete(cellCoord);
		}
	}

	private createDebugGraphicsForCell(cellCoord: CellCoord) {
		const [cellX, cellY] = cellCoord.split(',').map(Number);
		const graphics = new PIXI.Graphics();
		graphics.rect(cellX * CELL_SIZE, cellY * CELL_SIZE, CELL_SIZE, CELL_SIZE);
		graphics.stroke({ width: 3, color: 0xff0000 });
		this.container.addChild(graphics);
		this.debugGraphics.set(cellCoord, graphics);
	}

	private updateDebugVisualization() {
		this.debugGraphics.forEach((graphics, cellCoord) => {
			if (!this.currentCells.has(cellCoord)) {
				this.container.removeChild(graphics);
				this.debugGraphics.delete(cellCoord);
			}
		});

		this.currentCells.forEach((cellCoord) => {
			if (!this.debugGraphics.has(cellCoord)) {
				this.createDebugGraphicsForCell(cellCoord);
			}
		});
	}
}