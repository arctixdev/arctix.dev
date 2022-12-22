<script>
	import { time, updateTime } from './stores.js';
    setInterval( updateTime, 1000);
</script>

<div class="w-screen hero" style="height: 80%;">
    <div class="hero-content text-center align-middle">
        <h1 class="text-5xl font-bold">Time till new year:</h1>
        <div class="grid grid-flow-col gap-5 auto-cols-max py-6">
            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span class="countdown font-mono text-5xl">
                    <span style="--value:{$time.days};"></span>
                </span>
                days
            </div> 
            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span class="countdown font-mono text-5xl">
                    <span style="--value:{$time.hours};"></span>
                </span>
                hours
            </div> 
            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span class="countdown font-mono text-5xl">
                    <span style="--value:{$time.minutes};"></span>
                </span>
                min
            </div> 
            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span class="countdown font-mono text-5xl">
                    <span style="--value:{$time.seconds};"></span>
                </span>
                sec
            </div>
        </div>
    </div>
</div>

