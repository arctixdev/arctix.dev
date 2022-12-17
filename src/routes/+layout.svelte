<script>
	import '../app.postcss';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
</script>

<div class="min-h-screen">
	<Navbar />
	<slot />
	
</div>
<Footer />