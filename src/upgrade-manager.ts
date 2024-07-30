import Game from './app';
import { Item } from './item';

export class UpgradeManager {
	colors_classes = ['bg-sky-500', 'bg-pink-500', 'bg-emerald-500'];
	colors: number[] = [];

	items: number = 0;
	neededItems: number = 4;

	game: Game;

	itemsUI?: HTMLElement;

	constructor(game: Game) {
		this.game = game;

		this.itemsUI = document.getElementById('items') ?? undefined;
	}

	createUI() {}

	reset() {
		this.items = 0;

		// remove all items from UI
		if (this.itemsUI) {
			this.itemsUI.innerHTML = '';
		}
	}

	addItem(item: Item) {
		this.items += item.value;

		// get percentage of needed:
		const percentage = (item.value / this.neededItems) * 100;
		// add to UI
		if (this.itemsUI) {
			let itemUI = document.createElement('div');

			itemUI.classList.add(
				'h-full',
				'transition-all',
				'duration-200',
				this.colors_classes[item.type]
			);
			// set width to percentage dwv
			itemUI.style.width = '0px';
			setTimeout(() => {
				itemUI.style.width = `${percentage}%`;
			}, 100);

			this.itemsUI.appendChild(itemUI);
		}
	}
}
