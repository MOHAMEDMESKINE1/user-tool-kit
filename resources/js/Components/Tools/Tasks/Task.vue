<script setup>
    import TaskItem from './TaskItem.vue'
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
        task: Object
    })
    const emit = defineEmits(['onDelete', 'onPin', 'onUpdate','onAdd']);

    const isPinned = ref(props.task.pinned);

    const onPin = () => {

        isPinned.value = !isPinned.value;

        emit('onPin', props.task, isPinned.value);

    };

    onMounted(() => {
        
   if (props.task.tasks.indexOf( props.task.tasks.length-1).content !="") {
                props.task.tasks.push({
                    id: Math.ceil(Math.random() * 1000) +"",
                    content: '',
                    done: false,

                })
            }
    })
    const onDelete = () => {
        emit('onDelete', props.task);
    };

    const onUpdate = debounce((event) => {

   
        if (props.task.id != null)
            emit('onUpdate', props.task);
        else
            emit('onAdd', props.task);


    }, 800);
    const onItemUpdate = (item) => {

        console.log("itemTask Update:", item);
        if (item.content === "") {
            onItemDelete(item)
        } else {
            if (props.task.tasks.indexOf(item) == props.task.tasks.length - 1) {
                props.task.tasks.push({
                    id: null,
                    content: '',
                    done: false,

                })
            }
        }
        emit('onUpdate', props.task);
    }

    const onItemDelete = (item) => {
        
        props.task.tasks.splice(props.task.tasks.indexOf(item), 1);

    }
</script>
<template>
    <div class="flex justify-center p-3 w-full">
        <div
            class="flex flex-col relative p-2 border border-gray-300 rounded-lg w-full focus-within:border-blue-700 focus-within:ring-1 focus-within:outline-none focus-within:ring-blue-700">
            <form>
                <div class="relative flex border-gray-300 dark:border-gray-600">
                    <textarea rows="1" id="message" @change="onUpdate" v-model="task.title"
                        class="block py-2.5 font-medium text-md w-full h-auto min-h-0 overflow-hidden text-gray-900 bg-white outline-none resize-none  border-none focus:ring-0 focus-within:ring-0"
                        oninput="this.style.height = 'auto'; this.style.height = (this.scrollHeight) + 'px';"
                        placeholder="Tâches d'aujourd'hui"></textarea>
                </div>

                <div class="flex flex-col bg-gree items-start border-gray-300 dark:divide-gray-600">

                    <TaskItem v-for="item in task.tasks" :key="item.id" 
                    :item="item"
                    @onUpdate="onItemUpdate"
                    
                     />

                </div>

                <!-- spinner -->
                <div class="flex justify-end">

                    <Transition enter-active-class="transition ease-in-out" enter-from-class="opacity-0"
                        leave-active-class="transition ease-in-out" leave-to-class="opacity-0">
                        <span class="text-gray-600  mx-2 " v-if="props.task.success">
                            <i
                                class="fa-solid fa-thin fa-check text-primary transition duration-300 delay-150 hover:delay-300"></i>
                        </span>
                    </Transition>

                    <span v-if="props.task.progressing">
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
            </form>
        </div>
    </div>
</template>



<style lang="scss" scoped>

</style>
