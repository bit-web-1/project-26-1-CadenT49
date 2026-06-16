<script>
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import '$lib/global.css';

	let { children } = $props();
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nanum+Myeongjo&display=swap" rel="stylesheet">

<Nav/>

<main>
{@render children()}
</main>



<style>
*{
      font-family: 'Inter';
    }
</style>