import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math';
import { codeToHtml } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],

	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			highlight: {
				highlighter: async (code, lang) => {
					const html = await codeToHtml(code, {
						lang: lang || 'text',
						theme: 'gruvbox-dark-medium',
					});
					return `{@html \`${html}\` }`;
				},
			},
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatexSvelte],
		}),
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: true,
			strict: true,
		}),
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			entries: ['*'],
		},
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ['self'],
				'style-src': ['self', 'unsafe-inline'],
				'font-src': ['self', 'data:'],
			},
		},
        inlineStyleThreshold: 51200,
	},
};

export default config;
