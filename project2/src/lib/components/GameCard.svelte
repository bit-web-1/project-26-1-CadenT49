<script>
    let { game } = $props();
</script>

<a class="card" href={`/game/${game.npCommunicationId}`}>
    <img
        src={game.trophyTitleIconUrl}
        alt={game.trophyTitleName}
        class="game-image"
    />

    <h3>{game.trophyTitleName}</h3>
    <p>{game.trophyTitlePlatform}</p>
</a>

<style>
    .card {
        display: block;
        background: white;
        border-radius: 12px;
        padding: 12px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
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

    p {
        margin: 0;
        color: #666;
    }
</style>