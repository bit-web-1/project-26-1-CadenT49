<script>
    import GameCard from '$lib/components/GameCard.svelte';

    let { data } = $props();

    const games = data.games ?? [];
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nanum+Myeongjo&display=swap" rel="stylesheet">

<h1>Games</h1>

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
    *{
      font-family: 'Inter';
    }
</style>