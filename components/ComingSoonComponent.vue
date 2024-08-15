<template>
    <main class="w-screen h-screen max-h-screen flex flex-row justify-center items-center overflow-x-hidden">
        <section class="w-full h-full flex flex-col items-start text-white justify-center gap-6 mx-16">
            <h1 class=" font-merriweather font-thin text-4xl md:text-6xl">Coming Soon</h1>
            <h3 class=" font-merriweather font-thin text-2xl ml-2">Talk to us in the Meantime!</h3>
            <NuxtLink to="/Contact" class="ml-2">
                <button class="px-4 py-2 rounded-lg bg-[#090909] shadow-lg shadow-black hover:text-[#278E46] hover:scale-110 hover:shadow-md transition-all duration-200 ease-in text-sm font-merriweather font-thin">Contact Us</button>
            </NuxtLink>
        </section>
        <div class="w-96 h-80 translate-x-24 hover:scale-150 duration-1000 transition-all rounded-full blur-2xl bg-[#278E46]" />    </main>
</template>

