
<script setup>
import {debounce } from 'lodash'
const model = defineModel()

const emit  =defineEmits(['onSearch'])

const onSearch = debounce(()=>{
    emit('onSearch',model.value)
},2000)
 

</script>

<template>
    <div class="flex justify-center p-3">
   <form class="relative w-full">
        <div class="flex flex-col  h-full font-medium">
            <input type="search" v-model="model" @input="onSearch" v-bind="$attrs" id="default-search"
                class="py-3 bg-white  px-4 pe-8 text-xs text-gray-600 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus-within:border-blue-700 focus-within:ring-1 focus-within:outline-none focus-within:ring-blue-700"
                placeholder="Cherche ici ..." />
            <div
                class="absolute inset-y-0 end-0 ltr:end-0 rtl:end-0 flex items-center pe-3 hover:text-black p-2 text-gray-300">
                <i class="fa-solid fa-magnifying-glass " ></i>
            </div>
        </div>
    </form>
    </div>
</template>


<style lang="scss" scoped>

</style>