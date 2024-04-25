<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let text = 'hallo';

	$: {
		if (text === '') dispatch('text_leer');
	}
</script>

<div class="bg-blue-400 p-4">
	<div class="underline" on:click role="none">{text}</div>

	<div><slot /></div>
</div>
