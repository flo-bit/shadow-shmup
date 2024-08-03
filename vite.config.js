import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [wasm()],
	build: {
		target: 'esnext'
	},
	//base: '/shadow-shmup/' // for github deployment
	base: '' // for itch.io deployment
});
