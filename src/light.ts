import * as PIXI from 'pixi.js';
import { RAPIER } from './rapier';
import Game from './app';
import { RigidBody } from '@dimforge/rapier2d';
// import 'pixi.js/advanced-blend-modes';

export type LightOptions = {
	x?: number;
	y?: number;
	scale?: number;
	color?: number;
	collisionGroups?: number;
	lifetime?: number;

	alpha?: number;

	detail?: number;

	flicker?: boolean;
};

export class Light {
	game: Game;
	lightContainer: PIXI.Container;
	shadow: PIXI.Graphics;
	light?: PIXI.Sprite;

	_scale: number = 1;

	color: number = 0xffffff;

	collisionGroups: number = 0x000a000a;

	fade: boolean = false;
	lifetime: number = 10000;

	destroyed: boolean = false;

	_alpha: number = 1;

	flicker: boolean = true;

	rigidBody?: RigidBody;

	detail: number = 120;

	constructor(game: Game, options: LightOptions) {
		this.game = game;

		this.lightContainer = new PIXI.Container();
		this.shadow = new PIXI.Graphics();

		this.lightContainer.addChild(this.shadow);

		if (options.x) this.x = options.x;
		if (options.y) this.y = options.y;
		if (options.scale) this.scale = options.scale;
		if (options.color) this.color = options.color;
		if (options.collisionGroups) this.collisionGroups = options.collisionGroups;
		if (options.lifetime) {
			this.fade = true;
			this.lifetime = options.lifetime;
		}
		if (options.alpha) this.alpha = options.alpha;
		if (options.detail) this.detail = options.detail;
		if (options.flicker !== undefined) this.flicker = options.flicker;

		this.createLight();

		this.game.container.addChild(this.lightContainer);
	}

	get x() {
		return this.lightContainer.x;
	}
	set x(value) {
		this.lightContainer.x = value;

		this.rigidBody?.setTranslation({ x: value, y: -this.y }, true);
	}

	get y() {
		return this.lightContainer.y;
	}
	set y(value) {
		this.lightContainer.y = value;

		this.rigidBody?.setTranslation({ x: this.x, y: -value }, true);
	}

	get scale() {
		return this._scale;
	}

	set scale(value) {
		this._scale = value;

		if (this.light) {
			this.light.scale.set(value);
		}
	}

	get alpha() {
		return this._alpha;
	}

	set alpha(value) {
		this._alpha = value;

		if (this.light) {
			this.light.alpha = value;
		}
	}

	async createLight() {
		const texture = await PIXI.Assets.load('./light.png');
		this.light = PIXI.Sprite.from(texture);
		this.light.tint = this.color;
		this.light.anchor.set(0.5);
		this.light.scale.set(this._scale);
		this.light.zIndex = -1;
		this.light.alpha = this._alpha;

		this.lightContainer.addChild(this.light);

		// this.lightContainer.blendMode = 'add';

		this.light.mask = this.shadow;

		const rigidBodyDesc = RAPIER()
			.RigidBodyDesc.kinematicPositionBased()
			.setTranslation(this.x, -this.y)
			.lockRotations();
		this.rigidBody = this.game.world.createRigidBody(rigidBodyDesc);

		const colliderDesc = RAPIER().ColliderDesc.cuboid(10, 10).setCollisionGroups(0x10001000);
		this.game.world.createCollider(colliderDesc, this.rigidBody);

		this.rigidBody.userData = this;
	}

	drawShadow() {
		// ray cast around the player to create a shadow
		this.shadow.clear();

		const rays = this.detail;

		const angleStep = (Math.PI * 2) / rays;
		const rayLength = 100000;

		let firstPoint;

		for (let i = 0; i < rays; i++) {
			const angle = i * angleStep;

			const ray = new (RAPIER().Ray)(
				new (RAPIER().Vector2)(this.x, -this.y),
				new (RAPIER().Vector2)(Math.cos(angle), Math.sin(angle))
			);

			const hit = this.game.world.castRay(ray, rayLength, true, undefined, this.collisionGroups);

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

			if (i === rays - 1 && firstPoint) {
				this.shadow.lineTo(firstPoint.x, firstPoint.y);
			}
		}
		this.shadow.fill(0);
	}

	update(deltaTime: number) {
		if (this.destroyed) return;

		this.drawShadow();

		if (this.flicker && this.light) {
			this.light.alpha = this._alpha + (Math.random() - 0.5) * 0.03;
			this.light.scale.set(this._scale + Math.random() * 0.1);

			if (Math.random() < 1 / deltaTime) {
				this.light.alpha = this._alpha * 0.5;
			}
		}
	}

	destroy() {
		if (this.destroyed) return;

		this.destroyed = true;
		this.lightContainer.destroy();
		if (this.rigidBody) this.game.world.removeRigidBody(this.rigidBody);
	}
}
