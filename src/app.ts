import Player from './player.js';
import EnemyManager from './enemy-manager.js';
import * as PIXI from 'pixi.js';
//import RAPIER from '@dimforge/rapier2d-compat';

export default class Game {
	container: PIXI.Container;
	world?: RAPIER.World;

	keys: Record<string, boolean> = {};

	debugGraphics?: PIXI.Graphics;

	constructor() {
		this.setup();

		this.container = new PIXI.Container();

		window.container = this.container;
		window.game = this;
	}

	async setupPhysicsWorld() {
		const RAPIER = await import('@dimforge/rapier2d');

		//await RAPIER.init();
		let gravity = new RAPIER.Vector2(0.0, 0.0);
		let world = new RAPIER.World(gravity);

		window.RAPIER = RAPIER;
		this.world = world;
		window.world = world;
	}

	async setup() {
		const app = new PIXI.Application();
		// set to full screen
		await app.init({
			width: window.innerWidth,
			height: window.innerHeight,
			antialias: true,
			backgroundColor: 0
		});

		// add the canvas to the HTML document
		document.body.appendChild(app.canvas);

		// add a container
		app.stage.addChild(this.container);

		this.container.position.set(window.innerWidth / 2, window.innerHeight / 2);

		// add a resize event listener
		window.addEventListener('resize', () => {
			app.renderer.resize(window.innerWidth, window.innerHeight);

			this.container.position.set(window.innerWidth / 2, window.innerHeight / 2);
		});

		await this.setupPhysicsWorld();

		app.ticker.add((ticker) => {
			// get ellapsed time
			const deltaTime = ticker.deltaMS;

			if (this.world) {
				const eventQueue = new RAPIER.EventQueue(true);
				this.world.timestep = deltaTime * 0.001;
				this.world.step(eventQueue);
				this.handleCollisionEvents(eventQueue);
			}

			this.update(deltaTime);
		});

		this.player = new Player(this);

		this.enemyManager = new EnemyManager(this, 10);

		window.addEventListener('keydown', this.handleKeyDown.bind(this));
		window.addEventListener('keyup', this.handleKeyUp.bind(this));
	}

	handleCollisionEvents(eventQueue: RAPIER.EventQueue) {
		eventQueue.drainCollisionEvents((handle1, handle2, started) => {
			if (!started) return;
			if (!this.world) return;

			let collider1 = this.world.getCollider(handle1);
			let collider2 = this.world.getCollider(handle2);

			// Get the user data we attached to the colliders
			let userData1 = collider1.parent()?.userData;
			let userData2 = collider2.parent()?.userData;

			if (!userData1 || !userData2) return;

			// if one is an enemy, the other a projectile, destroy the projectile, take damage
			if (userData1.isEnemy && userData2.isProjectile) {
				userData1.takeDamage(userData2.damage);
				userData2.destroy();
			}
			if (userData2.isEnemy && userData1.isProjectile) {
				userData2.takeDamage(userData1.damage);
				userData1.destroy();
			}
		});
	}

	/**
	 *
	 * @param {number} deltaTime
	 */
	update(deltaTime: number) {
		// update game state here
		this.player.update(deltaTime, this.keys, this.enemyManager);

		this.enemyManager.update(deltaTime, this.player);

		if (Math.random() < deltaTime * 0.002) {
			this.enemyManager.addEnemy();
		}
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
