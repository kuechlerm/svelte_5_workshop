<script>
	import Card from './Card.svelte';
	import { notizen } from './notizen';

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

	<div class="flex flex-col gap-2">
		{#each $notizen as notiz}
			<Card text={notiz.titel}></Card>
		{/each}
	</div>
</div>
