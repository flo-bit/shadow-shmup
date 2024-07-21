import * as PIXI from 'pixi.js';

export default class Enemy {
	constructor() {
		// add a square

		this.size = 30;

		this.enemyContainer = new PIXI.Container();
		this.enemyContainer.x = Math.random() * 800 - 400;
		this.enemyContainer.y = Math.random() * 800 - 400;

		game.container.addChild(this.enemyContainer);

		const shape = new PIXI.Graphics().rect(0, 0, this.size, this.size).fill(0);
		shape.pivot.set(this.size / 2, this.size / 2);
		this.enemyContainer.addChild(shape);

		this.maxHealth = 100;
		this.health = this.maxHealth;

		this.createHealthBar();

		this.createRidigBody();

		this.damage = 10; // Damage dealt to player on contact

		this.speed = 0.05;
		this.shape = shape;

		this.exploding = false;
		this.destroyTime = -1;

		this.destroyed = false;

		this.isEnemy = true;
	}

	createHealthBar() {
		const healthBarWidth = this.size;
		const healthBarHeight = 5;
		this.healthBar = new PIXI.Graphics().rect(0, 0, healthBarWidth, healthBarHeight).fill(0);

		this.healthBar.position.set(0, -this.size);
		this.healthBar.pivot.set(healthBarWidth / 2, healthBarHeight / 2);

		this.enemyContainer.addChild(this.healthBar);
	}

	createRidigBody() {
		const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
			.setTranslation(this.x, this.y)
			.lockRotations();
		this.rigidBody = world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER.ColliderDesc.cuboid(this.size / 2, this.size / 2)
			.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS)
			.setCollisionGroups(0x00020006);
		this.collider = world.createCollider(colliderDesc, this.rigidBody);

		this.rigidBody.userData = this;
	}

	get x() {
		return this.enemyContainer.x;
	}
	set x(value) {
		this.enemyContainer.x = value;
		this.rigidBody.setTranslation({ x: value, y: -this.y });
	}

	get y() {
		return this.enemyContainer.y;
	}
	set y(value) {
		this.enemyContainer.y = value;

		this.rigidBody.setTranslation({ x: this.x, y: -value });
	}

	get position() {
		return this.enemyContainer.position;
	}
	set position(value) {
		this.enemyContainer.position = value;
		this.rigidBody.setTranslation({ x: this.x, y: -this.y });
	}

	update(deltaTime, player) {
		if (this.destroyed) return;

		// move the player, wasd
		let dx = player.x - this.x;
		let dy = player.y - this.y;

		const distance = Math.sqrt(dx * dx + dy * dy);

		// Only move if not too close to the player and not exploding
		if (distance > this.size + 10 && !this.exploding) {
			this.x += (dx / distance) * this.speed * deltaTime;
			this.y += (dy / distance) * this.speed * deltaTime;
		} else if (!this.exploding) {
			this.exploding = true;
			this.destroyTime = 2000;
		} else {
			this.destroyTime -= deltaTime;
			if (this.destroyTime <= 0) {
				this.destroy();

				if (distance < this.size + 20) {
					player.takeDamage(20);
				}
			}
		}
	}

	destroy() {
		this.destroyed = true;
		// remove the square
		this.shape.destroy();
		world.removeRigidBody(this.rigidBody);
	}

	takeDamage(amount) {
		this.health -= amount;
		this.healthBar.width = (this.health / this.maxHealth) * this.size;
		if (this.health <= 0) {
			this.destroy();
		}
	}
}
