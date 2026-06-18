<script>
    import { onMount } from 'svelte';

    import favicon from '$lib/assets/favicon.svg';
    import Footer from '$lib/components/Footer.svelte';
    import Nav from '$lib/components/Nav.svelte';
    import '$lib/global.css';

    let { children } = $props();

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

<svelte:head>
    <link rel="icon" href={favicon}>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nanum+Myeongjo&display=swap"
        rel="stylesheet"
    >
</svelte:head>

<Nav />

<button class="theme-toggle" onclick={toggleTheme}>
    {darkMode ? 'Light Mode' : 'Dark Mode'}
</button>

<main>
    {@render children()}
</main>

<Footer />

<style>
    :global(*) {
        font-family: 'Inter', sans-serif;
    }

    :global(body) {
        margin: 0;
        background: #f4f8ff;
        color: black;
    }

    :global(body.dark-mode) {
        background: #111827;
        color: white;
    }

    main {
        min-height: calc(100vh - 140px);
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