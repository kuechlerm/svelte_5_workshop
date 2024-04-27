<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		text = 'hallo',
		onclick,
		on_text_leer,
		children
	}: {
		text?: string;
		onclick: () => void;
		on_text_leer: () => void;
		children: Snippet;
	} = $props();

	$effect(() => {
		if (text === '') on_text_leer();
	});
</script>

<div class="bg-blue-400 p-4">
	<div class="underline" {onclick} role="none">{text}</div>

	{#if children}
		<div>{@render children()}</div>
	{/if}
</div>
