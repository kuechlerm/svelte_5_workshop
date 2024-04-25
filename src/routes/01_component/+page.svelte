<script lang="ts">
	let text = 'init';
	$: mehr_text = 'MEHR: ' + text;

	$: {
		console.log(mehr_text);
	}
</script>

<div>{text}</div>
<div>{mehr_text}</div>
<div>
	<input class="border border-black p-1" type="text" bind:value={text} />
</div>
