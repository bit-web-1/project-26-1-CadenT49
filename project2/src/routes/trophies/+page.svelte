<script>
    import GameCard from '$lib/components/GameCard.svelte';

    let { data } = $props();

    const games = data.games ?? [];
</script>

<h1>My Games</h1>

<div class="games-grid">
    {#each games as game}
        <GameCard {game} />
    {/each}
</div>

<style>
    .games-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 16px;
    }
    h1{
        text-align: center;
        margin: 1em;
    }
</style>