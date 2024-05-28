<script setup>
    import {DateInput} from 'vue-component-cua'
    import Calendar from 'primevue/calendar';
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
        event: Object,
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
        console.log(props.event.date);
    })



    const emit = defineEmits(['onDelete', 'onPin', 'onUpdate','onAdd']);

    const onDelete = () => {
        emit('onDelete', props.event);
    };

    const isPinned = ref(props.event.pinned);
    const onPin = () => {

        isPinned.value = !isPinned.value;

        emit('onPin', props.event, isPinned.value);

    };


    const onUpdate = debounce((event) => {

        if (props.event.id != null)
            emit('onUpdate', props.event);
        else
            emit('onAdd', props.event);

    }, 800);

    
</script>

<template>

    <div class="flex justify-center p-3">
        <div
            class="flex flex-col relative p-2 border border-gray-300 rounded-lg w-full focus-within:border-blue-700 focus-within:ring-1 focus-within:outline-none focus-within:ring-blue-700">
            <form>
                <div class="relative flex dark:border-gray-600">
                    <textarea rows="1" id="message" ref="textareaRefTitle" @input="resizeTextareaTitle" @change="onUpdate"
                        v-model="event.title"
                        class="block py-3 font-medium text-md w-full h-auto min-h-0 overflow-hidden text-gray-900 bg-white outline-none resize-none border-none focus:ring-0 focus-within:ring-0"
                        oninput="this.style.height = 'auto'; this.style.height = (this.scrollHeight) + 'px';" placeholder="Note Title"></textarea>
                </div>

                <div class="flex flex-wrap items-center dark:divide-gray-600">
                    <div class="flex items-center space-x-1 w-full rtl:space-x-reverse sm:pe-4">
                        <textarea id="message" rows="1" ref="textareaRefContent" @input="resizeTextarea" @change="onUpdate"
                            v-model="event.content"
                            class="py-2.5 text-sm w-full h-auto min-h-0 overflow-hidden text-gray-500 bg-white outline-none resize-none border-none focus:ring-0 focus-within:ring-0 "
                            oninput="this.style.height = 'auto'; this.style.height = (this.scrollHeight) + 'px';" placeholder="Note Content"></textarea>
                    </div>
                </div>

                <div class="flex">
                    <i class="fa-regular fa-calendar fa-md text-sm ms-0.5"></i>
                    <Calendar 
                        class="w-full ms-2 p-0"
                        @date-select="onUpdate"
                        dateFormat="dd MM yy"
                        hourFormat="hh:mm"
                        v-model="event.date"
                        placeholder="Date"
                        showTime
                        :pt="{
                            panel: { class: 'min-w-min w-10rem'},
                            root: { class: 'border-none   rounded-md  w-ful shadow-none focus-within:outline-none  focus-visible:outline-none focus:outline-none' },
                            inputIcon: { class: 'text-error end-3 right-none' },
                            input: { class: 'border-none text-sm shadow-none focus-within:outline-none focus:outline-none' },
                        }" />

                      

                </div>
            </form>
            <!-- spinner -->
            <div class="flex justify-end">

                <Transition enter-active-class="transition ease-in-out" enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out" leave-to-class="opacity-0">
                    <span class="text-gray-600  mx-2 " v-if="props.event.success">
                        <i
                            class="fa-solid fa-thin fa-check text-primary transition duration-300 delay-150 hover:delay-300"></i>
                    </span>
                </Transition>

                <span v-if="props.event.progressing">
                    <i class="fa-solid fa-circle-notch fa-spin  text-success"></i>
                </span>

            </div>
            <!-- spinner -->


            <button type="button" @click="onPin" :class="{ 'text-primary': isPinned }"
                class="absolute flex rounded-lg end-0 ltr:end-0 rtl:end-0 top-3 hover:text-black p-2 text-gray-300">
                <i class="fa-solid fa-thumbtack fa-sm  "></i>
            </button>

            <button type="button" @click="onDelete"
                class="flex absolute mr-2 top-3 end-4 ltr:end-4 rtl:end-5 rounded-lg hover:text-black p-2 text-gray-300">
                <i class="fa-solid fa-trash-can fa-sm"></i>
            </button>
        </div>
    </div>
</template>



<style scoped>
    .p-focus input {
        outline-offset: 0px !important;
        outline: -webkit-focus-ring-color auto 0px !important;
    }
</style>
