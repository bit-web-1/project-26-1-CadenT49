<script>
	import TrophyDetail from '$lib/components/TrophyDetail.svelte';

    let { data } = $props();

    const trophies = data.games ?? [];
</script>


<div class="trophies-grid">
    {#each trophies as trophy}
    <TrophyDetail {trophy}/>
    {/each}
</div>
<style>
        .trophies-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 16px;
    }
</style>
