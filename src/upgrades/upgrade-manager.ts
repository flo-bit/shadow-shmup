import Game from '../app';
import { Item } from '../coins/coin';
import { addUpgradeOption } from './upgrades';
import { allUpgrades, Upgrade } from './upgrades-player';

export class UpgradeManager {
	colors_classes = ['bg-sky-500', 'bg-pink-500', 'bg-emerald-500'];
	colors: number[] = [];

	coins: number = 10;

	xp: number = 0;
	neededXP: number = 10;

	game: Game;

	xpUI?: HTMLElement;

	coinsUI?: HTMLElement;

	constructor(game: Game) {
		this.game = game;

		this.xpUI = document.getElementById('xp') ?? undefined;

		this.coinsUI = document.getElementById('coins') ?? undefined;
	}

	reset() {
		this.coins += this.xp;
		this.xp = 0;

		// remove all items from UI
		if (this.xpUI) {
			this.xpUI.innerHTML = '';
		}
	}

	resetAll() {
		this.reset();
		this.coins = 10;

		for (let upgrade of allUpgrades) {
			for (let u of upgrade) {
				u.upgraded = false;
			}
		}
	}

	canAdvance() {
		return this.xp >= this.neededXP;
	}

	addItem(item: Item) {
		let value = item.value * 3;
		this.xp += value;

		// get percentage of needed:
		const percentage = ((value / this.neededXP) * 100).toFixed(2);
		// add to UI
		if (this.xpUI) {
			let itemUI = document.createElement('div');

			itemUI.classList.add('h-full', 'transition-all', 'duration-200', 'bg-amber-500');
			// set width to percentage dwv
			itemUI.style.width = '0px';
			setTimeout(() => {
				itemUI.style.width = `${percentage}%`;
			}, 100);

			this.xpUI.appendChild(itemUI);
		}
	}

	showUpgradeMenu() {
		let upgrades = document.getElementById('upgrades');
		if (upgrades) {
			upgrades.classList.remove('hidden');

			// get upgrade-container
			const upgradeContainer = document.getElementById('upgrades-container');
			// if upgradeContainer exists
			if (upgradeContainer) {
				upgradeContainer.innerHTML = '';

				let num = 0;

				// find all upgrades for the player (first not upgraded in each category)
				for (let i = 0; i < allUpgrades.length; i++) {
					let upgrade = allUpgrades[i];
					let found: Upgrade | undefined = undefined;

					for (let j = 0; j < upgrade.length; j++) {
						if (!upgrade[j].upgraded) {
							found = upgrade[j];
							break;
						}
					}
					if (!found) found = upgrade[upgrade.length - 1];

					if (found.price > this.coins) continue;

					let option = addUpgradeOption({
						index: num,
						total: allUpgrades.length,
						icon: found.icon,
						perk: found.perk,
						perkValue: found.perkValue,
						buy: () => {
							this.game.paused = false;

							for (let player of this.game.playerManager?.players ?? []) {
								found.upgrade(player);
							}

							found.upgraded = true;

							this.coins -= found.price;

							upgrades.classList.add('hidden');
							this.coinsUI?.classList.add('hidden');
						},
						color: found.color,
						description: found.description,
						price: [{ color: 'bg-amber-500', amount: found.price }]
					});

					upgradeContainer.appendChild(option);
					num += 1;
				}

				if (num == 0) {
					upgrades.classList.add('hidden');
					return false;
				}
			}
		}

		this.updateCoinsUI();
		return true;
	}

	updateCoinsUI() {
		if (!this.coinsUI) return;

		this.coinsUI.classList.remove('hidden');

		this.coinsUI.innerHTML = '';

		const stat1 = document.createElement('span');
		stat1.className = 'h-3 w-3 rounded-full relative bg-amber-500';

		this.coinsUI.innerHTML += Math.floor(this.coins);

		const statGlow = document.createElement('span');
		statGlow.className = 'absolute -inset-0.5 h-4 w-4 rounded-full blur-sm bg-amber-500';
		stat1.appendChild(statGlow);

		this.coinsUI.appendChild(stat1);
	}
}
