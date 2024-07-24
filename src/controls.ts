import Game from './app';

export default class Controls {
	keys: Record<string, boolean> = {};

	game: Game;

	constructor(game: Game) {
		this.game = game;

		window.addEventListener('keydown', (e) => {
			this.keys[e.key.toLowerCase()] = true;
		});
		window.addEventListener('keyup', (e) => {
			this.keys[e.key.toLowerCase()] = false;
		});

		window.addEventListener('blur', () => {
			this.keys = {};
		});

		let startX: number | undefined, startY: number | undefined;
		// mobile controls, if touch is moved at least 10 pixels in any direction, it will be considered
		let min = 20;
		window.addEventListener('touchstart', (e) => {
			let touch = e.touches[0];
			startX = touch.clientX;
			startY = touch.clientY;
		});

		window.addEventListener('touchmove', (e) => {
			let touch = e.touches[0];
			if (startX === undefined || startY === undefined) return;

			let dx = touch.clientX - startX;
			let dy = touch.clientY - startY;

			if (Math.abs(dx) > min) {
				this.keys[dx > 0 ? 'd' : 'a'] = true;
			} else {
				this.keys['d'] = false;
				this.keys['a'] = false;
			}

			if (Math.abs(dy) > min) {
				this.keys[dy > 0 ? 's' : 'w'] = true;
			} else {
				this.keys['s'] = false;
				this.keys['w'] = false;
			}
		});

		window.addEventListener('touchend', (e) => {
			this.keys['w'] = false;
			this.keys['a'] = false;
			this.keys['s'] = false;
			this.keys['d'] = false;
		});
	}

	get playerCount() {
		return this.game.playerManager?.players.length ?? 1;
	}

	left(num: number = 0) {
		let gamepad = navigator.getGamepads()[0];
		let secondGamepad = navigator.getGamepads()[1];

		if (this.playerCount === 1)
			return this.keys['a'] || this.keys['arrowleft'] || (gamepad && gamepad.axes[0] < -0.5);

		if (num === 0) return this.keys['a'] || (gamepad && gamepad.axes[0] < -0.5);
		if (num === 1) return this.keys['arrowleft'] || (secondGamepad && secondGamepad.axes[0] < -0.5);
	}
	right(num: number = 0) {
		let gamepad = navigator.getGamepads()[0];
		let secondGamepad = navigator.getGamepads()[1];
		if (this.playerCount === 1)
			return this.keys['d'] || this.keys['arrowright'] || (gamepad && gamepad.axes[0] > 0.5);

		if (num === 0) return this.keys['d'] || (gamepad && gamepad.axes[0] > 0.5);
		if (num === 1) return this.keys['arrowright'] || (secondGamepad && secondGamepad.axes[0] > 0.5);
	}
	up(num: number = 0) {
		let gamepad = navigator.getGamepads()[0];
		let secondGamepad = navigator.getGamepads()[1];
		if (this.playerCount === 1)
			return this.keys['w'] || this.keys['arrowup'] || (gamepad && gamepad.axes[1] < -0.5);

		if (num === 0) return this.keys['w'] || (gamepad && gamepad.axes[1] < -0.5);
		if (num === 1) return this.keys['arrowup'] || (secondGamepad && secondGamepad.axes[1] < -0.5);
	}
	down(num: number = 0) {
		let gamepad = navigator.getGamepads()[0];
		let secondGamepad = navigator.getGamepads()[1];
		if (this.playerCount === 1)
			return this.keys['s'] || this.keys['arrowdown'] || (gamepad && gamepad.axes[1] > 0.5);

		if (num === 0) return this.keys['s'] || (gamepad && gamepad.axes[1] > 0.5);
		if (num === 1) return this.keys['arrowdown'] || (secondGamepad && secondGamepad.axes[1] > 0.5);
	}
}
