<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <!-- 
        min-h-screen flex flex-col sm:justify-center w-full items-center pt-6 sm:pt-0
     -->
    <div class=" bg-gray-100">
        <!-- <div>
            <Link href="/">
                <ApplicationLogo class="w-20 h-20 fill-current text-gray-500" />
            </Link>
        </div> -->
        <!-- 
            w-full  mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg
         -->
        <div
            class=""
        >
            <slot />
        </div>
    </div>
</template>
