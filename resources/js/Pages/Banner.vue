<template>
    <Transition name="fade">
        <nav v-if="!isClose" class="bg-[#35bb8e] dark:bg-gray-900   h-[40px]  w-full ">

        <div class="flex flex-row">

            <div class="flex flex-1 h-[40px]  items-center justify-center">

                <div
                    class="rtl:space-x-reverse flex  h-auto  content-center text-white  items-center justify-center">

                    <a href="">
                        <span class="text-sm font-normal dark:bg-gray-900">{{text}}</span>
                    </a>
                    <i class="pi pi-lock  text-xs px-5"></i>

                </div>

            </div>


            <div class="flex flex-initial">

                <div class="flex pe-2">

                    <button @click="onClose" type="button" class="text-white dark:text-white">
                        <i class="pi pi-times"></i>
                    </button>

                </div>

            </div>
        </div>

        </nav>
    </Transition>
</template>

<script setup>
defineProps({
    text:String
})
import { ref } from 'vue';


const isClose = ref(false);

const onClose = () =>{
    isClose.value = true

}

</script>

<style lang="css" scoped>
  .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>