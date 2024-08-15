<template>
    <div class="w-80 h-78 m-4 bg-[#0C0C0C] rounded-md text-white hover:scale-105 hover:shadow-2xl hover:shadow-[#278E46] duration-300">
       <img class="p-2" src="public/GFG logo2.png" alt="">
       <h2 class="px-2 text-center">Event</h2>
       <h3 class="px-2" >
        {{ addEllipsis("Reprehenderit ullamco irure proident aliquip exercitation in ex ut id quis laboris do. Reprehenderit ullamco irure proident aliquip exercitation in ex ut id quis laboris do.") }}
       </h3>
    </div>

</template>

<script>
import { defineProps  } from 'vue';
const event = defineProps({
    img: String,
    name: String,
    slug: String
})

export default{
    methods:{
         addEllipsis(str) {
          if (str.length > 70) {
            return str.substring(0, 70) + '...';
          } else {
            return str;
          }
    }
  }
}
</script>