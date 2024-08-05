export function RAPIER(): typeof import('@dimforge/rapier2d') {
	// @ts-ignore
	if (!window.RAPIER) {
		throw new Error('RAPIER is not initialized yet. Make sure to call setupPhysicsWorld() first.');
	}
	// @ts-ignore
	return window.RAPIER;
}

export const COLLISION_GROUPS = {
	PLAYER: 0x0001,
	ENEMY: 0x0002,
	PROJECTILE: 0x0004,
	ITEM: 0x0008,
	LIGHT: 0x0010,
	ALL: 0xffff
};