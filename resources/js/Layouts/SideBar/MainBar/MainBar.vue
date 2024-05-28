<script setup>
defineProps( {
    title:String
})
</script>

<template>
    <aside
        class=" h-screen  bg-white border-e  border-gray-200   dark:bg-gray-800 dark:border-gray-700 lg:flex">
        <div class="w-72 lg:w-80 h-full bg-white dark:bg-gray-800 ">
            <div class="h-full font-medium w-auto ">
                <div class="px-4 ">
                    <h1 class="lg:mt-20 mt-10  font-normal text-2xl dark:text-white text-gray-900">
                        {{title}}
                    </h1>
                    <div class="flex h-px mt-2 w-full bg-black dark:bg-white"></div>
                </div>

                <div class=" mt-20 ">
                
                  <slot name="content"/>           
                    
                </div>

            </div>
        </div>


    </aside>
</template>



<style lang="css" scoped>

</style>