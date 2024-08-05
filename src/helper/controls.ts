import Game from '../app';

export default class Controls {
	keys: Record<string, boolean> = {};

	game: Game;

	deltaTouch: { x: number; y: number } | undefined = undefined;

	deadzone = 0.1;

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
		let min = 10;
		let max = 100;

		window.addEventListener('touchstart', (e) => {
			let touch = e.touches[0];
			startX = touch.clientX;
			startY = touch.clientY;

			console.log('touchstart', startX, startY);

			this.deltaTouch = { x: 0, y: 0 };
		});

		window.addEventListener('touchmove', (e) => {
			let touch = e.touches[0];
			if (startX === undefined || startY === undefined || this.deltaTouch === undefined) return;

			let dx = touch.clientX - startX;
			let dy = touch.clientY - startY;

			if (Math.abs(dx) > min) {
				this.deltaTouch.x =
					Math.max(Math.min((Math.abs(dx) - min) / (max - min), 1), 0) * (dx > 0 ? 1 : -1);
			} else {
				this.deltaTouch.x = 0;
			}

			if (Math.abs(dy) > min) {
				this.deltaTouch.y =
					Math.max(Math.min((Math.abs(dy) - min) / (max - min), 1), 0) * (dy > 0 ? 1 : -1);
			} else {
				this.deltaTouch.y = 0;
			}

			let dist = Math.hypot(dx, dy);

			if (dist > max) {
				// move startX, startY to be max pixels away from current touch
				startX += (dx / dist) * (dist - max);
				startY += (dy / dist) * (dist - max);

				console.log('moved', startX, startY);
			}
		});

		window.addEventListener('touchend', (e) => {
			this.deltaTouch = undefined;
			startX = undefined;
			startY = undefined;
		});
	}

	get playerCount() {
		return this.game.playerManager?.players.length ?? 1;
	}

	x(num: number = 0) {
		let gamepad = navigator.getGamepads()[0];
		let secondGamepad = navigator.getGamepads()[1];

		if (num === 0 && this.deltaTouch) return this.deltaTouch.x;
		if (num === 0 && gamepad)
			return Math.abs(gamepad.axes[0]) < this.deadzone ? 0 : gamepad.axes[0];
		if (num === 1 && secondGamepad)
			return Math.abs(secondGamepad.axes[0]) < this.deadzone ? 0 : secondGamepad.axes[0];

		return this.left(num) + this.right(num);
	}
	y(num: number = 0) {
		let gamepad = navigator.getGamepads()[0];
		let secondGamepad = navigator.getGamepads()[1];

		if (num === 0 && this.deltaTouch) return this.deltaTouch.y;
		if (num === 0 && gamepad)
			return Math.abs(gamepad.axes[1]) < this.deadzone ? 0 : gamepad.axes[1];
		if (num === 1 && secondGamepad)
			return Math.abs(secondGamepad.axes[1]) < this.deadzone ? 0 : secondGamepad.axes[1];

		return this.up(num) + this.down(num);
	}

	left(num: number = 0) {
		if (this.playerCount === 1) return this.keys['a'] || this.keys['arrowleft'] ? -1 : 0;

		if (num === 0) return this.keys['a'] ? -1 : 0;
		if (num === 1) return this.keys['arrowleft'] ? -1 : 0;

		return 0;
	}
	right(num: number = 0) {
		if (this.playerCount === 1) return this.keys['d'] || this.keys['arrowright'] ? 1 : 0;

		if (num === 0) return this.keys['d'] ? 1 : 0;
		if (num === 1) return this.keys['arrowright'] ? 1 : 0;

		return 0;
	}
	up(num: number = 0) {
		if (this.playerCount === 1) return this.keys['w'] || this.keys['arrowup'] ? -1 : 0;

		if (num === 0) return this.keys['w'] ? -1 : 0;
		if (num === 1) return this.keys['arrowup'] ? -1 : 0;

		return 0;
	}
	down(num: number = 0) {
		if (this.playerCount === 1) return this.keys['s'] || this.keys['arrowdown'] ? 1 : 0;

		if (num === 0) return this.keys['s'] ? 1 : 0;
		if (num === 1) return this.keys['arrowdown'] ? 1 : 0;

		return 0;
	}

	rumble(num: number = 0, strength: number = 0.5) {
		let gamepad = navigator.getGamepads()[num];

		if (!gamepad) return;

		strength = Math.min(1, Math.max(0, strength));
		gamepad.vibrationActuator?.playEffect('dual-rumble', {
			duration: 100,
			strongMagnitude: strength,
			weakMagnitude: strength
		});
	}
}
