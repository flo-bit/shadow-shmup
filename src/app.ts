import Player from './player.js';
import EnemyManager from './enemy-manager.js';
import * as PIXI from 'pixi.js';
import { type World, EventQueue } from '@dimforge/rapier2d';
import { RAPIER } from './rapier.js';
import ParticleSystem from './particles.js';
import { Projectile } from './projectile.js';
import Enemy from './enemy.js';

import Stats from 'stats.js';
import Obstacle from './obstacles.js';

import { AdvancedBloomFilter } from 'pixi-filters';
import PlayerManager from './player-manager.js';
import ProjectileManager, { ProjectileData } from './projectile-manager.js';

import { sound } from '@pixi/sound';
import Controls from './controls.js';
import { ObstacleManager } from './obstacle-manager.js';

export default class Game {
	container: PIXI.Container;
	mainContainer: PIXI.Container;
	world!: World;

	keys: Record<string, boolean> = {};

	debugGraphics?: PIXI.Graphics;

	enemyManager?: EnemyManager;
	playerManager?: PlayerManager;

	projectileManager?: ProjectileManager;

	particleSystem?: ParticleSystem;

	debug: boolean = false;

	stats?: Stats;

	playing: boolean = false;

	controls: Controls;

	constructor() {
		this.setup();

		this.mainContainer = new PIXI.Container();
		this.container = new PIXI.Container();

		this.controls = new Controls(this);

		sound.add('music-intro', {
			url: '/shadow-shmup/music-intro.mp3'
		});
		sound.add('music', { url: '/shadow-shmup/music.mp3', loop: true });
		sound.add('laser', { url: '/shadow-shmup/laser.mp3', volume: 0.3 });
	}

	async setupPhysicsWorld() {
		const RAPIER = await import('@dimforge/rapier2d');

		let gravity = new RAPIER.Vector2(0.0, 0.0);
		let world = new RAPIER.World(gravity);

		window.RAPIER = RAPIER;
		this.world = world;
	}

	startMusic() {
		sound.stopAll();

		sound.play('music-intro', () => {
			sound.play('music');
		});
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

		// add a bloom filter
		const bloomFilter = new AdvancedBloomFilter({
			threshold: 0.2,
			quality: 32,
			bloomScale: 1,
			blur: 4
		});
		app.stage.filters = [bloomFilter];

		// add the canvas to the HTML document
		document.body.appendChild(app.canvas);

		// add a container
		app.stage.addChild(this.mainContainer);
		this.mainContainer.addChild(this.container);

		this.container.position.set(window.innerWidth / 2, window.innerHeight / 2);

		// add a resize event listener
		window.addEventListener('resize', () => {
			app.renderer.resize(window.innerWidth, window.innerHeight);

			this.container.position.set(window.innerWidth / 2, window.innerHeight / 2);
		});

		app.ticker.add((ticker) => {
			if (this.stats) this.stats.begin();

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

			if (this.debug) this.renderPhysicsDebug();

			// move the container so that the player is always in the center
			let position = this.playerManager?.getCenter();
			if (position) {
				position.x = -position.x + window.innerWidth / 2;
				position.y = -position.y + window.innerHeight / 2;

				this.container.x = this.container.x * 0.98 + position.x * 0.02;
				this.container.y = this.container.y * 0.98 + position.y * 0.02;
			}

			if (this.stats) this.stats.end();
		});

		this.playerManager = new PlayerManager(this);
		this.enemyManager = new EnemyManager(this, 10);

		this.projectileManager = new ProjectileManager(this);

		window.addEventListener('keydown', this.handleKeyDown.bind(this));
		window.addEventListener('keyup', this.handleKeyUp.bind(this));

		if (this.debug) {
			this.stats = new Stats();
			document.body.appendChild(this.stats.dom);
		}

		let manager = new ObstacleManager(this);

		const ui = document.getElementById('ui');

		// get play button (id:play)
		const playButton = document.getElementById('play');
		playButton?.addEventListener('click', () => {
			this.playing = !this.playing;

			// add hidden class to ui
			ui?.classList.add('hidden');

			this.playerManager?.resetPlayers(1);

			this.startMusic();
		});

		const playCoopButton = document.getElementById('play-coop');
		playCoopButton?.addEventListener('click', () => {
			this.playing = !this.playing;

			// add hidden class to ui
			ui?.classList.add('hidden');

			this.playerManager?.resetPlayers(2);

			this.startMusic();
		});
	}

	addProjectile(data: ProjectileData) {
		if (!this.projectileManager) return;

		this.projectileManager.addProjectile(data);
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
			let player: Player | undefined;

			if (userData1 instanceof Enemy) enemy = userData1;
			if (userData2 instanceof Enemy) enemy = userData2;

			if (userData1 instanceof Projectile) projectile = userData1;
			if (userData2 instanceof Projectile) projectile = userData2;

			if (userData1 instanceof Player) player = userData1;
			if (userData2 instanceof Player) player = userData2;

			if (enemy && projectile) {
				this.spawnParticles(projectile.shape.x, projectile.shape.y, 10, projectile.color);

				enemy.impulse(projectile.vx * 200000, -projectile.vy * 200000);
				enemy.takeDamage(projectile.damage);
				//projectile.destroy();
			}

			if (enemy && player && enemy.hitPlayer) {
				enemy.hitPlayer(player);
			}

			if (player && projectile) {
				this.spawnParticles(projectile.shape.x, projectile.shape.y, 10, projectile.color);

				player.takeDamage(projectile.damage);
				projectile.destroy();
			}
		});
	}

	spawnParticles(x: number, y: number, num: number, color: number = 0xffffff) {
		for (let i = 0; i < num; i++) {
			this.particleSystem?.createParticle(
				x,
				y,
				Math.random() * 5 + 5, // size
				color, // color
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
		this.playerManager?.update(deltaTime, this.keys);
		if (!this.playing) return;

		this.enemyManager?.update(deltaTime);

		if (Math.random() < deltaTime * 0.005) {
			this.enemyManager?.addEnemy();
		}

		this.projectileManager?.update(deltaTime);

		let player = this.playerManager?.players[0];
		if (player && player.health <= 0) {
			this.enemyManager?.killAll();
			this.projectileManager?.clearAllProjectiles();

			this.playing = false;

			const ui = document.getElementById('ui');
			ui?.classList.remove('hidden');

			const title = document.getElementById('title');
			// set inner text to "Game Over"
			if (title) title.innerText = 'Game Over';
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
