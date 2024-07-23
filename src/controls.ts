export default class Controls {
	keys: Record<string, boolean> = {};

	constructor() {
		window.addEventListener('keydown', (e) => {
			this.keys[e.key.toLowerCase()] = true;
			console.log(this.keys);
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

	get left() {
		return this.keys['a'] || this.keys['arrowleft'];
	}
	get right() {
		return this.keys['d'] || this.keys['arrowright'];
	}
	get up() {
		return this.keys['w'] || this.keys['arrowup'];
	}
	get down() {
		return this.keys['s'] || this.keys['arrowdown'];
	}
}
