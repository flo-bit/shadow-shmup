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
