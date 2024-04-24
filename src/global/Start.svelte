<script lang="ts">
	import { wert, store } from './state';
</script>

<div>{$wert}</div>

<button on:click={() => store.mehr()}>{$store}</button>
