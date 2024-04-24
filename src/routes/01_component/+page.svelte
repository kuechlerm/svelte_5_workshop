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
	<input type="text" bind:value={text} />
</div>
