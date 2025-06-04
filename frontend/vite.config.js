import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	root: './', // Ensure this points to your project root
	build: {
		rollupOptions: {
			input: '/index.html' // Explicitly set if needed
		}
	},
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000",
			},
		},
	},
});
