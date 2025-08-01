import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'triver-uk',
				project: 'redirect-capture-poc'
			}
		}),
		sveltekit()
	],
	optimizeDeps: { exclude: ["fsevents"] },
});
