<script lang="ts">
	import type { PageData } from './$types';

    const { data }: { data: PageData } = $props();
</script>

{#await data.streamedData}
	<p>Loading...</p>
{:then streamedData}
	<p>Finished loading successfully: {JSON.stringify(streamedData)}</p>
<!-- {:catch error}
	<p>Something went wrong: {error.message}</p> -->
{/await}