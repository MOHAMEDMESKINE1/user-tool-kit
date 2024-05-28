<script setup>
    import {
        computed,
        defineProps,
        onMounted,
        ref,
        watch
    } from 'vue';
    import {
        debounce
    } from 'lodash';

    const props = defineProps({
        note: Object,
      
    });

    const textareaRefContent = ref(null);
    const textareaRefTitle = ref(null);
    const resizeTextarea = () => {
        const textarea = textareaRefContent.value;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const resizeTextareaTitle = () => {
        const textarea = textareaRefTitle.value;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };
    onMounted(() => {
        resizeTextarea();
        resizeTextareaTitle();
    })



    const emit = defineEmits(['onDelete', 'onPin', 'onUpdate','onAdd']);


    const isPinned = ref(props.note.pinned);
    const onPin = () => {

        isPinned.value = !isPinned.value;

        emit('onPin', props.note, isPinned.value);

    };

    const onDelete = () => {
        emit('onDelete', props.note);
    };


   


    const onUpdate = debounce((event) => {

        if (props.note.id != null)
            emit('onUpdate', props.note);
        else
            emit('onAdd', props.note);
    }, 800);
    
</script>

<template>
    <div class="flex justify-center p-3">
        <div
            class="flex flex-col relative p-2 border border-gray-300 rounded-lg w-full focus-within:border-blue-700 focus-within:ring-1 focus-within:outline-none focus-within:ring-blue-700">
            <form>
                <div class=" relative flex w-full border-gray-300 dark:border-gray-600">
                    <textarea rows="1" id="message" maxlength="50" ref="textareaRefTitle" @input="resizeTextareaTitle" @change="onUpdate"
                        placeholder="Title"
                        class="block py-2.5 font-medium text-md w-64 h-auto min-h-0 overflow-hidden text-gray-900 bg-white outline-none resize-none border-none focus:ring-0 focus-within:ring-0 w-full"
                        v-model="note.title"></textarea>
                </div>

                <div class=" flex flex-wrap bg-gree items-center border-gray-300 dark:divide-gray-600 w-full ">
                    <div class=" flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 w-full">
                        <textarea ref="textareaRefContent" id="message" rows="2" @input="resizeTextarea" @change="onUpdate"
                            v-model="note.content" placeholder="Content"
                            class=" block py-2.5 text-sm  h-auto min-h-0 overflow-hidden text-gray-900  outline-none resize-none border-none focus:ring-0 focus-within:ring-0  bg-transparnt w-full  "></textarea>

                    </div>

                </div>

                <!-- spinner -->

                    <Transition enter-active-class="transition ease-in-out" enter-from-class="opacity-0"
                        leave-active-class="transition ease-in-out" leave-to-class="opacity-0">
                        <span v-if="props.note.success">
                            <i
                                class="fa-solid fa-thin fa-check  absolute end-2 bottom-2 text-primary transition duration-300 delay-150 hover:delay-300"></i>
                        </span>
                    </Transition>
                    <Transition enter-active-class="transition ease-in-out" enter-from-class="opacity-0"
                        leave-active-class="transition ease-in-out" leave-to-class="opacity-0">
                        <span v-if="props.note.progress">
                            <i class="fa-solid fa-circle-notch fa-spin  absolute end-2 bottom-2  text-success"></i>
                        </span>
                    </Transition>
                <!-- spinner -->



                <button type="button" @click="onPin" :class="{ 'text-primary': isPinned }"
                    class="absolute flex rounded-lg end-0 ltr:end-0 rtl:end-0 top-3 hover:text-black p-2 text-gray-300">
                    <i class="fa-solid fa-thumbtack fa-sm  "></i>
                </button>


                <button type="button" @click="onDelete"
                    class="flex absolute mr-2 top-3 end-4 ltr:end-4 rtl:end-5 rounded-lg hover:text-black p-2 text-gray-300">
                    <i class="fa-solid fa-trash-can fa-sm"></i>
                </button>



            </form>
        </div>
    </div>
</template>

<style scoped>
    /* Your scoped styles here */
</style>
