import Game from './app.js';
import Enemy from './enemy.js';
import Player from './player.js';

export default class PlayerManager {
	game: Game;

	players: Player[] = [];

	constructor(game: Game) {
		this.game = game;

		this.addPlayer();
	}

	addPlayer() {
		const player = new Player(this.game, this.players.length);
		this.players.push(player);
	}

	update(deltaTime: number, keys: Record<string, boolean>) {
		this.players.forEach((player) => {
			player.update(deltaTime, keys);
		});
	}

	resetPlayers(num: number = this.players.length) {
		for (let player of this.players) {
			player.destroy();
		}

		this.players = [];

		for (let i = 0; i < num; i++) {
			this.addPlayer();
		}
	}

	getCenter() {
		let x = 0,
			y = 0;

		let count = 0;

		for (let player of this.players) {
			if (player.dead) continue;

			x += player.x;
			y += player.y;

			count++;
		}

		if (count === 0) return { x: 0, y: 0 };

		return { x: x / count, y: y / count };
	}

	smallestTimeSinceLastDamage() {
		let min = Infinity;

		for (let player of this.players) {
			if (!player.dead) min = Math.min(min, player.timeSinceLastDamage);
		}

		return min;
	}

	allDead() {
		for (let player of this.players) {
			if (!player.dead) return false;
		}

		return true;
	}

	getClosestPlayer(
		position: { x: number; y: number },
		maxDist: number | undefined = undefined
	): Player | undefined {
		if (this.players.length === 1) {
			const player = this.players[0];
			const dist = (player.x - position.x) ** 2 + (player.y - position.y) ** 2;
			if ((!maxDist || dist < maxDist ** 2) && !player.dead) return player;
		}

		// go through all players and find the closest one
		let closestPlayer: Player | undefined;
		let closestDist = Infinity;

		for (let player of this.players) {
			const dist = Math.hypot(player.x - position.x, player.y - position.y);

			if (dist < closestDist && !player.dead) {
				closestDist = dist;
				closestPlayer = player;
			}
		}

		if (!maxDist || closestDist < maxDist) {
			return closestPlayer;
		}

		// for now, lets just return player 1
		//return this.players[0];

		// let point = { x: position.x, y: -position.y };
		// let solid = true;

		// let proj = this.game.world.projectPoint(point, false, undefined, 0x00010001);

		// console.log(proj);
		// if (proj) {
		// 	let player = proj.collider.parent()?.userData as Player;

		// 	console.log(player);
		// 	if (!player || !maxDist) return player;

		// 	// check if enemy is within max distance
		// 	const dist = Math.sqrt((player.x - position.x) ** 2 + (player.y - position.y) ** 2);

		// 	if (dist < maxDist) {
		// 		return player;
		// 	}
		// }
	}
}
