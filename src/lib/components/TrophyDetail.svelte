<script>
    let { trophy } = $props();
</script>

<div class:earned={trophy.earned} class="card">
    <p class="rarity">{trophy.trophyType}</p>

    <img
        src={trophy.trophyIconUrl}
        alt={trophy.trophyName}
        class="game-image"
    />

    <h3>{trophy.trophyName}</h3>
    <p>{trophy.trophyDetail}</p>
    <small>Earn Rate: {trophy.trophyEarnedRate}%</small>
</div>

<style>
    .card {
        background: white;
        border-radius: 12px;
        padding: 12px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
    }

    .card.earned {
        background: #d4f8d4;
        border: 2px solid #36b336;
    }

    .card:hover {
        transform: translateY(-2px);
    }

    .game-image {
        max-width: 100px;
        object-fit: cover;
        border-radius: 8px;
    }

    .rarity {
        margin-bottom: 5px;
        text-transform: capitalize;
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