<script>
	import { time, updateTime } from './stores.js';
	setInterval(updateTime, 1000);
</script>

<div class="w-screen hero" style="height: 80%;">
	<div class="hero-content text-center align-middle">
		<div class="max-w-md sm:max-w-none">
			<h1 class="text-5xl font-bold sm:hidden">New Years in:</h1>
			<div class="grid grid-flow-col gap-5 auto-cols-max py-6">
				<h1 class="text-5xl font-bold hidden sm:block align-middle">Time till new year:</h1>
				<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span class="countdown font-mono text-5xl">
						<span style="--value:{$time.days};" />
					</span>
					days
				</div>
				<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span class="countdown font-mono text-5xl">
						<span style="--value:{$time.hours};" />
					</span>
					hours
				</div>
				<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span class="countdown font-mono text-5xl">
						<span style="--value:{$time.minutes};" />
					</span>
					min
				</div>
				<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
					<span class="countdown font-mono text-5xl">
						<span style="--value:{$time.seconds};" />
					</span>
					sec
				</div>
			</div>
		</div>
	</div>
</div>
