<script>
	import PGPSig from '$lib/components/PGPSig.svelte';
	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="/katex/katex.min.css" />
</svelte:head>

<div class="min-h-screen bg-gruvbox-bg">
	<div class="mx-auto max-w-screen-xl px-6">
		<article class="prose-gruvbox">
			{@render children()}

			{#if data.slug}
				<PGPSig slug={data.slug} fingerprint="6CD0 A39C 8DC3 8B86 67AB  FB42 D0EA F151 2B78 016C" />
			{/if}
		</article>
	</div>
</div>
