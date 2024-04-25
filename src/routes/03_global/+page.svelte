<script lang="ts">
	import { wert, store } from './state';
</script>

<div>{$wert}</div>

<button class="cursor-pointer bg-blue-400 p-2" on:click={() => store.mehr()}>
	{$store}
</button>
