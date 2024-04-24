<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let text = 'hallo';

	$: {
		if (text === '') dispatch('text_leer');
	}
</script>

<div on:click role="none">{text}</div>

<div><slot /></div>
