import * as PIXI from 'pixi.js';

export default class Eye {
	eyeContainer: PIXI.Container;

	base?: PIXI.Graphics;
	pupil?: PIXI.Graphics;
	highlight?: PIXI.Sprite;

	mask?: PIXI.Graphics;

	// how long one blink takes, split into four parts [close animation, closed, open animation, open]
	blinkSpeed: [number, number, number, number] = [0.1, 0.1, 0.1, 1];

	private blinkTimer: number = 0;
	private blinkState: number = 3; // Start with eyes open

	dx: number = 0;
	dy: number = 0;

	color: number;

	scale: number = 1;

	constructor(
		container: PIXI.Container,
		shiftX: number,
		shiftY: number,
		color = 0xffffff,
		scale: number = 1
	) {
		this.eyeContainer = new PIXI.Container();

		this.eyeContainer.position.set(shiftX, shiftY);

		this.scale = scale;

		container.addChild(this.eyeContainer);

		this.color = color;
		this.loadLayers();
	}

	async loadLayers() {
		const base = new PIXI.Graphics().ellipse(0, 0, 5 * this.scale, 4 * this.scale).fill(this.color); //.fill(0xe11d48);
		this.base = base;
		this.base.alpha = 0;
		this.eyeContainer.addChild(base);

		const pupil = new PIXI.Graphics().circle(0, 0, 3 * this.scale).fill(0x000000);
		this.pupil = pupil;
		this.eyeContainer.addChild(pupil);

		const mask = new PIXI.Graphics().ellipse(0, 0, 5 * this.scale, 4 * this.scale).fill(0xffffff);
		this.mask = mask;
		this.eyeContainer.addChild(mask);

		this.eyeContainer.mask = mask;
	}

	move(angle: number) {
		const newDx = Math.cos(angle);
		const newDy = Math.sin(angle);

		this.dx = this.dx * 0.9 + newDx * 0.1;
		this.dy = this.dy * 0.9 + newDy * 0.1;

		this.pupil?.position.set(this.dx * 2 * this.scale, this.dy * 2 * this.scale);
	}

	update(deltaTime: number, alpha: number) {
		if (this.base) this.base.alpha = alpha;

		deltaTime /= 1000;

		// Blink animation
		this.blinkTimer += deltaTime;

		if (this.blinkTimer >= this.blinkSpeed[this.blinkState]) {
			this.blinkTimer = 0;
			this.blinkState = (this.blinkState + 1) % 4;
		}

		if (this.mask) {
			let scale: number;
			switch (this.blinkState) {
				case 0: // Closing
					scale = 1 - this.blinkTimer / this.blinkSpeed[0];
					break;
				case 1: // Closed
					scale = 0;
					break;
				case 2: // Opening
					scale = this.blinkTimer / this.blinkSpeed[2];
					break;
				default: // Open
					scale = 1;
			}
			this.mask.scale.y = scale;
		}
	}
}