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
		maxDist: number | undefined = undefined
	): Light | undefined {
		let closestLight: Light | undefined;
		let closestDistance = Infinity;

		for (let light of this.lights) {
			if (light.destroyed) continue;
			console.log(light);
			const distance = Math.hypot(light.x - position.x, light.y - position.y);
			if (distance < closestDistance) {
				closestDistance = distance;
				closestLight = light;
			}
		}

		if (!maxDist || closestDistance < maxDist) {
			return closestLight;
		}

		return undefined;
	}
}
