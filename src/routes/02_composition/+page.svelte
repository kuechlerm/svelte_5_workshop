<script lang="ts">
	import Kind from './Kind.svelte';
</script>

<Kind text={'bla'} on:text_leer={() => alert('Text leer')}>Super Content</Kind>
