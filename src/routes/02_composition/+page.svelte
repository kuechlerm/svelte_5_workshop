<script lang="ts">
	import Kind from './Kind.svelte';
</script>

<Kind text={'bla'} on:click={() => alert('Action!')} on:text_leer={() => alert('Text leer')}
	>Super Content</Kind
>
