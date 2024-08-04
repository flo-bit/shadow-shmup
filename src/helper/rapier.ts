export function RAPIER(): typeof import('@dimforge/rapier2d') {
	// @ts-ignore
	if (!window.RAPIER) {
		throw new Error('RAPIER is not initialized yet. Make sure to call setupPhysicsWorld() first.');
	}
	// @ts-ignore
	return window.RAPIER;
}
