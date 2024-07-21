import * as PIXI from 'pixi.js';

export class Weapon {
	constructor(type) {
		this.container = game.container;

		this.type = type;
		this.cooldown = 0;
		this.projectiles = [];
		this.setStats();
	}

	setStats() {
		this.damage = 20;
		this.fireRate = 100;
		this.projectileSpeed = 0.3;
		this.projectileSize = 5;
	}

	fire(position, enemyPosition) {
		if (this.cooldown <= 0) {
			this.createProjectile(position, enemyPosition, 0);
			this.cooldown = this.fireRate;
		}
	}

	createProjectile(position, enemyPosition, angleOffset) {
		const angle =
			Math.atan2(enemyPosition.y - position.y, enemyPosition.x - position.x) + angleOffset;

		const shape = new PIXI.Graphics()
			.rect(0, 0, this.projectileSize, this.projectileSize)
			.fill(0xffff00);

		shape.x = position.x;
		shape.y = position.y;

		this.container.addChild(shape);

		const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(shape.x, shape.y);
		const rigidBody = world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER.ColliderDesc.ball(this.projectileSize)
			.setCollisionGroups(0x00040002)
			.setSensor(true)
			.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);

		const collider = world.createCollider(colliderDesc, rigidBody);

		const projectile = {
			vx: Math.cos(angle) * this.projectileSpeed,
			vy: Math.sin(angle) * this.projectileSpeed,
			damage: this.damage,
			size: this.projectileSize,
			shape: shape,
			rigidBody: rigidBody,
			collider: collider,
			destroy: () => {
				projectile.destroyed = true;
				world.removeRigidBody(rigidBody);
				game.container.removeChild(shape);
			},
			isProjectile: true,
			destroyed: false
		};

		rigidBody.userData = projectile;

		this.projectiles.push(projectile);
	}

	update(deltaTime) {
		this.cooldown -= deltaTime;

		for (let i = this.projectiles.length - 1; i >= 0; i--) {
			let projectile = this.projectiles[i];
			if (projectile.destroyed) {
				this.projectiles.splice(i, 1);
				continue;
			}
			projectile.shape.x += projectile.vx * deltaTime;
			projectile.shape.y += projectile.vy * deltaTime;

			projectile.rigidBody.setTranslation({ x: projectile.shape.x, y: -projectile.shape.y });

			// Check if projectile is too far from the player
			const playerPos = game.player.shape.position;
			const dx = projectile.shape.x - playerPos.x;
			const dy = projectile.shape.y - playerPos.y;
			const distanceSquared = dx * dx + dy * dy;

			if (distanceSquared > 1000000) {
				// 1000 units squared
				projectile.destroy();
				this.projectiles.splice(i, 1);
			}
		}
	}

	clearAllProjectiles() {
		for (let projectile of this.projectiles) {
			projectile.destroy();
		}
		this.projectiles = [];
	}
}
