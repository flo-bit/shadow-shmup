import Player from '../player/player';
import { Icon } from './upgrades';
import { BallWeapon } from '../weapons/ball';
import { Knife } from '../weapons/knife';

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
		upgrade: (player: Player) => (player.speed *= 1.5),
		perk: 'Movement speed',
		perkValue: '+50%',
		icon: 'movement',
		color: 'text-blue-500',
		price: 30
	},
	{
		upgrade: (player: Player) => (player.speed *= 1.5),
		perk: 'Movement speed',
		perkValue: '+50%',
		icon: 'movement',
		color: 'text-blue-500',
		price: 60
	},
	{
		upgrade: (player: Player) => (player.speed *= 2),
		perk: 'Movement speed',
		perkValue: '+100%',
		icon: 'movement',
		color: 'text-blue-500',
		price: 150
	},
	{
		upgrade: (player: Player) => (player.speed *= 1.2),
		perk: 'Movement speed',
		perkValue: '+20%',
		icon: 'movement',
		color: 'text-blue-500',
		price: 450
	},
	{
		upgrade: (player: Player) => (player.speed *= 1.2),
		perk: 'Movement speed',
		perkValue: '+20%',
		icon: 'movement',
		color: 'text-blue-500',
		price: 1500
	},
	{
		upgrade: (player: Player) => (player.speed *= 1.02),
		perk: 'Movement speed',
		perkValue: '+2%',
		icon: 'movement',
		color: 'text-blue-500',
		price: 5000
	}
];

