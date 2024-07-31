import Player from './player';
import { Icon } from './upgrades';
import { BallWeapon } from './weapons/ball';
import { Knife } from './weapons/knife';

export type Upgrade = {
	upgrade: (player: Player) => void;
	perk: string;
	perkValue: string;

	icon: Icon;
	color: string;
	upgraded?: boolean;

	price: number;
	description?: string;
};
/*
    - weapon fire rate
    - weapon shooting distance

    - bullet speed
    - bullet damage
    - bullet piercing

    - movement speed
    - player health
*/

const movementUpgrade: Upgrade[] = [
	{
		upgrade: (player: Player) => (player.speed *= 1.2),
		perk: 'Movement speed',
		perkValue: '+20%',
		icon: 'movement',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.speed *= 1.2),
		perk: 'Movement speed',
		perkValue: '+20%',
		icon: 'movement',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.speed *= 1.2),
		perk: 'Movement speed',
		perkValue: '+20%',
		icon: 'movement',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.speed *= 1.2),
		perk: 'Movement speed',
		perkValue: '+20%',
		icon: 'movement',
		color: 'text-blue-500',
		price: 10
	}
];

const maxHealthUpgrade: Upgrade[] = [
	{
		upgrade: (player: Player) => (player.maxHealth *= 1.2),
		perk: 'Max Health',
		perkValue: '+20%',
		icon: 'health',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.maxHealth *= 1.2),
		perk: 'Max Health',
		perkValue: '+20%',
		icon: 'health',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.maxHealth *= 1.2),
		perk: 'Max Health',
		perkValue: '+20%',
		icon: 'health',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.maxHealth *= 1.2),
		perk: 'Max Health',
		perkValue: '+20%',
		icon: 'health',
		color: 'text-blue-500',
		price: 10
	}
];

const coinMagnetUpgrade: Upgrade[] = [
	{
		upgrade: (player: Player) => (player.coinMagnetRange *= 1.2),
		perk: 'Coin Magnet Range',
		perkValue: '+20%',
		icon: 'coins',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.coinMagnetRange *= 1.2),
		perk: 'Coin Magnet Range',
		perkValue: '+20%',
		icon: 'coins',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.coinMagnetRange *= 1.2),
		perk: 'Coin Magnet Range',
		perkValue: '+20%',
		icon: 'coins',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.coinMagnetRange *= 1.2),
		perk: 'Coin Magnet Range',
		perkValue: '+20%',
		icon: 'coins',
		color: 'text-blue-500',
		price: 10
	}
];

// const playerUpgrades: Upgrade[] = [
// 	{
// 		upgrade: (player: Player) => (player.speed *= 1.2),
// 		perk: 'Movement speed',
// 		perkValue: '+20%',
// 		icon: 'movement',
// 		color: 'text-blue-500',
// 		price: 10
// 	},
// 	{
// 		upgrade: (player: Player) => (player.maxHealth *= 1.2),
// 		perk: 'Max Health',
// 		perkValue: '+20%',
// 		icon: 'health',
// 		color: 'text-blue-500',
// 		price: 10
// 	},
// 	{
// 		upgrade: (player: Player) => (player.coinMagnetRange *= 1.2),
// 		perk: 'Coin Magnet Range',
// 		perkValue: '+20%',
// 		icon: 'coins',
// 		color: 'text-blue-500',
// 		price: 10
// 	}
// ];

const gunUpgrades: Upgrade[] = [
	{
		upgrade: (player: Player) => (player.weapon.fireRate *= 0.66),
		perk: 'Fire rate',
		perkValue: '+50%',
		icon: 'fireRate',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.weapon.damage *= 1.5),
		perk: 'Damage',
		perkValue: '+50%',
		icon: 'damage',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.weapon.piercing += 1),
		perk: 'Piercing',
		perkValue: '+1',
		icon: 'piercing',
		color: 'text-blue-500',
		price: 20
	},
	{
		upgrade: (player: Player) => (player.shootingRange *= 1.2),
		perk: 'Shooting distance',
		perkValue: '+20%',
		icon: 'shootingRange',
		color: 'text-blue-500',
		price: 20
	},
	{
		upgrade: (player: Player) => (player.weapon.projectileSpeed *= 1.2),
		perk: 'Bullet speed',
		perkValue: '+20%',
		icon: 'bulletSpeed',
		color: 'text-blue-500',
		price: 20
	},
	{
		upgrade: (player: Player) => (player.weapon.fireRate *= 0.75),
		perk: 'Fire rate',
		perkValue: '+33%',
		icon: 'fireRate',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.weapon.damage *= 1.5),
		perk: 'Damage',
		perkValue: '+50%',
		icon: 'damage',
		color: 'text-blue-500',
		price: 20
	}
];

const chainsawUpgrades: Upgrade[] = [
	{
		upgrade: (player: Player) => {
			player.weapons.push(new BallWeapon(player.game, player.color));
		},
		perk: 'Chainsaw',
		perkValue: 'New Weapon',
		icon: 'new',
		color: 'text-red-500',
		price: 10
	},
	{
		upgrade: (player: Player) => {
			// find chainsaw weapon
			let chainsaw = player.weapons.find((w) => w instanceof BallWeapon);
			if (chainsaw) {
				chainsaw.speed *= 2;
			}
		},
		perk: 'Chainsaw Speed',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 200
	},
	{
		upgrade: (player: Player) => {
			// find chainsaw weapon
			let chainsaw = player.weapons.find((w) => w instanceof BallWeapon);
			if (chainsaw) {
				chainsaw.damage *= 2;
			}
		},
		perk: 'Chainsaw Damage',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 400
	},
	{
		upgrade: (player: Player) => {
			// find chainsaw weapon
			const chainsaw = new BallWeapon(player.game, player.color);
			chainsaw.distance = 100;
			player.weapons.push(chainsaw);
		},
		perk: 'Chainsaw',
		perkValue: '+1',
		icon: 'new',
		color: 'text-red-500',
		price: 200
	}
];

const knifeUpgrades: Upgrade[] = [
	{
		upgrade: (player: Player) => {
			player.weapons.push(new Knife(player.game, player.color));
		},
		perk: 'Knife',
		perkValue: 'New Weapon',
		icon: 'new',
		color: 'text-red-500',
		price: 10
	}
];

export const allUpgrades: Upgrade[][] = [
	[
		{
			upgrade: (player: Player) => (player.health = player.maxHealth),
			perk: 'Restore Health to',
			perkValue: '100%',
			icon: 'health',
			color: 'text-amber-500',
			price: 1
		}
	],
	movementUpgrade,
	maxHealthUpgrade,
	coinMagnetUpgrade,
	gunUpgrades,
	chainsawUpgrades,
	knifeUpgrades
];
