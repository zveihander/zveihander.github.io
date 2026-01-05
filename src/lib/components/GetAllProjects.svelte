<script lang="ts">
	const projects = [
		{
			name: 'rstatus',
			language: 'rust',
			url: 'https://git.evanalvarez.dev/rstatus',
			description: 'minimal, hackable status bar for i3/sway',
			openSource: true,
			openSourceLink: 'https://git.evanalvarez.dev/rstatus'
		}
	];
</script>

<ul>
	{#each projects as project}
		<li class="text-md text-md lg:text-md py-[1rem] font-sans">
			<div class="flex flex-col gap-x-2 sm:flex-row sm:flex-wrap">
				<a class="text-gruvbox-green hover:underline" href={project.url}>
					{project.name}
				</a>
				<span class="hidden sm:inline">::</span>
				<p>{project.language}</p>
				<span class="hidden sm:inline">::</span>
				<p>{project.description}</p>
				<span class="hidden sm:inline">::</span>
				{#if project.openSource}
					<a class="text-gruvbox-green hover:underline" href={project.openSourceLink}>
						view source
					</a>
				{:else}
					<p>closed source ):</p>
				{/if}
			</div>
		</li>
	{/each}
</ul>
