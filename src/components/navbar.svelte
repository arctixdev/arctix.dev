<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	onMount(() => {
		themeChange(false);
	});
</script>

<div class="navbar bg-base-200 flex sticky top-0 h-10 z-50 gap-5">
	<div class="navbar-start">
		<a href="/" class="hidden sm:block">uhei</a>
		<label class="btn btn-circle swap swap-rotate sm:hidden" for="menu-drawer">
			<!-- this hidden checkbox controls the state -->
			<input id="menu-drawer" type="checkbox" class="drawer-toggle" />
			<!-- hamburger icon -->
			<svg
				class="swap-off fill-current"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 512 512"
				><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
			>
			<!-- close icon -->
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
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost font-extrabold text-xl">Jonathan Bangert</a>
	</div>
	<div class="navbar-end">
		<ul class="flex">
			<li class="flex-1 p-2 align-middle hidden sm:block">
				<input
					aria-label="Toggle light and dark mode"
					data-toggle-theme="dark,light"
					data-act-class="ACTIVECLASS"
					type="checkbox"
					class="toggle align-middle"
					checked
				/>
			</li>
			<li class="flex-1 justify-between hidden sm:block">
				<a href="/blog" class="btn normal-case text-xl text-center">Blog</a>
			</li>
		</ul>
	</div>
	<!--<div class="navbar-end">
        <a href="/" class="btn">Home</a>
    </div> -->
</div>
