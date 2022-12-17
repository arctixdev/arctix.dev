<script>
	import '../app.postcss';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<svelte:head>
	<title>Jonathan Bangert</title>
</svelte:head>

<div style="height: 100vh;">
	<Navbar />
	<slot />
	<Footer />
</div>

<MetaTags title="Jonathan Bangert" description="Jonathan Bangerts personal website" />
