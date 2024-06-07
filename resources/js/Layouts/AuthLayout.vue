<script setup>
    import Tools from '@/Components/Tools/Tools.vue'
    import SideBar from './SideBar/SideBar.vue';
    import NavBar from './NavBar.vue';
    import {Banner,ButtonLink} from  'vue-component-cua'

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
    <div class="h-screen flex flex-col">

 
    <!-- <Banner text="Activer la sécurité Nécessaire" class="flex-none"/> -->

    <Banner  color='success' >
        <i class='text-xs pi pi-bell'></i>
        <span class='text-xs flex items-center font-normal dark:bg-gray-900 mx-2'>Activer la sécurité Nécessair <ButtonLink class='flex items-center ms-1' size='xs' color='secondary' >Learn More</ButtonLink>  </span>
    </Banner>
    <section class="flex flex-1 bg-gray-50   overflow-hidden dark:bg-gray-900 start-0 pe-[70px]  relative ">
        
       

           
          
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
                            <div class="flex flex-col  font-medium w-full p-10">
                             
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
</div>
</template>
<style lang="css" scoped>
  
</style>
