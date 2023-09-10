<template>
    <header class="w-full h-16 border-b-2 border-secondary bg-opacity-80 bg-main backdrop-blur top-0 sticky flex">
        <nav class="container flex p-5 mx-auto my-auto justify-between px-10 h-full align-baseline">
            <NuxtLink to="/" data-value="Jonathan Bangert" class="text-text-main uppercase font-bold hacker-animation">Jonathan Bangert</NuxtLink>
            <ul class="flex gap-4 hidden-mobile justify-center items-center">
                <li><NuxtLink data-value="about" to="/about" class="text-text-main font-semibold mx-3 sm:mx-5 lowercase hacker-animation">About</NuxtLink></li>
                <li><NuxtLink data-value="projects" to="/projects" class="text-text-main font-semibold mx-3 sm:mx-4 lowercase hacker-animation">Projects</NuxtLink></li>
                <li class="hover:cursor-pointer hover:bg-third transition ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-md duration-300 bg-secondary rounded-2xl h-9 flex sm:mx-5 px-8">
                    <NuxtLink to="https://blog.arctix.dev/" class="my-auto text-text-main font-semibold lowercase">blog</NuxtLink>
                </li>
            </ul>
            <Icon name="ci:hamburger-md" class="text-text-main only-mobile text-2xl"></Icon>
        </nav>
    </header>
</template>
