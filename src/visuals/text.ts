import Game from '../app';
import * as PIXI from 'pixi.js';

export type TextOptions = {
	x: number;
	y: number;

	color: number;

	text: string;
};

export class Text {
	game: Game;

	lifetime: number = 2000;

	life: number = 0;

	text: PIXI.BitmapText;

	destroyed: boolean = false;

	constructor(game: Game, options: TextOptions) {
		this.game = game;

		this.text = new PIXI.BitmapText({
			text: options.text,
			style: {
				fontFamily: 'TitleFont',
				fontSize: 30
			}
		});
		this.text.tint = options.color;
		this.text.anchor.set(0.5);

		// Position the text
		this.text.position.set(
			options.x + (Math.random() - 0.5) * 50,
			options.y + (Math.random() - 0.5) * 50
		);
		this.text.zIndex = 100;

		// Add the text to the stage
		this.game.container.addChild(this.text);
	}

	update(delta: number) {
		if (this.destroyed) return;

		this.life += delta;

		// set alpha
		let percentage = 1 - this.life / this.lifetime;

		this.text.alpha = Math.pow(percentage, 2);
		this.text.y -= delta * 0.04;

		if (this.life > this.lifetime) {
			this.destroy();
		}
	}

	destroy() {
		if (this.destroyed) return;

		this.destroyed = true;
		this.text.destroy();
	}
}
