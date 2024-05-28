<script setup>
    import Tools from '@/Components/Tools/Tools.vue'
    import SideBar from './SideBar/SideBar.vue';
    import NavBar from './NavBar.vue';
    import Button from "primevue/button"

    import {
        ref
    } from 'vue';

    const activeComponent = ref('');

    const handleComponentSelected = (component) => {
        activeComponent.value = component;
    };

    const isSidebarOpen = ref(false);

    const handleToggleBar = () => {
        
        isSidebarOpen.value = !isSidebarOpen.value;
       
    };

</script>

<template>
    <section class="flex min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 start-0 pe-[70px]  ">
        
       

           
          
                <!-- sideBar -->
            <SideBar :isOpen="isSidebarOpen"  @onToggleBar="handleToggleBar" />
            <!-- sideBar -->

           
            
         

            <div class="w-full  flex   flex-col grow">
            
            <!-- navbar -->
            <NavBar  :isOpen="isSidebarOpen"  @onToggleBar="handleToggleBar" />
            <!-- navbar  -->


            <!-- content -->
            <div class="w-full  relative   flex flex-1">
                <div class="flex w-full ">
                    <aside
                        class="w-full h-full  overflow-y-auto  border-e border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                        <div class="h-72  dark:bg-gray-800 w-full ">
                            <div class="flex flex-col  font-medium w-full">

                                <slot />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <!-- content -->


        </div>

        <!-- tools -->
        <Tools />
        <!-- tools -->

    </section>

</template>
<style lang="css" scoped>
  
</style>
