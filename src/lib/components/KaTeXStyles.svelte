<script>
	import { onMount, onDestroy } from 'svelte';

	let linkElement;

	onMount(() => {
		if (!document.getElementById('katex-css')) {
			linkElement = document.createElement('link');
			linkElement.id = 'katex-css';
			linkElement.rel = 'stylesheet';
			linkElement.href = '/katex/katex.min.css';
			document.head.appendChild(linkElement);
		}
	});

	onDestroy(() => {
		if (linkElement && linkElement.parentNode) {
			linkElement.parentNode.removeChild(linkElement);
		}
	});
</script>
