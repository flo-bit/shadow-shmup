export function RAPIER(): typeof import('@dimforge/rapier2d') {
	if (!window.RAPIER) {
		throw new Error('RAPIER is not initialized yet. Make sure to call setupPhysicsWorld() first.');
	}
	return window.RAPIER;
}
