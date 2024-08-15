<template>
   <main class="w-full min-h-screen flex flex-col scroll-smooth items-center my-12 gap-16">
      <h1 class=" font-extralight text-6xl md:text-9xl text-white w-fit text-left md:p-10 border-b-2 border-[#278E46]"><span class="text-[#278E46]">O</span>ur <span class="text-[#278E46]">T</span>eam</h1>
      <h3 class=" font-montserrat text-4xl font-light text-white md:text-6xl my-24  border-b w-1/3 text-center pb-3 border-[#278E46] ">Chapter Leads</h3>
      <section class="flex flex-row w-full m-2 items-center justify-evenly">
         <TeamProfile 
            v-for="(user, index) in ChairData" 
            :v-if="user.role" 
            :key="index" 
            :name="user.name" 
            :img="user.img"
            :role="user.role" 
            :description="user.description" 
            :size="user.size" 
         />
      </section>
      <h3 class=" font-montserrat text-4xl font-light text-white md:text-6xl my-24 border-b w-1/3 text-center pb-3 border-[#278E46]">Heads</h3>
      <section class="flex flex-row flex-wrap items-center md:w-11/12 gap-12 md:gap-36 justify-center">
         <TeamProfile v-for="(user, index) in HeadsData" :v-if="user.role" :role="user.role" :key="index" :name="user.name" :img="user.img" :description="user.description" :size="user.size" />
      </section>
      <h3 class=" font-montserrat text-4xl font-light text-white md:text-6xl my-24 border-b w-1/3 text-center pb-3 border-[#278E46]">Leads</h3>
      <section class="flex flex-row flex-wrap items-center md:w-11/12 gap-12 md:gap-36 justify-center">
         <TeamProfile v-for="(user, index) in LeadsData" :v-if="user.role" :role="user.role" :key="index" :name="user.name" :img="user.img" :description="user.description" :size="user.size" />
      </section>
      <h3 class=" font-montserrat text-4xl font-light text-white md:text-6xl my-24 border-b w-1/3 text-center pb-3 border-[#278E46]">Members</h3>
      <section class="flex flex-row flex-wrap items-center md:w-11/12 gap-12 md:gap-36 justify-center">
         <TeamProfile v-for="(user, index) in membersData" :v-if="user.role" :role="user.role" :key="index" :name="user.name" :img="user.img" :description="user.description" :size="user.size" />
      </section>
   </main>
</template>
   
   

<script setup>
const ChairData = [
{
   name: 'Vinay Rajan',
   img: 'vinay.png',
   description: 'hehehahehaheaheheh',
   size: true,
   role: 'President' 
},
// {
//    name: 'Prasanjit Panda',
//    img: 'pj.png',
//    description: 'hehehahehaheaheheh',
//    size: true,
//    role: 'Lead'
// },
];

const HeadsData =[
{
   name: 'Suvan GS',
   img: 'suvan.png',
   description: 'Lorem ipsum dolor sit amet',
   size: false,
   role: 'Technical'
},
{
   name: 'Ishan Roy',
   img: 'ison.png',
   description: 'Consectetur adipiscing elit',
   size: false
},
{
   name: 'Mayurathvajaa',
   img: 'mairu.png',
   description: 'Consectetur adipiscing elit',
   size: false
},
]

const LeadsData = [
{
   name: 'Rishi Viswanathan',
   img: 'rizzi.png',
   description: 'Lorem ipsum dolor sit amet',
   size: false,
   role: 'Head'
},
{
   name: 'Inigo Jeevan',
   img: 'jibun.png',
   description: 'Consectetur adipiscing elit',
   size: false
},
]
const membersData = [
{
   name: 'John',
   img: 'GFG logo2.png',
   description: 'Lorem ipsum dolor sit amet',
   size: false,
   role: 'Head'
},
{
   name: 'Jane',
   img: 'GFG logo2.png',
   description: 'Consectetur adipiscing elit',
   size: false
},
{
   name: 'John',
   img: 'GFG logo2.png',
   description: 'Lorem ipsum dolor sit amet',
   size: false,
   role: 'Head'
},
{
   name: 'Jane',
   img: 'GFG logo2.png',
   description: 'Consectetur adipiscing elit',
   size: false
},
{
   name: 'John',
   img: 'GFG logo2.png',
   description: 'Lorem ipsum dolor sit amet',
   size: false,
   role: 'Head'
},
{
   name: 'Jane',
   img: 'GFG logo2.png',
   description: 'Consectetur adipiscing elit',
   size: false
},
{
   name: 'John',
   img: 'GFG logo2.png',
   description: 'Lorem ipsum dolor sit amet',
   size: false,
   role: 'Head'
},
{
   name: 'Jane',
   img: 'GFG logo2.png',
   description: 'Consectetur adipiscing elit',
   size: false
},
]
</script>
