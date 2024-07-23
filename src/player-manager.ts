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
		const enemy = new Player(this.game);
		this.players.push(enemy);
	}

	update(deltaTime: number, keys: Record<string, boolean>) {
		this.players.forEach((player) => {
			player.update(deltaTime, keys);
		});
	}

	getClosestPlayer(
		position: { x: number; y: number },
		maxDist: number | undefined = undefined
	): Player | undefined {
		// for now, lets just return player 1
		return this.players[0];

		// let point = { x: position.x, y: -position.y };
		// let solid = true;

		// let proj = this.game.world.projectPoint(point, solid, undefined, 0x00010001);

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
