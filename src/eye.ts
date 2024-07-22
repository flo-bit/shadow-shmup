import * as PIXI from 'pixi.js';

export default class Eye {
	eyeContainer: PIXI.Container;

	base?: PIXI.Sprite;
	pupil?: PIXI.Sprite;
	highlight?: PIXI.Sprite;

	constructor(container: PIXI.Container, shiftX: number, shiftY: number) {
		this.eyeContainer = new PIXI.Container();

		//this.eyeContainer.scale.set(0.01);
		this.eyeContainer.position.set(shiftX, shiftY);

		container.addChild(this.eyeContainer);
		this.loadLayers();
	}

	async loadLayers() {
		// const texture = await PIXI.Assets.load('/eye/0.png');
		// this.base = PIXI.Sprite.from(texture);
		// this.base.anchor.set(0.5);
		// this.base.zIndex = 3;
		// this.eyeContainer.addChild(this.base);

		// const pupilTexture = await PIXI.Assets.load('/eye/1.png');
		// this.pupil = PIXI.Sprite.from(pupilTexture);
		// this.pupil.anchor.set(0.5);
		// this.pupil.zIndex = 4;
		// this.eyeContainer.addChild(this.pupil);

		// const highlightTexture = await PIXI.Assets.load('/eye/2.png');
		// this.highlight = PIXI.Sprite.from(highlightTexture);
		// this.highlight.anchor.set(0.5);
		// this.highlight.zIndex = 5;
		// this.eyeContainer.addChild(this.highlight);

		// using graphics for now
		const base = new PIXI.Graphics().ellipse(0, 0, 5, 4).fill(0xffffff);
		this.base = base;
		this.eyeContainer.addChild(base);

		const pupil = new PIXI.Graphics().circle(0, 0, 3).fill(0x000000);
		this.pupil = pupil;
		this.eyeContainer.addChild(pupil);

		//const highlight = new PIXI.Graphics().circle(0, 0, 10).fill(0xffffff);
		//this.highlight = highlight;
		//this.eyeContainer.addChild(highlight);
	}

	move(dx: number, dy: number) {
		// normalize
		const len = Math.sqrt(dx ** 2 + dy ** 2);

		this.pupil?.position.set((dx / len) * 2, (dy / len) * 2);
	}

	transparency(alpha: number) {
		if (!this.base || !this.pupil) return;

		this.base.alpha = alpha;
		//this.pupil.alpha = alpha;
		//this.highlight.alpha = alpha;
	}
}
