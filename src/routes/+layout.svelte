<script>
	import '../app.postcss';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
</script>

<div style="height: 94.5vh;">
	<Navbar />
	<slot />
	
</div>
<Footer />