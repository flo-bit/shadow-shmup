import * as PIXI from 'pixi.js';
import Game from '../app';
import { TextOptions, Text } from './text';

export class TextManager {
	game: Game;

	texts: Text[];

	constructor(game: Game) {
		this.game = game;

		this.texts = [];

		this.installFont();
	}

	async installFont() {
		// PIXI.Assets.addBundle('fonts', [{ alias: 'Minecraft', src: './Minecraft.ttf' }]);

		// // Load the font bundle
		// await PIXI.Assets.loadBundle('fonts');

		PIXI.BitmapFont.install({
			name: 'TitleFont',
			resolution: 2,
			style: {
				fontFamily: 'Arial',
				fontSize: 100,
				fill: 0xffffff,
				fontWeight: 'bold'
			}
		});
	}

	addText(options: TextOptions) {
		let text = new Text(this.game, options);
		this.texts.push(text);
	}

	update(delta: number) {
		for (let text of this.texts) {
			text.update(delta);
		}

		this.texts = this.texts.filter((text) => !text.destroyed);
	}
}
