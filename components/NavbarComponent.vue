
<template>
    <nav class="flex flex-row w-screen z-10 justify-evenly items-center shadow-sm shadow-teal-800 bg-[#0C0C0C] p-2 border-gradient-to-r from-teal-500 to-green-500">
        <div class="text-white list-none flex flex-row gap-8 w-1/3 justify-evenly">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/gallery">Gallery</NuxtLink>
            <NuxtLink to="/recruitments">Recruitment</NuxtLink>
        </div>
        <NuxtImg src="/GFG logo2.png" class="w-12" />
        <ul class="text-white list-none flex flex-row gap-8 w-1/3 justify-evenly">
            <NuxtLink to="/team">Team</NuxtLink>
            <NuxtLink to="/events">Events</NuxtLink>
            <NuxtLink to="/contact">Contact Us</NuxtLink>
        </ul>
    </nav>
</template>
