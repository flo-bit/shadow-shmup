// src/types/global.d.ts

export {};

declare global {
	interface Window {
		container: PIXI.Container;
		game: Game;
		RAPIER: any;
		world: any;
	}
}
