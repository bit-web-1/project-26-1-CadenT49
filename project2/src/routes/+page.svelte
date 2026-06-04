<script>
  let { data } = $props();

  const games = data.games ?? [];
</script>

<h1>Games</h1>

{#each games as game}
  <div style="display:flex; gap:10px; align-items:center; margin-bottom:10px;">
    
    {#if game.trophyTitleIconUrl}
      <img src={game.trophyTitleIconUrl} width="50" alt={game.trophyTitleName} />
    {/if}

    <div>
      <div>{game.trophyTitleName}</div>
      <small>{game.trophyTitlePlatform}</small>
    </div>

  </div>
{/each}

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">

<style>
  * {
    font-family: 'Inter', sans-serif;

  }
</style>