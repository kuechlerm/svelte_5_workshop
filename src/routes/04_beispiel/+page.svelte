<script lang="ts">
	import Card from './Card.svelte';
	import List from './List.svelte';
	import { notizen } from './notizen.svelte';

	let text = '';
</script>

<div class="space-y-4 p-4">
	<h1 class="text-xl">Svelte 5 Workshop</h1>

	<div class="flex items-center gap-2">
		<div class="">Neue Notiz</div>
		<input class="border border-black p-1" type="text" bind:value={text} />
		<button on:click={() => notizen.add(text)}>+</button>
	</div>

	<h2 class="text-lg">Notizen</h2>

	<List>
		{#snippet item(notiz)}
			<Card text={notiz.titel}></Card>
		{/snippet}
		{#snippet leer()}
			Keine Notizen vorhanden
		{/snippet}
	</List>
</div>
