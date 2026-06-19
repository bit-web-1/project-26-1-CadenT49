<script>
    import { onMount } from 'svelte';

    let darkMode = $state(false);

    onMount(() => {
        darkMode = localStorage.getItem('theme') === 'dark';
        document.body.classList.toggle('dark-mode', darkMode);
    });

    function toggleTheme() {
        darkMode = !darkMode;

        document.body.classList.toggle('dark-mode', darkMode);
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }
</script>

<div>
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/trophies">Trophies</a></li>
</ul>
<button class="theme-toggle" onclick={toggleTheme}>
    {darkMode ? 'Light Mode' : 'Dark Mode'}
</button>
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

    .theme-toggle {
        position: fixed;
        top: 0.75em;
        right: 20px;
        z-index: 1000;
        border: none;
        background: white;
        color: #2679bd;
        padding: 8px 14px;
        border-radius: 999px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .theme-toggle:hover {
        transform: translateY(-1px);
    }

    :global(body.dark-mode) .theme-toggle {
        background: #334155;
        color: white;
    }
</style>
