<script setup>
     defineProps({
        icon:String,
        label:String,
     })

const emit  =defineEmits(['onAdd'])

const onAdd =()=>{
    emit('onAdd')
}

</script>

<template>
   <div class="flex justify-center pb-3 pt-5 px-3">
        <a href="#"
        @click="onAdd"
         v-bind="$attrs"
            class="bg-white content-center px-4 border border-gray-300 w-full text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group hover:border-blue-700  hover:ring-1  hover:outline-none hover:ring-blue-700">
            <div class="py-4">
                <i :class="[icon ,'fa-md']"></i>
                <span class="text-xs ms-2">{{label}}</span>
            </div>
        </a>
    </div>
</template>

<style lang="css" scoped>

</style>
