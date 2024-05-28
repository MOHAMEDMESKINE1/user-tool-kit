<script setup>

import { defineEmits } from "vue";

const props= defineProps({
    tooltip:String,
    icon:String,

    
})
const emit = defineEmits(['onAppBarItemClick'])

const onAppBarItemClick = ()=>{

    emit('onAppBarItemClick')
}

</script>

<template>
    <div class="flex-none content-center py-3 ">
        <a href="#"
            @click="onAppBarItemClick"
            v-tooltip="{ 
                value: tooltip, 
                showDelay: 100, 
                hideDelay: 300, 
                pt: {
                    arrow: {
                        style: {
                            borderColor: 'primary',
                        }
                    },
                    text: 'bg-sidebar text-sm mx-6 text-white px-5 py-3'
                }

            }"
                

            class="flex justify-center items-center h-14 w-14  text-white rounded-lg dark:text-white  focus:bg-slate-600  hover:bg-slate-600  dark:hover:bg-gray-600">
            <i :class='["fa-solid  fa-lg ",icon]'></i>
        </a>
    </div>
</template>



<style lang="css" scoped>

</style>