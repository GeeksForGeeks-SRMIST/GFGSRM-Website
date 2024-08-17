<script setup lang="ts">

</script>

<template >
    <main class="w-full h-screen flex flex-col items-center justify-center">
        <form id="contactform" action="https://formsubmit.io/send/suvan.gowrishanker.204@gmail.com" method="POST" class="flex flex-col gap-4 text-white p-6 rounded-md bg-[#0C0C0C] w-1/3 h-fit justify-center items-center shadow-black shadow-lg">
            <p class="w-full text-center font-montserrat font-thin text-4xl my-2">Contact Us</p>
            <input name="_redirect" type="hidden" id="name" value="http://localhost:3000">
            <div class="flex flex-col gap-4 w-full">
                <input class="text-white bg-[#131417] p-1 rounded-md active:border border-white " placeholder="Name" name="name" type="text" id="name">
            </div>
            <div class="flex flex-col gap-2 w-full">
                <input class="text-white bg-[#131417] p-1 rounded-md active:border border-white " placeholder="Email" name="email" type="email" id="email">
            </div>
            <div class="flex flex-col gap-2 w-full">
                <textarea class="text-white bg-[#131417] p-1 rounded-md active:border border-white " placeholder="Your Query" name="comment" id="comment" rows="4"></textarea>
            </div>
            <input name="_formsubmit_id" type="text" style="display:none">

            <button value="Submit" type="submit" class="w-full text-lg font-thing font-montserrat p-1 bg-[#131417] hover:bg-[#278E46] active:border-2 border-white rounded-md transition-all duration-200 ease-in-out">
                Submit
            </button>
        </form>
    </main>
</template>