import Game from './app';
import { RAPIER } from './rapier';

export default class Obstacle {
	game: Game;

	size: number = 60;
	constructor(game: Game) {
		this.game = game;

		const colliderDesc = RAPIER()
			.ColliderDesc.cuboid(Math.random() * 40 + 10, Math.random() * 40 + 10)
			.setActiveEvents(RAPIER().ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00090009)
			.setTranslation((Math.random() - 0.5) * 1400, (Math.random() - 0.5) * 1400);

		this.game.world.createCollider(colliderDesc);
	}
}
