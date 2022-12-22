<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	onMount(() => {
		themeChange(false);
	});
</script>

<div class="navbar bg-base-200 flex sticky top-0 h-10 z-50 gap-5">
	<div class="navbar-start">
		<a href="/">uhei</a>
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost">Jonathan Bangert</a>
	</div>
	<div class="navbar-end">
		<ul class="flex">
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
			<li class="flex-1 justify-between">
				<a href="/blog" class="btn normal-case text-xl text-center">Blog</a>
			</li>
			<br>
			<li class="flex-1 justify-between">
				<a href="/countdown" class="btn btn-ghost normal-case text-xl text-center">Countdown</a>
			</li>
		</ul>
	</div>
	<!--<div class="navbar-end">
        <a href="/" class="btn">Home</a>
    </div> -->
</div>
