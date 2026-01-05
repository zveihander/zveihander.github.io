<script lang="ts">
	import GetAllProjects from '$lib/components/GetAllProjects.svelte';
</script>

<div class="min-h-screen bg-gruvbox-bg">
	<div class="mx-auto max-w-screen-xl px-6">
		<div class="flex items-center justify-start">
			<div class="pt-[5rem] font-sans text-sm text-gruvbox-fg lg:text-lg">
				<h1 class="font-serif text-3xl font-bold lg:text-5xl">projects</h1>
				<a href="/" class="text-gruvbox-green hover:underline lg:text-[15px]">home</a>
				::
				<a
					href="https://git.evanalvarez.dev"
					class="text-gruvbox-green hover:underline lg:text-[15px]">cgit</a
				>
				::
				<a
					href="https://github.com/zveihander"
					class="text-gruvbox-green hover:underline lg:text-[15px]">github</a
				>
			</div>
		</div>
		<div class="text-md pt-6 font-sans text-gruvbox-fg">
			While I do use GitHub, I prefer to post my personal projects on my <a
				href="https://git.evanalvarez.dev"
				class="text-gruvbox-green hover:underline lg:text-[15px]">cgit instance</a
			>. Using a private git server helps to promote a decentralized internet. If you want to use
			any of my projects, I recommend you clone from there.
		</div>
		<div class="text-md pt-4 text-gruvbox-fg lg:text-lg">
			<GetAllProjects />
		</div>
	</div>
</div>
