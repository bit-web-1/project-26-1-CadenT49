<script>
  let { data } = $props();

  const games = data.games ?? [];
</script>

<h1>Trophies</h1>

<h2>Games</h2>

{#each games as game}
  <div class="trophy-list">
    
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

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
    background-color: rgb(0, 111, 205);
    margin: 0;
    padding: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .trophy-list {
  display:flex; 
  gap:10px; 
  align-items:center; 
  margin-bottom:10px;
  }
</style>