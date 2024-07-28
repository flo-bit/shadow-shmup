import Game from './app';

export class UpgradeManager {
	colors_classes = ['bg-sky-500', 'bg-orange-500', 'bg-emerald-500'];
	colors: number[] = [];

	items: number[] = [0, 0, 0];

	game: Game;

	itemUI?: HTMLElement;

	itemCounters: HTMLElement[] = [];

	constructor(game: Game) {
		this.game = game;

		this.itemUI = document.getElementById('items') ?? undefined;

		this.createUI();
	}

	createUI() {
		if (!this.itemUI) return;

		this.itemUI.innerHTML = '';

		let count = this.colors_classes.length;
		for (let i = 0; i < count; i++) {
			const stat = document.createElement('div');
			stat.className = 'flex items-center gap-2 justify-end';

			const stat1 = document.createElement('div');
			stat1.className = 'block h-4 w-4 rounded-full relative ' + this.colors_classes[i];

			const statText = document.createElement('div');
			statText.className = 'block';
			statText.innerText = this.items[i].toString();
			stat.appendChild(statText);

			this.itemCounters.push(statText);

			const statGlow = document.createElement('div');
			statGlow.className =
				'absolute -inset-0.5 h-5 w-5 rounded-full blur-sm ' + this.colors_classes[i];
			stat1.appendChild(statGlow);

			stat.appendChild(stat1);
			this.itemUI.appendChild(stat);
		}
	}

	reset() {
		for (let i = 0; i < this.items.length; i++) {
			this.items[i] = 0;
			this.itemCounters[i].innerText = '0';
		}
	}

	addItem(index: number) {
		this.items[index]++;

		this.itemCounters[index].innerText = this.items[index].toString();
	}
}
