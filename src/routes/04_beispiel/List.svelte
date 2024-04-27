<script lang="ts">
	import type { Snippet } from 'svelte';
	import { notizen, type Notiz } from './notizen.svelte';

	let { item, leer }: { item: Snippet<[Notiz]>; leer: Snippet } = $props();
</script>

<div class="flex flex-col gap-2">
	{#each notizen.notizen as notiz}
		{@render item(notiz)}
	{:else}
		{@render leer()}
	{/each}
</div>
