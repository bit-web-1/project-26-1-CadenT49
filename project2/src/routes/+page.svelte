<div class="container">
<div class="profile-card">
    <img class="card-background" src="src/lib/assets/CardBackground.jpg" alt="Profile">

    <img class="profile-image" src="src/lib/assets/PFP.png" alt="Profile">

    <h1>Caden Thompson</h1>
    <p>
    I’ve been trophy hunting for the past 10 years, I've completed many games on PS3, PS4, and PS5. Here's a showcase of some of my trophies.
</p>
</div>
</div>

<style>
.profile-card {
    position: relative;
    width: 300px;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    color: black;
    background-color: white;
}

.card-background {
    width: 100%;
    height: 120px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
}

.profile-image {            
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid white;
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('\src\lib\assets\IMG_5726.JPG');
    background-size: cover;
    height: 93.6vh;
}

h1 {
    margin-top: 185px;
    font-size: 24px;
    position: relative;
    z-index: 2;
}

p {
    margin: 20px;
    font-size: 16px;
    position: relative;
    z-index: 2;
}
</style>