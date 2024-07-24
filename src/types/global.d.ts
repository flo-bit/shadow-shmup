// src/types/global.d.ts
import * as RAPIER from '@dimforge/rapier2d';

export {};

declare global {
	interface Window {
		RAPIER: RAPIER;
		world: any;
	}
}
