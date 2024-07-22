import Player from './player.js';
import EnemyManager from './enemy-manager.js';
import * as PIXI from 'pixi.js';
import { type World, EventQueue } from '@dimforge/rapier2d';
import { RAPIER } from './rapier.js';
import ParticleSystem from './particles.js';
import { Projectile } from './projectile.js';
import Enemy from './enemy.js';

import { AdvancedBloomFilter, OldFilmFilter, PixelateFilter } from 'pixi-filters';

export default class Game {
	container: PIXI.Container;
	world!: World;

	keys: Record<string, boolean> = {};

	debugGraphics?: PIXI.Graphics;

	player?: Player;
	enemyManager?: EnemyManager;

	particleSystem?: ParticleSystem;

	constructor() {
		this.setup();

		this.container = new PIXI.Container();

		window.container = this.container;
		window.game = this;
	}

	async setupPhysicsWorld() {
		const RAPIER = await import('@dimforge/rapier2d');

		let gravity = new RAPIER.Vector2(0.0, 0.0);
		let world = new RAPIER.World(gravity);

		window.RAPIER = RAPIER;
		this.world = world;
		window.world = world;
	}

	async setup() {
		await this.setupPhysicsWorld();

		const app = new PIXI.Application();
		// set to full screen
		await app.init({
			width: window.innerWidth,
			height: window.innerHeight,
			antialias: true,
			backgroundColor: 0
		});

		this.particleSystem = new ParticleSystem(app);
		this.container.addChild(this.particleSystem.container);

		// add the canvas to the HTML document
		document.body.appendChild(app.canvas);

		// add a container
		app.stage.addChild(this.container);

		this.container.position.set(window.innerWidth / 2, window.innerHeight / 2);

		//this.container.filters = [new AdvancedBloomFilter(), new PixelateFilter(6)];

		// add a resize event listener
		window.addEventListener('resize', () => {
			app.renderer.resize(window.innerWidth, window.innerHeight);

			this.container.position.set(window.innerWidth / 2, window.innerHeight / 2);
		});

		app.ticker.add((ticker) => {
			// get ellapsed time
			const deltaTime = ticker.deltaMS;

			if (this.world) {
				const eventQueue = new (RAPIER().EventQueue)(true);
				this.world.timestep = deltaTime * 0.001;
				this.world.step(eventQueue);
				this.handleCollisionEvents(eventQueue);
			}
			this.particleSystem?.update(deltaTime);
			this.update(deltaTime);
		});

		this.player = new Player(this);

		this.enemyManager = new EnemyManager(this, 10);

		window.addEventListener('keydown', this.handleKeyDown.bind(this));
		window.addEventListener('keyup', this.handleKeyUp.bind(this));
	}

	handleCollisionEvents(eventQueue: EventQueue) {
		eventQueue.drainCollisionEvents((handle1, handle2, started) => {
			if (!started) return;
			if (!this.world) return;

			let collider1 = this.world.getCollider(handle1);
			let collider2 = this.world.getCollider(handle2);

			// Get the user data we attached to the colliders
			let userData1 = collider1.parent()?.userData;
			let userData2 = collider2.parent()?.userData;

			if (!userData1 || !userData2) return;

			let enemy: Enemy | undefined;
			let projectile: Projectile | undefined;

			// new way to check with instanceof
			if (userData1 instanceof Enemy && userData2 instanceof Projectile) {
				enemy = userData1;
				projectile = userData2;
			} else if (userData2 instanceof Enemy && userData1 instanceof Projectile) {
				enemy = userData2;
				projectile = userData1;
			}

			if (enemy && projectile) {
				this.spawnParticles(projectile.shape.x, projectile.shape.y, 10);

				enemy.takeDamage(projectile.damage);
				projectile.destroy();
			}
		});
	}

	spawnParticles(x: number, y: number, num: number) {
		for (let i = 0; i < num; i++) {
			this.particleSystem?.createParticle(
				x,
				y,
				Math.random() * 5 + 5, // size
				this.player?.color ?? 0xffffff, // color
				Math.random() * 0.5 + 0.5, // alpha
				(Math.random() - 0.5) * 0.3, // speedX
				(Math.random() - 0.5) * 0.3, // speedY
				300
			);
		}
	}

	/**
	 *
	 * @param {number} deltaTime
	 */
	update(deltaTime: number) {
		// update game state here
		this.player?.update(deltaTime, this.keys);

		this.enemyManager?.update(deltaTime);

		if (Math.random() < deltaTime * 0.002) {
			this.enemyManager?.addEnemy();
		}

		//this.renderPhysicsDebug();
	}

	handleKeyDown(e: KeyboardEvent) {
		this.keys[e.key.toLowerCase()] = true;
	}

	handleKeyUp(e: KeyboardEvent) {
		this.keys[e.key.toLowerCase()] = false;
	}

	renderPhysicsDebug() {
		if (!this.world) return;

		if (!this.debugGraphics) {
			this.debugGraphics = new PIXI.Graphics();
			this.container.addChild(this.debugGraphics);
		}

		const debugGraphics = this.debugGraphics;

		debugGraphics.clear();

		const buffers = this.world.debugRender();
		const vtx = buffers.vertices;
		const cls = buffers.colors;

		for (let i = 0; i < vtx.length / 4; i += 1) {
			let color = [cls[i * 8], cls[i * 8 + 1], cls[i * 8 + 2]];

			debugGraphics.stroke({ width: 2.0, color });

			debugGraphics.moveTo(vtx[i * 4], -vtx[i * 4 + 1]);
			debugGraphics.lineTo(vtx[i * 4 + 2], -vtx[i * 4 + 3]);
		}

		for (let i = 0; i < vtx.length / 2; i += 2) {
			debugGraphics.circle(vtx[i], -vtx[i + 1], 2).fill(0xffffff);
		}
	}
}

const game = new Game();
