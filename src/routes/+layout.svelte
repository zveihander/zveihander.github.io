<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource/ibm-plex-sans/latin-400.css';
	import '@fontsource/ibm-plex-sans/latin-700.css';
	import '@fontsource/ibm-plex-sans/latin-400-italic.css';
	import '@fontsource/ibm-plex-sans/latin-700-italic.css';
	import '@fontsource/petrona/latin-400.css';
	import '@fontsource/petrona/latin-700.css';
	import '@fontsource/ibm-plex-mono/latin-400.css';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>evan alvarez</title>
	<meta name="description" content="evan's corner of the internet" />
	<meta name="keywords" content="programming, coding, technology, blog, portfolio" />
	<meta name="theme-color" content="#282828" />

	<meta
		http-equiv="Content-Security-Policy"
		content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self'; img-src 'self' https: data:; object-src 'none'; base-uri 'self'"
	/>
	<meta http-equiv="Referrer-Policy" content="no-referrer-when-downgrade" />
</svelte:head>

<header role="navigation">
	<Nav />
</header>

<main>
	{@render children()}
</main>
