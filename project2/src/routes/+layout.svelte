<script>
    import favicon from '$lib/assets/favicon.svg';
    import Footer from '$lib/components/Footer.svelte';
    import Nav from '$lib/components/Nav.svelte';
    import '$lib/global.css';

    let { children } = $props();
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



<main>
    {@render children()}
</main>

<Footer />

<style>
    :global(*) {
        font-family: 'Inter';
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
</style>