const maxHealthUpgrade: Upgrade[] = [
	{
		upgrade: (player: Player) => (player.maxHealth *= 1.5),
		perk: 'Max Health',
		perkValue: '+50%',
		icon: 'health',
		color: 'text-blue-500',
		price: 10
	},
	{
		upgrade: (player: Player) => (player.maxHealth *= 1.5),
		perk: 'Max Health',
		perkValue: '+50%',
		icon: 'health',
		color: 'text-blue-500',
		price: 40
	},
	{
		upgrade: (player: Player) => (player.maxHealth *= 2),
		perk: 'Max Health',
		perkValue: '+100%',
		icon: 'health',
		color: 'text-blue-500',
		price: 200
	},
	{
		upgrade: (player: Player) => (player.maxHealth *= 3),
		perk: 'Max Health',
		perkValue: '+200%',
		icon: 'health',
		color: 'text-blue-500',
		price: 800
	},
	{
		upgrade: (player: Player) => (player.maxHealth *= 4),
		perk: 'Max Health',
		perkValue: '+400%',
		icon: 'health',
		color: 'text-blue-500',
		price: 2000
	},
	{
		upgrade: (player: Player) => (player.maxHealth *= 2),
		perk: 'Max Health',
		perkValue: '+200%',
		icon: 'health',
		color: 'text-blue-500',
		price: 10000
	},
	{
		upgrade: (player: Player) => (player.maxHealth *= 1.02),
		perk: 'Max Health',
		perkValue: '+2%',
		icon: 'health',
		color: 'text-blue-500',
		price: 50000
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
		price: 40
	},
	{
		upgrade: (player: Player) => (player.coinMagnetRange *= 1.2),
		perk: 'Coin Magnet Range',
		perkValue: '+20%',
		icon: 'coins',
		color: 'text-blue-500',
		price: 80
	},
	{
		upgrade: (player: Player) => (player.coinMagnetRange *= 1.2),
		perk: 'Coin Magnet Range',
		perkValue: '+20%',
		icon: 'coins',
		color: 'text-blue-500',
		price: 200
	},
	{
		upgrade: (player: Player) => (player.coinMagnetRange *= 1.02),
		perk: 'Coin Magnet Range',
		perkValue: '+2%',
		icon: 'coins',
		color: 'text-blue-500',
		price: 1000
	}
];

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
		upgrade: (player: Player) => (player.weapon.damage *= 2),
		perk: 'Damage',
		perkValue: '+100%',
		icon: 'damage',
		color: 'text-blue-500',
		price: 50
	},
	{
		upgrade: (player: Player) => (player.weapon.piercing += 1),
		perk: 'Piercing',
		perkValue: '+1',
		icon: 'piercing',
		color: 'text-blue-500',
		price: 200
	},
	{
		upgrade: (player: Player) => (player.shootingRange *= 1.5),
		perk: 'Shooting distance',
		perkValue: '+50%',
		icon: 'shootingRange',
		color: 'text-blue-500',
		price: 1000
	},
	{
		upgrade: (player: Player) => (player.weapon.projectileSpeed *= 1.5),
		perk: 'Bullet speed',
		perkValue: '+50%',
		icon: 'bulletSpeed',
		color: 'text-blue-500',
		price: 3000
	},
	{
		upgrade: (player: Player) => (player.weapon.fireRate *= 0.5),
		perk: 'Fire rate',
		perkValue: '+100%',
		icon: 'fireRate',
		color: 'text-blue-500',
		price: 10000
	},
	{
		upgrade: (player: Player) => (player.weapon.damage *= 3),
		perk: 'Damage',
		perkValue: '+200%',
		icon: 'damage',
		color: 'text-blue-500',
		price: 40000
	},
	{
		upgrade: (player: Player) => (player.weapon.piercing += 4),
		perk: 'Piercing',
		perkValue: '+4',
		icon: 'piercing',
		color: 'text-blue-500',
		price: 100000
	},
	{
		upgrade: (player: Player) => (player.shootingRange *= 2),
		perk: 'Shooting distance',
		perkValue: '+100%',
		icon: 'shootingRange',
		color: 'text-blue-500',
		price: 300000
	},
	{
		upgrade: (player: Player) => (player.weapon.projectileSpeed *= 2),
		perk: 'Bullet speed',
		perkValue: '+100%',
		icon: 'bulletSpeed',
		color: 'text-blue-500',
		price: 1000000
	},
	{
		upgrade: (player: Player) => (player.weapon.damage *= 1.02),
		perk: 'Damage',
		perkValue: '+2%',
		icon: 'damage',
		color: 'text-blue-500',
		price: 2000000
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
			chainsaw.distance = 150;

			// find chainsaw weapon
			let oldChainsaw = player.weapons.find((w) => w instanceof BallWeapon);
			if (oldChainsaw) {
				chainsaw.damage = oldChainsaw.damage;
				chainsaw.speed = oldChainsaw.speed;
				chainsaw.angle = oldChainsaw.angle + (Math.PI * 2) / 3;
			}
			player.weapons.push(chainsaw);
		},
		perk: 'Chainsaw',
		perkValue: '+1',
		icon: 'new',
		color: 'text-red-500',
		price: 800
	},
	{
		upgrade: (player: Player) => {
			// for all chainsaws
			player.weapons.forEach((w) => {
				if (w instanceof BallWeapon) {
					w.speed *= 2;
				}
			});
		},
		perk: 'Chainsaw Speed',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 1600
	},
	{
		upgrade: (player: Player) => {
			// find chainsaw weapon
			player.weapons.forEach((w) => {
				if (w instanceof BallWeapon) {
					w.damage *= 2;
				}
			});
		},
		perk: 'Chainsaw Damage',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 3200
	},
	{
		upgrade: (player: Player) => {
			// find chainsaw weapon
			const chainsaw = new BallWeapon(player.game, player.color);
			chainsaw.distance = 200;

			// find chainsaw weapon
			let oldChainsaw = player.weapons.find((w) => w instanceof BallWeapon);
			if (oldChainsaw) {
				chainsaw.damage = oldChainsaw.damage;
				chainsaw.speed = oldChainsaw.speed;
				chainsaw.angle = oldChainsaw.angle + (Math.PI * 4) / 3;
			}
			player.weapons.push(chainsaw);
		},
		perk: 'Chainsaw',
		perkValue: '+1',
		icon: 'new',
		color: 'text-red-500',
		price: 6400
	},
	{
		upgrade: (player: Player) => {
			// for all chainsaws
			player.weapons.forEach((w) => {
				if (w instanceof BallWeapon) {
					w.speed *= 2;
				}
			});
		},
		perk: 'Chainsaw Speed',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 10000
	},
	{
		upgrade: (player: Player) => {
			// find chainsaw weapon
			player.weapons.forEach((w) => {
				if (w instanceof BallWeapon) {
					w.damage *= 2;
				}
			});
		},
		perk: 'Chainsaw Damage',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 30000
	},
	{
		upgrade: (player: Player) => {
			player.weapons.forEach((w) => {
				if (w instanceof BallWeapon) {
					w.damage *= 1.02;
				}
			});
		},
		perk: 'Chainsaw Damage',
		perkValue: '+2%',
		icon: 'new',
		color: 'text-red-500',
		price: 100000
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
	},
	{
		upgrade: (player: Player) => {
			// find knife weapon
			let knife = player.weapons.find((w) => w instanceof Knife);
			if (knife) {
				knife.speed *= 2;
			}
		},
		perk: 'Knife Speed',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 30
	},
	{
		upgrade: (player: Player) => {
			// find knife weapon
			let knife = player.weapons.find((w) => w instanceof Knife);
			if (knife) {
				knife.damage *= 2;
			}
		},
		perk: 'Knife Damage',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 70
	},
	{
		upgrade: (player: Player) => {
			// find knife weapon
			let knife = player.weapons.find((w) => w instanceof Knife);
			if (knife) {
				knife.distance *= 2;
			}
		},
		perk: 'Knife Distance',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 200
	},
	{
		upgrade: (player: Player) => {
			let knife = new Knife(player.game, player.color);

			// find knife weapon
			let oldKnife = player.weapons.find((w) => w instanceof Knife);
			if (oldKnife) {
				knife.damage = oldKnife.damage;
				knife.speed = oldKnife.speed;
				knife.angle = oldKnife.angle + (Math.PI * 2) / 3;
				knife.distance = oldKnife.distance;
			}

			player.weapons.push(knife);
		},
		perk: 'Knife',
		perkValue: 'New Weapon',
		icon: 'new',
		color: 'text-red-500',
		price: 600
	},
	{
		upgrade: (player: Player) => {
			// for all knives
			player.weapons.forEach((w) => {
				if (w instanceof Knife) {
					w.speed *= 2;
				}
			});
		},
		perk: 'Knife Speed',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 1500
	},
	{
		upgrade: (player: Player) => {
			// find knife weapon
			player.weapons.forEach((w) => {
				if (w instanceof Knife) {
					w.damage *= 2;
				}
			});
		},
		perk: 'Knife Damage',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 4000
	},
	{
		upgrade: (player: Player) => {
			let knife = new Knife(player.game, player.color);

			// find knife weapon
			let oldKnife = player.weapons.find((w) => w instanceof Knife);
			if (oldKnife) {
				knife.damage = oldKnife.damage;
				knife.speed = oldKnife.speed;
				knife.angle = oldKnife.angle + (Math.PI * 4) / 3;
				knife.distance = oldKnife.distance;
			}

			player.weapons.push(knife);
		},
		perk: 'Knife',
		perkValue: 'New Weapon',
		icon: 'new',
		color: 'text-red-500',
		price: 30000
	},
	{
		upgrade: (player: Player) => {
			// for all knives
			player.weapons.forEach((w) => {
				if (w instanceof Knife) {
					w.speed *= 2;
				}
			});
		},
		perk: 'Knife Speed',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 100000
	},
	{
		upgrade: (player: Player) => {
			// find knife weapon
			player.weapons.forEach((w) => {
				if (w instanceof Knife) {
					w.damage *= 2;
				}
			});
		},
		perk: 'Knife Damage',
		perkValue: '+100%',
		icon: 'new',
		color: 'text-red-500',
		price: 200000
	},
	{
		upgrade: (player: Player) => {
			player.weapons.forEach((w) => {
				if (w instanceof Knife) {
					w.damage *= 1.02;
				}
			});
		},
		perk: 'Knife Damage',
		perkValue: '+2%',
		icon: 'new',
		color: 'text-red-500',
		price: 1000000
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
