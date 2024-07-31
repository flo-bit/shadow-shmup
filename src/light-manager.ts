import Game from './app';
import { Light, LightOptions } from './light';

export class LightManager {
	lights: Light[] = [];
	game: Game;

	constructor(game: Game) {
		this.game = game;
	}

	addLight(options: LightOptions) {
		const light = new Light(this.game, options);
		this.lights.push(light);
		return light;
	}

	update(deltaTime: number) {
		for (let light of this.lights) {
			light.update(deltaTime);
		}

		this.lights = this.lights.filter((item) => !item.destroyed);
	}

	getClosestLight(
		position: { x: number; y: number },
		maxDist: number | undefined = undefined,
		output:
			| {
					light: Light | undefined;
					distance: number;
			  }
			| undefined = undefined
	): Light | undefined {
		position.y = -position.y;
		let solid = true;

		let proj = this.game.world.projectPoint(position, solid, undefined, 0x10001000);

		if (proj) {
			let light = proj.collider.parent()?.userData as Light;

			if (!light) {
				if (output) {
					output.light = undefined;
					output.distance = 0;
				}
				return;
			}

			// check if light is within max distance
			const dist = Math.hypot(light.x - position.x, light.y - position.y);

			if (!maxDist || dist < maxDist) {
				if (output) {
					output.light = light;
					output.distance = dist;
				}
				return light;
			}
		}

		if (output) {
			output.light = undefined;
			output.distance = 0;
		}
		return undefined;
	}
}
