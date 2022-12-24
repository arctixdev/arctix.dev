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
	<div class="drawer">
		<input id="menu-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<Navbar />
			<slot />
			<Footer />
		</div>
		<div class="drawer-side">
			<label for="menu-drawer" class="drawer-overlay" />
			<ul class="menu p-4 w-80 bg-base-100">
				<!-- Sidebar content here -->
				<li>
					<input id="menu-drawer" type="checkbox" class="drawer-toggle" />
					<label for="menu-drawer">
						<svg
							class="swap-on fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 512 512"
							><polygon
								points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
							/></svg
						>
					</label>
				</li>

				<li><a href="/">Home</a></li>
				<li><a href="blog">Blog</a></li>
				<li><a href="countdown">Countdown</a></li>
				<li class="flex-1 p-2 align-middle">
					<input
						aria-label="Toggle light and dark mode"
						data-toggle-theme="dark,light"
						data-act-class="ACTIVECLASS"
						type="checkbox"
						class="toggle align-middle"
						checked
					/>
				</li>
			</ul>
		</div>
	</div>
</div>

<MetaTags title="Jonathan Bangert" description="Jonathan Bangerts personal website" />
