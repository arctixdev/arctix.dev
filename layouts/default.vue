<template>
  <div class="min-h-screen">
    <div id="circle" class="bg-third absolute w-60 h-60 hidden rounded-full blur-3xl opacity-40 z-20 pointer-events-none"></div>
    <BaseNavbar />
    <div class="px-6 overflow-hidden">
      <slot />
    </div>
  </div>
</template>