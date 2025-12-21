<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/ibm-plex-sans/wght.css';
	import '@fontsource-variable/petrona/wght.css';
	import '@fontsource/ibm-plex-mono/400.css';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Evan Alvarez</title>
	<meta name="description" content="evan's corner of the internet" />
	<meta name="keywords" content="programming, coding, technology, blog, portfolio" />
</svelte:head>
<Nav />
{@render children()}
