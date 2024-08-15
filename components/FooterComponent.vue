<template>
    <footer class="bg-[#0C0C0C] text-white flex flex-col items-center justify-center gap-4 px-4 py-6">
        <div class="flex flex-row gap-8">
            <a class="hover:text-[#2F8D46] transition-all duration-200 ease-in-out" href="https://www.instagram.com/gfgsrmist/" target="_blank" rel="noopener noreferrer">
                <Instagram />
            </a>
            <a class="hover:text-[#2F8D46] transition-all duration-200 ease-in-out" href="https://www.linkedin.com/company/geeksforgeeks-srmist-chapter" target="_blank" rel="noopener noreferrer">
                <Linkedin />
            </a>
            <a class="hover:text-[#2F8D46] transition-all duration-200 ease-in-out" href="
            https://www.youtube.com/channel/UC9YFJ5KBz5v8Z8Z2Z6ZJw8A" target="_blank" rel="noopener noreferrer">
                <Youtube />
            </a>
        </div>
        <p class="text-sm font-montserrat font-light">© 2024 GeeksforGeeks SRMIST Chapter</p>
    </footer>
</template>

<script setup>
import { Instagram, Linkedin, Youtube } from 'lucide-vue-next';
</script>
