import * as PIXI from 'pixi.js';
import { type World, EventQueue } from '@dimforge/rapier2d';
import { RAPIER } from './helper/rapier.js';

import Stats from 'stats.js';

import { AdvancedBloomFilter } from 'pixi-filters';
import { sound } from '@pixi/sound';

import ParticleSystem from './visuals/particles.js';
import { Projectile } from './weapons/projectile.js';
import Enemy from './enemies/enemy.js';
import Player from './player/player.js';
import EnemyManager from './enemies/enemy-manager.js';

import PlayerManager from './player/player-manager.js';
import ProjectileManager, { ProjectileData } from './weapons/projectile-manager.js';

import Controls from './helper/controls.js';
import { ObstacleManager } from './map/obstacle-manager.js';
import { WaveManager } from './wave.js';
import { Item, ItemOptions } from './coins/coin.js';
import { ItemManager } from './coins/coin-manager.js';
import { LightManager } from './visuals/light-manager.js';
import { createNoiseSprite } from './helper/helper.js';
import { UpgradeManager } from './upgrades/upgrade-manager.js';
import { Weapon } from './weapons/weapon.js';
import { TextManager } from './visuals/text-manager.js';
import { VignetteFilter } from './helper/vignette.js';

export default class Game {
	container: PIXI.Container;
	mainContainer: PIXI.Container;
	world!: World;

	keys: Record<string, boolean> = {};

	debugGraphics?: PIXI.Graphics;

	enemyManager?: EnemyManager;
	playerManager?: PlayerManager;
	waveManager?: WaveManager;

	itemManager: ItemManager;

	upgradeManager: UpgradeManager;

	lightManager: LightManager;

	projectileManager?: ProjectileManager;

	particleSystem?: ParticleSystem;

	obstacleManager: ObstacleManager;

	textManager: TextManager;

	debug: boolean = false;

	showStats: boolean = false;

	stats?: Stats;

	playing: boolean = false;

	paused: boolean = false;

	controls: Controls;

	scaleMultiplier: number = 1;

	scale: number = 1;

	invincible = false;

	playingTime = 0;

	startWave = 0;

	minWidth = 700;
	minHeight = 900;

	vignetteFilter?: VignetteFilter;

	constructor() {
		this.setup();

		this.mainContainer = new PIXI.Container();
		this.container = new PIXI.Container();

		this.controls = new Controls(this);
		this.obstacleManager = new ObstacleManager(this);
		this.itemManager = new ItemManager(this);
		this.lightManager = new LightManager(this);
		this.upgradeManager = new UpgradeManager(this);
		this.textManager = new TextManager(this);

		this.loadSounds();
	}

	loadSounds() {
		sound.add('music-intro', {
			url: './sounds/music-intro.mp3',
			volume: 0.3
		});
		sound.add('music', { url: './sounds/music.mp3', loop: true, volume: 0.3 });

		sound.add('shmup-solo', { url: './sounds/shmup-solo.mp3', volume: 0.5 });
		sound.add('shmup-coop', { url: './sounds/shmup-coop.mp3', volume: 0.5 });

		sound.add('gun-shoot', { url: './sounds/gun-shoot.mp3', volume: 0.2 });
		sound.add('player-hit', { url: './sounds/player-hit.mp3', volume: 0.7 });
		sound.add('player-dying', { url: './sounds/player-dying.mp3', volume: 0.3 });

		sound.add('coin', { url: './sounds/coin.mp3', volume: 0.2 });

		sound.add('enemy-hit', { url: './sounds/enemy-hit.mp3', volume: 0.1 });
		sound.add('enemy-exploding', { url: './sounds/enemy-exploding.mp3', volume: 0.2 });
		sound.add('enemy-shooting', { url: './sounds/enemy-shooting.mp3', volume: 0.07 });
	}

	async setupPhysicsWorld() {
		const RAPIER = await import('@dimforge/rapier2d');

		let gravity = new RAPIER.Vector2(0.0, 0.0);
		let world = new RAPIER.World(gravity);

		// @ts-ignore
		window.RAPIER = RAPIER;
		this.world = world;
	}

	startMusic() {
		sound.stopAll();

		sound.play('music-intro', () => {
			sound.play('music');
		});
	}

	createStats() {
		this.stats = new Stats();
		document.body.appendChild(this.stats.dom);
	}

