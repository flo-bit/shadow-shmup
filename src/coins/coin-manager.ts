import Game from '../app';
import { Item, ItemOptions } from './coin';

export class ItemManager {
	items: Item[] = [];
	game: Game;

	constructor(game: Game) {
		this.game = game;
	}

	addItem(options: ItemOptions) {
		const item = new Item(this.game, options);
		this.items.push(item);
	}

	update(deltaTime: number) {
		for (let item of this.items) {
			item.update(deltaTime);
		}

		this.items = this.items.filter((item) => !item.destroyed);
	}

	destroyAll() {
		this.items.forEach((item) => {
			item.destroy();
		});

		this.items = [];
	}
}
