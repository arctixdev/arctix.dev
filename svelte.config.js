import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
// was "@sveltejs/adapter-auto"

const dev = 'production' === 'development';

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		csp: {
			mode: "hash",
			directives: { "script-src": ["self"] },
		},
		paths: {
			base: dev ? '' : ''
		}
		// hydrate the <div id="svelte"> element in src/app.html
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
