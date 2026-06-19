<section class="about-page">
    <div class="about-card">
        <div class="about-text">
            <h1>About Me</h1>

            <p>
                I’ve been building my PlayStation trophy collection for over 10 years,
                playing through story games, open-world adventures, difficult challenges,
                and full 100% completions.
            </p>

            <p>
                Trophy hunting has become one of my favourite parts of gaming because it
                gives every game more purpose. I enjoy exploring everything a game has to
                offer, finishing extra challenges, and working towards platinum trophies.
            </p>

        </div>

        <div class="about-images">
            <img src="src/lib/assets/IMG_5727.jpg" alt="Game screenshot">
            <img src="src/lib/assets/IMG_5741.jpg" alt="Game screenshot">
        </div>
    </div>
</section>

<style>
    .about-page {
        height: calc(100vh - 115px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 40px;
        box-sizing: border-box;
    }

    .about-card {
        width: 100%;
        max-width: 1100px;
        height: 100%;
        max-height: 620px;
        background: white;
        border-radius: 24px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 35px;
        padding: 35px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .about-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        font-size: 2.6rem;
        margin: 0 0 18px;
        color: #1f2937;
    }

    .about-text p {
        font-size: 1.05rem;
        line-height: 1.5;
        color: #444;
        margin-bottom: 14px;
    }

    .about-images {
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 20px;
        height: 100%;
        overflow: hidden;
    }

    .about-images img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 18px;
    }
    .about-images img:last-child {
    border-radius: 18px;
    overflow: hidden;
    display: block;
}
</style>