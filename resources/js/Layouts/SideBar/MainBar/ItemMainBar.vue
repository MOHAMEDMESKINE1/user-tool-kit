<script setup>
import { defineEmits } from "vue";

const props= defineProps({
    text:String,
    icon:String,
    isActive:Boolean,
    
})
const emit = defineEmits(['onItemClick'])

const onItemClick = ()=>{

    emit('onItemClick')
}

</script>

<template>
   <div class="flex justify-center  pb-4 px-4  ">
    <a href="#"
        @click="onItemClick"
        :class="[
            'content-center px-4 border-0 w-full rounded-lg   text-gray-600 dark:text-white dark:hover:bg-gray-700 group focus-within:border-blue-700 focus-within:ring-1 focus-within:outline-none focus-within:ring-blue-700',
            {  'bg-[#004F97] text-gray-600': isActive ,'bg-gray-100': !isActive  }
            ]">
    <div class="py-4">
            <i :class='["fa-solid  fa-lg   text-gray-600",icon ,{"text-white":isActive}]'></i>
            <span :class="['text-sm ms-3 text-gray-600 ',{'text-white':isActive}]">{{text}}</span>
        </div>
    </a>
    </div>
</template>



<style lang="css" scoped>

</style>