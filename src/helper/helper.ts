export function blendColors(color1: number, color2: number, blend: number): number {
	// Extract RGB components
	let r1 = (color1 >> 16) & 0xff;
	let g1 = (color1 >> 8) & 0xff;
	let b1 = color1 & 0xff;

	let r2 = (color2 >> 16) & 0xff;
	let g2 = (color2 >> 8) & 0xff;
	let b2 = color2 & 0xff;

	// Blend each component
	let r = Math.round(r1 + (r2 - r1) * blend);
	let g = Math.round(g1 + (g2 - g1) * blend);
	let b = Math.round(b1 + (b2 - b1) * blend);

	// Recombine blended components into hexadecimal
	return (r << 16) | (g << 8) | b;
}

import * as PIXI from 'pixi.js';

export function createNoiseSprite(width: number, height: number): PIXI.Sprite {
	// Create an empty PIXI texture with the given width and height
	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext('2d')!;

	// Fill the canvas with random noise
	const imageData = ctx.createImageData(width, height);
	const data = imageData.data;
	for (let i = 0; i < data.length; i += 4) {
		data[i] = 0;
		data[i + 1] = 0;
		data[i + 2] = 0;
		data[i + 3] = Math.floor(Math.random() * 256); // Alpha
	}
	ctx.putImageData(imageData, 0, 0);

	// Create a PIXI texture from the canvas
	const texture = PIXI.Texture.from(canvas);
	// Create a sprite from the texture
	const sprite = new PIXI.Sprite(texture);

	// remove canvas
	canvas.remove();

	return sprite;
}