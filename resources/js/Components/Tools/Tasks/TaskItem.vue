<script setup>
import debounce from 'lodash'
 const props= defineProps({
    item:Boolean
 })
 
 const emit = defineEmits(['onUpdate'])

 const onUpdate = () =>{
    emit('onUpdate',props.item);
 }
</script>

<template>
  <div class="flex items-start w-full" >

    <input type="checkbox" value="" :checked="item.done"  v-model="item.done" @change="onUpdate"

       class="my-1.5 w-4 h-4 bg-gray-100 border-gray-300 rounded-full outline-none dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500 border-none focus:ring-0 focus-within:ring-0" />
    
    <textarea rows="1" id="message"
        @change="onUpdate"
        v-model="item.content"
        class="block py-1 ms-2 text-sm w-full h-auto min-h-0 overflow-hidden text-gray-500 bg-transparent outline-none resize-none  border-none focus:ring-0 focus-within:ring-0"
        oninput="this.style.height = 'auto'; this.style.height = (this.scrollHeight) + 'px';"
        placeholder="Tâches d'aujourd'hui"></textarea>
</div>
</template>

<style lang="css" scoped>

</style>