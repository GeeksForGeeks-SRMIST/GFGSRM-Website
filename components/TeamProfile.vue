<template>
    <div class='p-4 flex flex-col  text-white items-center justify-evenly gap-4 h-fit' :class="{ 'col-span-full md:col-span-2 lg:col-span-3': size }">
        <h1 class="text-4xl self-center font-reddit text-white">{{ role }}</h1>
        <NuxtImg class="w-96 h-96 bg-opacity-50  rounded-full hover:scale-125 hover:shadow-2xl hover:shadow-[#278E46] duration-300 transition-all ease-in-out object-contain" :src="img" alt="Profile Pic" />
        <h1 class="text-4xl self-center font-reddit text-white">{{ name }}</h1>
        <p class="text-lg self-center font-mono text-white">{{ description }}</p>
    </div>
</template>


<script setup>
const team = defineProps({
  name: String,
  img: String,
  description: String,
  size: Boolean,
  role: String
})
</script>

