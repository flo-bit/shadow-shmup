import Game from './app';
import * as PIXI from 'pixi.js';
import Obstacle from './obstacles';

import Alea from 'alea';

const CELL_SIZE = 900;
const OBSTACLE_COUNT_PER_CELL = 30;

type CellCoord = `${number},${number}`;

export class ObstacleManager {
	container: PIXI.Container;
	obstacles: Map<CellCoord, Obstacle[]> = new Map();
	game: Game;
	currentCells: Set<CellCoord> = new Set();
	debugGraphics: Map<CellCoord, PIXI.Graphics> = new Map();

	lastActiveCell: CellCoord | null = null;

	constructor(game: Game) {
		this.game = game;
		this.container = new PIXI.Container();
		this.container.zIndex = 5;
		this.game.container.addChild(this.container);
	}

	update(deltaTime: number) {
		const position = this.game.playerManager?.getCenter();
		if (!position) return;

		const currentCell = this.getCellCoord(position.x, position.y);

		console.log(currentCell);
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
		const obstacles: Obstacle[] = [];

		// @ts-ignore
		let rng = new Alea(cellCoord);

		for (let i = 0; i < OBSTACLE_COUNT_PER_CELL; i++) {
			const x = cellX * CELL_SIZE + rng() * CELL_SIZE;
			const y = cellY * CELL_SIZE + rng() * CELL_SIZE;
			const width = rng() * 90 + 10;
			const height = rng() * 90 + 10;

			const obstacle = new Obstacle(this.game, this.container, x, y, width, height);
			obstacles.push(obstacle);
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