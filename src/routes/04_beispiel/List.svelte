<script lang="ts">
	import { notizen } from './notizen';
</script>

<div class="flex flex-col gap-2">
	{#each $notizen as notiz}
		<slot {notiz} />
	{:else}
		<slot name="leer" />
	{/each}
</div>
