
<script setup>
 import {computed,defineProps,onMounted,ref, watch} from 'vue';
import {debounce} from 'lodash';

const props = defineProps({
    contact:Object
})

const emit = defineEmits(['onDelete', 'onUpdate','onAdd']);


const onDelete = () => {
    emit('onDelete',  props.contact);
};

const onUpdate = debounce((event) => {

  if (props.contact.id != null)
            emit('onUpdate', props.contact);
        else
            emit('onAdd', props.contact);



 }, 800);

</script>

<template>
    <div class="flex justify-center  ">
        <div class="flex flex-col py-2 relative   border-b border-gray-300 w-72" >

            <form>
                <div class="flex items-center gap-4 ps-4 p-1">

                    <img v-if="contact.profile" class="w-9 h-10 rounded-full border"
                        :src="contact.profile"
                        :alt="contact.name" />

                    <img v-else class="w-9 h-10 rounded-full border"
                        src="https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                        alt="" />

                    <div class="font-medium dark:text-white ">
                        <div class="flex flex-wrap  border-gray-300 dark:divide-gray-600 w-full">
                            <textarea rows="1"
                              
                                @change="onUpdate"
                                v-model="contact.name"
                                class="block font-medium ps-3 p-0 text-xs flex-grow overflow-hidden text-gray-900 bg-white outline-none resize-none border-none focus:ring-0 focus-within:ring-0"
                                placeholder="Nom Contact"></textarea>


                            <textarea rows="1"
                                @change="onUpdate"
                                v-model="contact.phone"
                                class="block sm:pe-4 ps-3 p-0 text-sm flex-grow  min-h-0 overflow-hidden text-gray-900 bg-white outline-none resize-none border-none focus:ring-0 focus-within:ring-0"
                                placeholder="Numero"></textarea>

                        </div>
                    </div>
                    <button type="button" @click="onDelete"
                        class="flex absolute end-2 ltr:end-2 rtl:end-2  rounded-lg hover:text-black p-2 text-gray-300">
                        <i class="fa-solid fa-trash-can fa-sm"></i>
                    </button>
                </div>

            </form>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>
