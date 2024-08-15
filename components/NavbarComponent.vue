
<template>
    <nav class="flex flex-row w-screen z-10 justify-evenly items-center shadow-sm shadow-teal-800 bg-[#0C0C0C] p-2 border-gradient-to-r from-teal-500 to-green-500">
        <div class="text-white list-none flex flex-row gap-8 w-1/3 justify-evenly">
            <NuxtLink id="undeline" to="/">Home</NuxtLink>
            <NuxtLink id="undeline" to="/Gallery">Gallery</NuxtLink>
            <!-- <NuxtLink id="undeline" to="/Projects">Projects</NuxtLink> -->
            <NuxtLink id="undeline" to="/Recruitment.vue">Recruitment</NuxtLink>
        </div>
        <NuxtImg src="/GFG logo2.png" class="w-12" />
        <ul class="text-white list-none flex flex-row gap-8 w-1/3 justify-evenly">
            <NuxtLink id="undeline" to="/Team">Team</NuxtLink>
            <NuxtLink id="undeline" to="/Events">Events</NuxtLink>
            <NuxtLink id="undeline" to="/Contact">Contact Us</NuxtLink>
        </ul>
    </nav>
</template>
