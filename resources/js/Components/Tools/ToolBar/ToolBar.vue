<script setup>
    import AddButton from '../AddButton.vue'

    import {
        computed,
        defineEmits,
        ref
    } from 'vue';

    const emit = defineEmits(['componentSelected', 'toggleToolbar']);
    const activeComponent = ref('');

    const selectComponent = (component) => {

        emit('componentSelected', component);
        activeComponent.value = component
        isToolbarVisible.value = true;
    };

    const isToolbarVisible = ref(false);

    const toggleToolbar = () => {

        if (isToolbarVisible.value) {
            emit('componentSelected', '');

        } else {
            if (activeComponent.value != '') {
                emit('componentSelected', activeComponent.value);
            } else {
                activeComponent.value = "Notes";
                emit('componentSelected', activeComponent.value);
            };
        }

        isToolbarVisible.value = !isToolbarVisible.value;
    };

    const chevronIcon = computed(() => {
        return !isToolbarVisible.value ?
            'fa-solid fa-chevron-left fa-sm py-1' :
            'fa-solid fa-chevron-right fa-sm py-1';
    });
</script>

<template>




    <aside id="logo-sidebar"
        class=" end-0 z-5 w-auto   border-e h-auto   bg-blue-500 border-s border-gray-200  dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">

        <div class="h-full  w-min bg-white z-10  px-2 pb-4 overflow-y-auto dark:bg-gray-800">
            <div class="flex w-min flex-col items-center space-y-2 h-full font-medium">
                <div class="flex-none content-center py-4 pt-20">

                    <a @click="selectComponent('Notes')" href="#"
                        :class="{ 'text-blue-700': activeComponent === 'Notes' }"
                        class="flex items-center py-4 px-4  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="fa-regular fa-pen-to-square fa-md"></i>
                    </a>

                </div>

                <div class="flex-none content-center py-4">
                    <a @click="selectComponent('Tasks')" href="#"
                        :class="{ 'text-blue-700': activeComponent === 'Tasks' }"
                        class="flex items-center py-4 px-4  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="fa-regular fa-clipboard fa-md"></i>
                    </a>
                </div>

                <div class="flex-none content-center py-4">
                    <a @click="selectComponent('Calendar')" href="#"
                        :class="{ 'text-blue-700': activeComponent === 'Calendar' }"
                        class="flex items-center py-4 px-4  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="fa-regular fa-calendar fa-md"></i>
                    </a>
                </div>

                <div class="flex-none content-center py-4">
                    <a @click="selectComponent('Contacts')" href="#"
                        :class="{ 'text-blue-700': activeComponent === 'Contacts' }"
                        class="flex items-center py-4 px-4  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="fa-solid fa-users fa-md"></i>
                    </a>
                </div>
                <div class="flex-1 w-max"></div>

                <div class="flex-none content-center pb-1">
                    <a @click="toggleToolbar" href="#"
                        class="flex items-center py-4 px-4  rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group">
                        <i :class="chevronIcon"></i>
                    </a>
                </div>
            </div>
        </div>

            <div v-if="isToolbarVisible" @click="toggleToolbar"
                class="fixed start-0 end-0 top-0 bottom-0   -z-10  bg-black opacity-50"></div>


    </aside>

</template>



<style scoped>

</style>
