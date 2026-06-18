<script>
    let { game } = $props();

    const earned = game.earnedTrophies ?? {};
</script>

<a class="card" href={`/game/${game.npCommunicationId}`}>
    {#if game.trophyTitleIconUrl}
        <img
            src={game.trophyTitleIconUrl}
            alt={game.trophyTitleName}
            class="game-image"
        />
    {/if}

    <h3>{game.trophyTitleName}</h3>
    <p class="platform">{game.trophyTitlePlatform}</p>

    <div class="trophy-row">
        <div class="trophy-count">
            <img src="/src/lib/assets/platinum.png" alt="Platinum trophy" />
            <span>{earned.platinum ?? 0}</span>
        </div>

        <div class="trophy-count">
            <img src="/src/lib/assets/gold.png" alt="Gold trophy" />
            <span>{earned.gold ?? 0}</span>
        </div>

        <div class="trophy-count">
            <img src="/src/lib/assets/silver.png" alt="Silver trophy" />
            <span>{earned.silver ?? 0}</span>
        </div>

        <div class="trophy-count">
            <img src="/src/lib/assets/bronze.png" alt="Bronze trophy" />
            <span>{earned.bronze ?? 0}</span>
        </div>
    </div>
</a>

<style>
    .card {
        background: white;
        border-radius: 12px;
        padding: 12px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;

        display: flex;
        flex-direction: column;
        height: 100%;
        box-sizing: border-box;

        text-decoration: none;
        color: black;
    }

    .card:hover {
        transform: translateY(-2px);
    }

    .game-image {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 8px;
    }

    h3 {
        margin: 10px 0 5px;
        font-size: 1rem;
    }

    .platform {
        margin: 0 0 10px;
        color: #666;
        font-size: 0.9rem;
    }

    .trophy-row {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;

        margin-top: auto;
        padding-top: 10px;
    }

    .trophy-count {
        display: flex;
        align-items: center;
        gap: 4px;
        font-weight: bold;
        font-size: 0.9rem;
    }

    .trophy-count img {
        width: 22px;
        height: 22px;
        object-fit: contain;
    }
</style>