<script>
	let { slug, publicKeyUrl = '/gpg/pubkey.asc' } = $props();

	const signatureUrl = `https://git.evanalvarez.dev/evanalvarez.dev/plain/src/routes/writings/posts/${slug}/signature.asc`;
	const markdownUrl = $derived(
		`https://git.evanalvarez.dev/evanalvarez.dev/plain/src/routes/writings/posts/${slug}/+page.md`
	);
</script>

<div class="mt-12 border-t border-gruvbox-fg/20 pt-6 text-sm text-gruvbox-fg/70">
	<p>
		🔐 This post is PGP signed. Verify it with my
		<a href={publicKeyUrl} class="text-gruvbox-green hover:underline">public key</a>
		and this post's
		<a href={markdownUrl} class="text-gruvbox-green hover:underline">markdown file</a>
		and
		<a href={signatureUrl} class="text-gruvbox-green hover:underline">signature</a>.
	</p>
</div>
