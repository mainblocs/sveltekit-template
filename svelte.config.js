import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare-workers';
// import adapter from '@sveltejs/adapter-cloudflare';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$src: './src',
			'$src/*': './src/*',
			$lib: './src/lib',
			'$lib/*': './src/lib/*',
			$components: './src/components',
			'$components/*': './src/components/*'
		}
	},

	preprocess: [vitePreprocess({})]
};

export default config;