	removeStats() {
		if (this.stats) {
			document.body.removeChild(this.stats.dom);
			this.stats = undefined;
		}
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
			bloomScale: 1.3,
			blur: 4
		});
		this.vignetteFilter = new VignetteFilter({
			color: 0xff0000,
			strength: 0.5
		});
		app.stage.filters = [this.vignetteFilter, bloomFilter];

		// add the canvas to the HTML document
		document.body.appendChild(app.canvas);

		// add a container
		app.stage.addChild(this.mainContainer);
		this.mainContainer.addChild(this.container);

		this.mainContainer.position.set(window.innerWidth / 2, window.innerHeight / 2);
		// scale the container
		this.scale = Math.min(window.innerWidth / this.minWidth, window.innerHeight / this.minHeight);
		this.mainContainer.scale.set(this.scale * this.scaleMultiplier);

		// add a resize event listener
		window.addEventListener('resize', () => {
			app.renderer.resize(window.innerWidth, window.innerHeight);

			this.mainContainer.position.set(window.innerWidth / 2, window.innerHeight / 2);
			this.scale = Math.min(window.innerWidth / this.minWidth, window.innerHeight / this.minHeight);
			this.mainContainer.scale.set(this.scale * this.scaleMultiplier);
		});

		let noise = createNoiseSprite(2000, 2000);
		noise.anchor.set(0.5);
		noise.scale.set(1);
		noise.alpha = 0.2;
		noise.zIndex = 100;
		this.mainContainer.addChild(noise);

		app.ticker.add((ticker) => {
			if (this.paused) return;
			if (this.stats) this.stats.begin();

			let alpha = Math.sin(this.playingTime * 0.001) * 0.5 + 0.5;

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
			if (position && this.playing) {
				position.x = -position.x;
				position.y = -position.y;

				const interpolationSpeed = 0.05;
				const interpolationFactor = 1 - Math.pow(1 - interpolationSpeed, deltaTime / (1000 / 60));

				this.container.x += (position.x - this.container.x) * interpolationFactor;
				this.container.y += (position.y - this.container.y) * interpolationFactor;
			}

			if (this.stats) this.stats.end();
		});

		this.playerManager = new PlayerManager(this);
		this.enemyManager = new EnemyManager(this);
		this.waveManager = new WaveManager(this, this.startWave);

		this.projectileManager = new ProjectileManager(this);

		window.addEventListener('keydown', this.handleKeyDown.bind(this));
		window.addEventListener('keyup', this.handleKeyUp.bind(this));

		if (this.debug || this.showStats) {
			this.stats = new Stats();
			document.body.appendChild(this.stats.dom);
		}

		const ui = document.getElementById('ui');

		// get play button (id:play)
		const playButton = document.getElementById('play');
		playButton?.addEventListener('click', () => {
			this.playing = !this.playing;

			// add hidden class to ui
			ui?.classList.add('hidden');

			this.playerManager?.resetPlayers(1);

			this.startMusic();

			this.playingTime = 0;

			sound.play('shmup-solo');
		});

		const playCoopButton = document.getElementById('play-coop');
		playCoopButton?.addEventListener('click', () => {
			this.playing = !this.playing;

			// add hidden class to ui
			ui?.classList.add('hidden');

			this.playerManager?.resetPlayers(2);

			this.startMusic();

			this.playingTime = 0;

			sound.play('shmup-coop');
		});
	}

	dropItem(options: ItemOptions) {
		this.itemManager.addItem(options);
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
			let item: Item | undefined;
			let weapon: Weapon | undefined;

			if (userData1 instanceof Enemy) enemy = userData1;
			if (userData2 instanceof Enemy) enemy = userData2;

			if (userData1 instanceof Projectile) projectile = userData1;
			if (userData2 instanceof Projectile) projectile = userData2;

			if (userData1 instanceof Player) player = userData1;
			if (userData2 instanceof Player) player = userData2;

			if (userData1 instanceof Item) item = userData1;
			if (userData2 instanceof Item) item = userData2;

			if (userData1 instanceof Weapon) weapon = userData1;
			if (userData2 instanceof Weapon) weapon = userData2;

			if (enemy && projectile) {
				this.spawnParticles(projectile.shape.x, projectile.shape.y, 10, projectile.color);

				this.textManager.addText({
					x: enemy.x,
					y: enemy.y,
					color: projectile.color,
					text: Math.round(Math.min(projectile.damage, enemy.health)).toString()
				});

				enemy.impulse(projectile.vx * 200000, -projectile.vy * 200000);
				enemy.takeDamage(projectile.damage);

				projectile.piercing--;
				if (projectile.piercing < 0) projectile.destroy();
			}

			if (enemy && weapon) {
				this.textManager.addText({
					x: enemy.x,
					y: enemy.y,
					color: weapon.color,
					text: Math.round(Math.min(weapon.damage, enemy.health)).toString()
				});

				this.spawnParticles(weapon.x, weapon.y, 50, weapon.color);

				enemy.takeDamage(weapon.damage);
			}

			if (enemy && player && enemy.hitPlayer) {
				enemy.hitPlayer(player);
			}

			if (player && !player.dead && projectile && !this.invincible) {
				this.spawnParticles(projectile.shape.x, projectile.shape.y, 10, projectile.color);

				player.takeDamage(projectile.damage);
				projectile.destroy();
			}

			if (player && item) {
				item.pickup(player);

				sound.play('coin');
			}

			if (projectile) {
				projectile.onHit();
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

		this.playingTime += deltaTime;

		this.obstacleManager.update(deltaTime);

		if (this.playing) this.enemyManager?.update(deltaTime);

		this.itemManager.update(deltaTime);

		this.lightManager.update(deltaTime);

		this.textManager.update(deltaTime);

		if (this.invincible) {
			for (let players of this.playerManager?.players ?? []) {
				players.health = players._maxHealth;
			}
		}

		let timeSinceLastDamage = this.playerManager?.smallestTimeSinceLastDamage();
		if (timeSinceLastDamage !== undefined && this.vignetteFilter && timeSinceLastDamage < 250) {
			this.vignetteFilter.alpha = (0.5 - timeSinceLastDamage / 500) * 0.5;
		} else if (this.vignetteFilter) {
			this.vignetteFilter.alpha = 0;
		}

		if (this.upgradeManager.canAdvance()) {
			this.waveManager?.nextWave();
			this.upgradeManager.reset();

			this.paused = this.upgradeManager.showUpgradeMenu();
		}

		/*
		let playerManager = this.playerManager;
		if (playerManager) {
			let timeSinceLastDamage = playerManager.smallestTimeSinceLastDamage();
			if (timeSinceLastDamage < 150) {
				this.container.alpha = timeSinceLastDamage / 300;
			} else {
				this.container.alpha = 1;
			}
		}*/

		// if (Math.random() < deltaTime * 0.006) {
		// 	this.enemyManager?.addEnemy();
		// }
		if (this.playing) this.waveManager?.update(deltaTime);

		const wave = this.waveManager?.getCurrentWave();
		const waveUI = document.getElementById('wave');
		const waveText = document.getElementById('wave-text');

		if (wave && !wave.isActive && waveText && this.playing) {
			waveUI?.classList.remove('hidden');
			waveText.innerText = `Wave ${wave.index + 1}`;
		} else {
			waveUI?.classList.add('hidden');
		}

		this.projectileManager?.update(deltaTime);

		if (this.playerManager?.allDead()) {
			this.gameOver();
		}

		if (this.debug || this.showStats) {
			// get debug text
			let debugText = document.getElementById('debug');
			if (debugText) {
				debugText.innerText = `enemies: ${this.enemyManager?.enemies.length ?? 0}`;
			}
		}
	}

	gameOver() {
		this.enemyManager?.killAll();
		this.projectileManager?.clearAllProjectiles();
		this.itemManager.destroyAll();

		this.playing = false;

		const ui = document.getElementById('ui');
		ui?.classList.remove('hidden');

		const title = document.getElementById('title');
		// set inner text to "Game Over"
		if (title) title.innerText = 'Game Over';

		this.waveManager = new WaveManager(this, -1);

		let counter = document.getElementById('counter');
		if (counter) counter.innerText = '';

		this.upgradeManager.resetAll();
	}

	handleKeyDown(e: KeyboardEvent) {
		this.keys[e.key.toLowerCase()] = true;

		if (e.key.toLowerCase() === 'f') {
			// full screen
			const elem = document.documentElement;
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			}
		}

		if (e.key.toLowerCase() === 'p') {
			this.debug = !this.debug;
			this.debugGraphics?.clear();

			let debugText = document.getElementById('debug');
			if (this.debug) {
				if (debugText) debugText.classList.remove('hidden');
				this.createStats();
			} else {
				if (debugText) debugText.classList.add('hidden');
				if (!this.showStats) this.removeStats();
			}
		}
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
	}
}

const game = new Game();
