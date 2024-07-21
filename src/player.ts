import { Weapon } from './weapon';
import * as PIXI from 'pixi.js';

import Game from './game.js';

/**
 * Player class
 *
 * @export
 * @class Player
 */
export default class Player {
	constructor(game: Game) {
		this.size = 20;

		this.maxHealth = 100;
		this.health = this.maxHealth;

		this.playerContainer = new PIXI.Container();
		game.container.addChild(this.playerContainer);

		const light = new PIXI.Graphics();

		// make a light source by drawing a circle with some opacity and getting smaller and smaller
		for (let i = 0; i < 100; i++) {
			const alpha = 0.02;
			const radius = i * 4;
			light.circle(0, 0, radius).fill({ color: 0xffffff, alpha });
		}

		light.x = 0;
		light.y = 0;
		this.playerContainer.addChild(light);

		this.shadow = new PIXI.Graphics();
		this.playerContainer.addChild(this.shadow);
		light.mask = this.shadow;

		const shape = new PIXI.Graphics().rect(0, 0, this.size, this.size).fill(0x00ff00);
		shape.pivot.set(this.size / 2, this.size / 2);
		this.playerContainer.addChild(shape);

		this.contactDamage = 10;

		this.createRigidBody();

		this.createHealthBar();

		this.speed = 0.4;
		this.shape = shape;

		this.weapon = new Weapon('Pistol');

		this.isPlayer = true;
	}

	createHealthBar() {
		const healthBarWidth = this.size;
		const healthBarHeight = 5;

		this.healthBar = new PIXI.Graphics().rect(0, 0, healthBarWidth, healthBarHeight).fill(0x00ff00);
		this.healthBar.position.set(0, -this.size);
		this.healthBar.pivot.set(healthBarWidth / 2, healthBarHeight / 2);

		this.playerContainer.addChild(this.healthBar);
	}

	createRigidBody() {
		const rigidBodyDesc = RAPIER.RigidBodyDesc.kinematicPositionBased()
			.setTranslation(0, 0)
			.lockRotations();
		this.rigidBody = world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER.ColliderDesc.cuboid(
			this.size / 2,
			this.size / 2
		).setCollisionGroups(0x00010000);
		this.collider = world.createCollider(colliderDesc, this.rigidBody);

		// Attach this Player instance to the rigid body's user data
		this.rigidBody.userData = this;
	}

	get x() {
		return this.playerContainer.x;
	}
	set x(value) {
		this.playerContainer.x = value;
		this.rigidBody.setTranslation({ x: value, y: -this.y });
	}

	get y() {
		return this.playerContainer.y;
	}
	set y(value) {
		this.playerContainer.y = value;
		this.rigidBody.setTranslation({ x: this.x, y: -value });
	}

	get position() {
		return this.playerContainer.position;
	}
	set position(value) {
		this.playerContainer.position = value;

		this.rigidBody.setTranslation({ x: this.x, y: -this.y });
	}

	update(deltaTime, keys, enemyManager) {
		// move the player, wasd
		let dx = 0,
			dy = 0;
		if (keys['w']) dy -= 1;
		if (keys['s']) dy += 1;
		if (keys['a']) dx -= 1;
		if (keys['d']) dx += 1;

		// Normalize diagonal movement
		if (dx !== 0 && dy !== 0) {
			dx *= Math.SQRT1_2;
			dy *= Math.SQRT1_2;
		}

		this.x += dx * this.speed * deltaTime;
		this.y += dy * this.speed * deltaTime;

		// get closest enemy
		const closestEnemy = enemyManager.getClosestEnemy(this.position);

		if (closestEnemy) {
			this.weapon.fire(this.position, closestEnemy.position);
		}

		this.weapon.update(deltaTime);

		this.drawShadow();
	}

	drawShadow() {
		// ray cast around the player to create a shadow
		this.shadow.clear();

		const rays = 360;

		const angleStep = (Math.PI * 2) / rays;
		const rayLength = 1000;

		let firstPoint;

		for (let i = 0; i < rays; i++) {
			const angle = i * angleStep;

			const ray = new RAPIER.Ray(
				{ x: this.x, y: -this.y },
				{ x: Math.cos(angle), y: Math.sin(angle) }
			);

			const hit = world.castRay(ray, rayLength, true, null, 0x00020002);

			let hitPoint = hit
				? ray.pointAt(hit.toi)
				: { x: ray.dir.x * rayLength, y: ray.dir.y * rayLength };

			let x = hitPoint.x - this.x;
			let y = -hitPoint.y - this.y;

			if (i === 0) {
				this.shadow.moveTo(x, y);
				firstPoint = { x, y };
			} else {
				this.shadow.lineTo(x, y);
			}

			if (i === rays - 1) {
				this.shadow.lineTo(firstPoint.x, firstPoint.y);
			}
		}
		this.shadow.fill(0);
	}

	takeDamage(amount) {
		this.health -= amount;
		if (this.health < 0) {
			this.health = 0;
		}
		this.healthBar.width = this.size * (this.health / this.maxHealth);
	}
}
