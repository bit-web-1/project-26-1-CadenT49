<script>
    import TrophyCard from '$lib/components/TrophyDetail.svelte';

	let { data } = $props();

	const game = data.game;
	const trophies = data.trophies ?? [];
</script>

{#if game}
	<h1 class="game-name">{game.trophyTitleName}</h1>
	<p class="game-platform">{game.trophyTitlePlatform}</p>

	<div class="trophies-grid">
		{#each trophies as trophy}
			<TrophyCard {trophy} />
		{/each}
	</div>
{:else}
	<h1>Game not found</h1>
{/if}

<style>
	h1,
	p {
		text-align: center;
	}

	.trophies-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 16px;
	}
    .game-name {
        margin-top: 0.5em;
    }
    .game-platform {
        color: #666;
        margin-bottom: 1em;
    }
</style>