import * as PIXI from 'pixi.js';

interface ParticleSprite extends PIXI.Sprite {
	speedX: number;
	speedY: number;
	age: number;
	maxAge: number;
	initialSize: number;
}

export default class ParticleSystem {
	private app: PIXI.Application;
	private maxParticles: number;
	public container: PIXI.Container;
	private particles: ParticleSprite[];
	private particlePool: ParticleSprite[];
	private baseGraphics: PIXI.Graphics;
	private baseTexture: PIXI.Texture;

	constructor(app: PIXI.Application, maxParticles: number = 5000) {
		this.app = app;
		this.maxParticles = maxParticles;
		this.container = new PIXI.Container();
		this.container.zIndex = 10;
		this.particles = [];
		this.particlePool = [];
		this.baseGraphics = new PIXI.Graphics();
		this.baseGraphics.rect(0, 0, 1, 1).fill(0xffffff);
		this.baseTexture = this.app.renderer.generateTexture(this.baseGraphics);
	}

	createParticle(
		x: number,
		y: number,
		size: number,
		color: number,
		alpha: number,
		speedX: number,
		speedY: number,
		maxAge: number
	): ParticleSprite | null {
		let particle: ParticleSprite;
		if (this.particlePool.length > 0) {
			particle = this.particlePool.pop()!;
		} else if (this.particles.length < this.maxParticles) {
			particle = new PIXI.Sprite(this.baseTexture) as ParticleSprite;
		} else {
			return null;
		}

		particle.x = x;
		particle.y = y;
		particle.width = particle.height = size;
		particle.tint = color;
		particle.alpha = alpha;
		particle.speedX = speedX;
		particle.speedY = speedY;
		particle.age = 0;
		particle.maxAge = maxAge;
		particle.initialSize = size;

		this.container.addChild(particle);
		this.particles.push(particle);

		return particle;
	}

	removeParticle(particle: ParticleSprite): void {
		const index = this.particles.indexOf(particle);
		if (index !== -1) {
			this.particles.splice(index, 1);
			this.container.removeChild(particle);
			this.particlePool.push(particle);
		}
	}

	update(delta: number): void {
		console.log('update particles', this.particles.length);
		for (let i = this.particles.length - 1; i >= 0; i--) {
			const particle = this.particles[i];
			particle.x += particle.speedX * delta;
			particle.y += particle.speedY * delta;
			particle.age += delta;

			// Shrink the particle
			const lifeRatio = 1 - particle.age / particle.maxAge;
			particle.width = particle.height = particle.initialSize * lifeRatio;

			// Remove particle if it's too old or off-screen
			if (particle.age >= particle.maxAge) {
				this.removeParticle(particle);
			}
		}
	}
}
