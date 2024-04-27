<script lang="ts">
	import { wert, store } from './state.svelte';
</script>

<div>{wert}</div>

<button class="cursor-pointer bg-blue-400 p-2" on:click={() => store.mehr()}>
	{store.value}
</button>
