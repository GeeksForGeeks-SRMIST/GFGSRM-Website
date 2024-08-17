<script setup lang="ts">
import { useMouse, useWindowSize } from '@vueuse/core'

const { x, y } = useMouse()
const { width, height } = useWindowSize()

const dx = computed(() => Math.abs(x.value - width.value / 2))
const dy = computed(() => Math.abs(y.value - height.value / 2))
const distance = computed(() =>
  Math.sqrt(dx.value * dx.value + dy.value * dy.value)
)

const size = computed(() => Math.max(300 - distance.value / 3, 10))

const opacity = computed(() => Math.min(Math.max(size.value / 300, 0.7), 1))

</script>

<template >
    <main class="w-screen flex flex-col min-h-screen overflow-x-hidden">
        <div 
            class=" hidden md:block absolute z-0 bg-green-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-2xl" 
            :style="{
                opacity,
                left: `${x}px`,
                top: `${y}px`,
                width: `${size}px`,
                height: `${size}px`
            }"
        ></div>
        <section class="w-screen h-screen flex flex-col justify-center items-center gap-2 bg-gradient-to-t from-[#131417] to-green-500/30 from-90%">
            <h1 class=" font-reddit text-6xl md:text-9xl text-white font-semibold"><span class="text-[#278E46]">G</span>eeks<span class="text-[#278E46]">f</span>or<span class="text-[#278E46]">G</span>eeks</h1>
            <h3 class=" font-reddit text-white text-3xl md:text-5xl">SRMIST KTR Chapter</h3>
            <p class=" font-montserrat text-white text-2xl">A Community of <i>SRMIST</i> Students</p>
        </section>
        <section class="h-fit py-12 flex flex-col justify-center items-center gap-2">
            <h1 class=" font-reddit text-5xl md:text-7xl text-white font-semibold"><span class="text-[#278E46]">A</span>bout <span class="text-[#278E46]">U</span>s</h1>
            <div class="p-6 shadow-inner shadow-[#141414] bg-[#262626] bg-opacity-70 rounded-md w-1/2 flex flex-col items-center text-white font-montserrat hover:-translate-x-1 hover:translate-y-1 transition-all duration-200 ease-in-out z-10">
                <span class="flex w-full ">
                    <div class=" cursor-pointer text-lg relative left-4 top-0 text-red-500">•</div>
                    <div class=" cursor-pointer text-lg relative left-6 top-0 text-yellow-500">•</div>
                    <div class=" cursor-pointer text-lg relative left-8 top-0 text-green-500">•</div>
                </span>
                <NuxtImg src="/GFG logo.png" class="w-32" />
                <div>
                    Hey there,<br/>
                    Want to outshine in your career? or desire to give shape to your ideas? if yes, then you are on the right page. Achieve your dreams with geeksforgeeks and upgrade your skillsets consistently to become more confident.<br/>
                    <br/>
                    Geeksforgeeks Students' chapter at SRM KTR is working on the idea - to impart knowledge among the geeks in a fun and exciting way. It will be achieved through events, hackathons and webinars to enlighten the mates. We aim for the perfection and success of all who are connected with us through this chapter. So keep yourself connected with us to ace your career beyond the skies.<br/>
                    <br/>
                    Wishing you luck!!
                </div>

            </div>
        </section>
    </main> 
</template>


