<template>
    <div class="flex justify-center items-center flex-col mx-auto">
        <h1 class="font-bold text-2xl">Access Components</h1>
        <nav>
            <div class="p-6" v-for="nav in navs" :key="nav.parent">
                <div class="flex gap-4 ">
                    <NuxtLink class="text-lg hover:text-blue-600 " :to="`${nav.parent}/${nav.childrens[0]}`"> {{ nav.parent }} </NuxtLink>
                    <ul class="text-sm">
                        <li v-for="child in nav.childrens" :key="child" class="hover:text-blue-300"><NuxtLink :to="`${nav.parent}/${child}`"> {{ child }} </NuxtLink></li>
                    </ul> 
                </div>
            </div>  
        </nav>
    </div>
</template>

<script setup lang="ts">

type Nav = {
    parent: string,
    childrens: string[]
}

const navs = ref<Nav[]>([
    {
        parent: "forms",
        childrens: [
            "inputs",
        ]
    }
])

</script>
