<script setup>
</script>

<template>
  
    <div class=" bg-gray-100">
     
        <div
            class=""
        >
        <div class="flex items-center flex-col justify-center min-h-screen p-2">
            
            <a href="#"
                class="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:mb-10 col-span-12 lg:col-span-auto">
                <img class=" mb-5 mx-auto w-24 bg-transparent" src="../../../public/storage/assets/svg/logo.svg"
                    alt="logo" />
            </a>
            
            <slot />

            
            <Text fontSize="base"
                class=" flex pt-10  md:text-xs md:mx-auto lg:text-sm text-xs mb-1  justify-center mx-auto ">
                Commune d'Agadir , Tous droits réservés © 2024
            </Text>
        </div>
           
        </div>
    </div>
</template>
