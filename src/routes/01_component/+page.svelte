<script lang="ts">
	let text = $state('init');
	let mehr_text = $derived('MEHR: ' + text);

	$effect(() => {
		console.log(mehr_text);
	});
</script>

<div>{text}</div>
<div>{mehr_text}</div>
<div>
	<input class="border border-black p-1" type="text" bind:value={text} />
</div>
