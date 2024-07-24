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

		for (let player of this.players) {
			x += player.x;
			y += player.y;
		}

		return { x: x / this.players.length, y: y / this.players.length };
	}

	smallestTimeSinceLastDamage() {
		let min = Infinity;

		for (let player of this.players) {
			min = Math.min(min, player.timeSinceLastDamage);
		}

		return min;
	}

	getClosestPlayer(
		position: { x: number; y: number },
		maxDist: number | undefined = undefined
	): Player | undefined {
		// go through all players and find the closest one
		let closestPlayer: Player | undefined;
		let closestDist = Infinity;

		for (let player of this.players) {
			const dist = (player.x - position.x) ** 2 + (player.y - position.y) ** 2;

			if (dist < closestDist) {
				closestDist = dist;
				closestPlayer = player;
			}
		}

		if (!maxDist || closestDist < maxDist ** 2) {
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
