<script>
	import '../app.postcss';
	import '../global.css';
	import { MetaTags } from 'svelte-meta-tags';
	import "@fontsource/roboto";
</script>

<style>
	slot {
    	font-family: 'Roboto', sans-serif;
  	}
</style>

<svelte:head>
	<title>Jonathan Bangert</title>
</svelte:head>

<slot />

<MetaTags title="Jonathan Bangert" description="My personal portfolio and website! Come have a look!" />
