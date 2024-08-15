<script setup lang="ts">
useHead({
  title: 'GFG SRMIST | Home',
  meta: [
    { name: 'description', content: 'Student Club of Geeks for Geeks' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/GFG logo2.png' }
  ]})
</script>

<template>
  <main class="bg-[#131417] min-h-screen overflow-y-auto overflow-x-hidden">
    <NavbarComponent />
    <NuxtPage />

    <FooterComponent />
  </main>
</template>

<style>
:root{
  overflow-x: hidden;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s ease-in-out;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  filter: blur(2rem);
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>