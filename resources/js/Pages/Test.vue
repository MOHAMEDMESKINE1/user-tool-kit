<script setup>
import {
Card,
Text,
Title,
Link,
ButtonLink
} from 'vue-component-cua'

import Banner from '@/Pages/Banner.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue'
</script>

<template>

    <GuestLayout>

        <Card class=" max-w-[800px] py-12 lg:mx-auto mx-10  flex flex-col  shadow-sm  rounded-lg bg-white dark:bg-gray-800 ">

           <template #header>
            <div class=" flex flex-col mx-5 ">
                <Title type="h3" class="  justify-left   "> 
                    Authentification à deux facteurs requise
                </Title>
                <Text fontSize="sm"  class=" mt-5 break-words " >
                    Sécurisez votre compte en complétant le processus d'authentification à deux facteurs. Choisissez parmi SMS, e-mail ou Google Authenticator OTP pour continuer.
                </Text>
            </div>
           </template>


           <template #body>
               
                <div class="flex lg:flex-row  flex-col   justify-center w-auto items-center">
                    
                <!-- sms -->
                <div class="relative  focus-within:border-blue-700 focus-within:ring-1 focus-within:outline-none focus-within:ring-blue-700  w-full h-auto p-5 flex  lg:flex-col lg:w-[212px] lg:h-[218px]   lg:justify-center hover:bg-gray-100  lg:items-center  cursor-pointer duration-700 ease-out hover:duration-700   border  rounded-lg bg-white dark:bg-gray-800 m-4 " tabindex="0">


                    <div class="h-15 w-15 lg:pb-8 lg:m-0 me-5 ">
                        <img class="flex w-auto  " src="../../../public/storage/assets/svg/sms.svg" alt="logo" />
                    </div>


                    <div class=" lg:p-0  px-3 flex flex-col lg:items-center">
                        <h1 class="font-medium text-[16px] ">Verification par e-mail</h1>
                        <h1 class="font-medium text-[16px] text-gray-400">h******1@gmail.com</h1>
                    </div>

                </div>
                 <!-- phone -->
                 <div class="relative  focus-within:border-blue-700 focus-within:ring-1 focus-within:outline-none focus-within:ring-blue-700  w-full h-auto p-5 flex  lg:flex-col lg:w-[212px] lg:h-[218px]   lg:justify-center hover:bg-gray-100  lg:items-center  cursor-pointer duration-700 ease-out hover:duration-700   border  rounded-lg bg-white dark:bg-gray-800 m-4 " tabindex="0">


                    <div class="h-15 w-15 lg:pb-8 lg:m-0 me-5 ">
                        <img class="flex w-auto " src="../../../public/storage/assets/svg/phone.svg" alt="logo" />
                    </div>


                    <div class=" lg:p-0  px-3 flex flex-col lg:items-center">
                        <h1 class="font-medium text-[16px] ">Verification par SMS</h1>
                        <h1 class="font-medium text-[16px] text-gray-400">+212*****6285</h1>
                    </div>

                </div>
                <!-- Authenticator -->
                <div class="relative  focus-within:border-blue-700 focus-within:ring-1 focus-within:outline-none focus-within:ring-blue-700  w-full h-auto p-5 flex  lg:flex-col lg:w-[212px] lg:h-[218px]   lg:justify-center hover:bg-gray-100  lg:items-center  cursor-pointer duration-700 ease-out hover:duration-700   border  rounded-lg bg-white dark:bg-gray-800 m-4 " tabindex="0">
                    <img class="w-min h-13 lg:pb-9 lg:m-0 me-5" src="../../../public/storage/assets/svg/google_auth.svg" alt="logo" />
                    <div class="lg:p-0  px-2 flex flex-col lg:items-center">
                        <h1 class="font-medium text-[16px]">Google Authenticator</h1>
                        <h1 class="font-medium text-[16px] text-gray-400">e-agadir</h1>
                    </div>

                </div>

                    
                </div>
           </template>

           <template #footer>
              <div class="flex flex-col">
                <Title type="h6" class="text-center">
                    Plus d information ?
                     <Link class='' to='https://fr-fr.facebook.com/' target='_blank'>
                        <ButtonLink class="text-primary">Visit Website.</ButtonLink>
                    </Link>  
                </Title>
              </div>
           </template>

        </Card>

    </GuestLayout>
</template>



<style lang="css" scoped>

</style>
