<div>
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/trophies">Trophies</a></li>
</ul>
</div>

<style>
    *{
        font-family: 'Inter';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    div{
        background-color: #2375bd;
        padding: 1em;
        position: sticky;
        top: 0;
        z-index: 1000;
    }
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2em;            
        list-style: none;
    }
    li a {
        text-decoration: none;
        color: white;
        transition: color 0.2s ease;
    }
    li a:hover {
        transition: color 0.2s ease;
        color: #ddd;
    }
</style>
