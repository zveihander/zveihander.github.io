<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/ibm-plex-sans';
	import '@fontsource-variable/petrona';
	import '@fontsource/ibm-plex-mono';
	import NavDesktop from '$lib/components/NavDesktop.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<NavDesktop />
{@render children()}
