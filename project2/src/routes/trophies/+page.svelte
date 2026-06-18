<script>
    import GameCard from '$lib/components/GameCard.svelte';

    let { data } = $props();

    const games = data.games ?? [];

    let search = $state('');
    let selectedPlatform = $state('all');
    let platinumFilter = $state('all');

    const platforms = $derived(
        [
            ...new Set(
                games
                    .flatMap((game) =>
                        (game.trophyTitlePlatform ?? '')
                            .split(',')
                            .map((platform) => platform.trim())
                    )
                    .filter(Boolean)
            )
        ].sort()
    );

    const filteredGames = $derived.by(() => {
        const searchText = search.toLowerCase();

        return games.filter((game) => {
            const title = game.trophyTitleName ?? '';
            const platform = game.trophyTitlePlatform ?? '';
            const isPlatinumed = (game.earnedTrophies?.platinum ?? 0) > 0;

            const matchesSearch = title.toLowerCase().includes(searchText);

            const matchesPlatform =
                selectedPlatform === 'all' ||
                platform.includes(selectedPlatform);

            const matchesPlatinum =
                platinumFilter === 'all' ||
                (platinumFilter === 'platinumed' && isPlatinumed) ||
                (platinumFilter === 'not-platinumed' && !isPlatinumed);

            return matchesSearch && matchesPlatform && matchesPlatinum;
        });
    });

    function clearFilters() {
        search = '';
        selectedPlatform = 'all';
        platinumFilter = 'all';
    }
</script>

<h1>My Games</h1>

<div class="search-box">
    <input
        type="text"
        placeholder="Search games..."
        bind:value={search}
    />

    <select bind:value={selectedPlatform}>
        <option value="all">All Platforms</option>

        {#each platforms as platform}
            <option value={platform}>{platform}</option>
        {/each}
    </select>

    <select bind:value={platinumFilter}>
        <option value="all">All Games</option>
        <option value="platinumed">Platinumed</option>
        <option value="not-platinumed">Not Platinumed</option>
    </select>

    <button onclick={clearFilters}>Clear</button>
</div>

<p class="result-count">
    Showing {filteredGames.length} of {games.length} games
</p>

<div class="games-grid">
    {#each filteredGames as game}
        <GameCard {game} />
    {/each}
</div>

{#if filteredGames.length === 0}
    <p class="no-results">No games found.</p>
{/if}

<style>
    h1 {
        text-align: center;
        margin: 1em;
    }

    .search-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 12px;
        padding: 0 1em;
    }

    .search-box input,
    .search-box select {
        width: 100%;
        max-width: 260px;
        padding: 12px 16px;
        border: 1px solid #ccc;
        border-radius: 999px;
        font-size: 1rem;
        outline: none;
        background: white;
    }

    .search-box input:focus,
    .search-box select:focus {
        border-color: #2679bd;
        box-shadow: 0 0 0 3px rgba(38, 121, 189, 0.15);
    }

    .search-box button {
        padding: 12px 18px;
        border: none;
        border-radius: 999px;
        background: #2679bd;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }

    .search-box button:hover {
        background: #1f669f;
    }

    .result-count {
        text-align: center;
        color: #666;
        margin-bottom: 24px;
    }

    .games-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 1em;
        padding: 0 1em;
    }

    .no-results {
        text-align: center;
        margin-top: 30px;
        color: #666;
    }

    :global(body.dark-mode) .search-box input,
    :global(body.dark-mode) .search-box select {
        background: #1f2937;
        color: white;
        border-color: #334155;
    }

    :global(body.dark-mode) .result-count,
    :global(body.dark-mode) .no-results {
        color: #cbd5e1;
    }
</style>