<template>
    <div>
        <h1 class="text-center font-bold text-4xl sm:text-5xl py-10 text-text-main">Stuff I've worked on</h1>
        <div class="showcase h-fit">
            <div class="flex w-full justify-between mb-3">
                <div class="my-auto mr-2">
                    <svg width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="10" fill="black"/>
                        <text fill="white" xml:space="preserve" style="white-space: pre" font-family="JetBrains Mono" class="font-hmm" font-size="25" font-weight="500" letter-spacing="-0.075em"><tspan x="19" y="34.5">/\</tspan></text>
                        <text fill="white" xml:space="preserve" style="white-space: pre" font-family="JetBrains Mono" class="font-hmm" font-size="25" font-weight="500" letter-spacing="-0.375em"><tspan x="-1" y="34.5">|||</tspan></text>
                    </svg>
                </div>
                <h1 class="text-xl sm:text-4xl my-auto">Music Assistant</h1>
                <NuxtLink aria-label="Music Assistant on github" to="https://github.com/music-assistant" class="my-auto transition ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-md rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 71 71" fill="none">
                        <rect x="0.5" width="71" height="71" rx="15" fill="#797979"/>
                        <path d="M43.6301 29.8555L24.2651 49.2205L21.0832 46.0386L40.4482 26.6736L23.3805 26.6736L23.3805 22.1744L48.1293 22.1744L48.1293 46.9232L43.6301 46.9232L43.6301 29.8555Z" fill="white"/>
                    </svg>
                </NuxtLink>
            </div>
            <div class="flex overflow-hidden justify-between h-fit">
                <p class="sm:mr-2 h-full 2xl:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <img format="avif,webp" class="rounded-lg hidden-mobile-inline showcase-pic" src="/mass.webp" width="1050" height="680" alt="Music Assistant layout" />
            </div>
            <img format="avif,webp" src="/mass.webp" width="1050" height="680" alt="Music Assistant layout" class="mt-3 rounded-lg only-mobile showcase-pic"/>
        </div>
    </div>
</template>
