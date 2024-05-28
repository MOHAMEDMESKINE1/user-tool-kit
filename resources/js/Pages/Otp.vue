<script setup>
    import {
        TextInput,
        Label,
        GroupInput,
        CheckBox,
        Button,
        Card,
        Text,
        Title,
        Otp

    } from 'vue-component-cua'
    import GuestLayout from '@/Layouts/GuestLayout.vue'
</script>
<template>

    <GuestLayout>
       
        <div class="flex items-center flex-col justify-center min-h-screen">
            <!-- <div class="px-2 mb-5 ">
                <div class="flex  mx-5  bg-gray-100 p-1 rounded-lg">
                    <div
                        class="px-2  py-0.5 rounded-md text-gray-600 hover:bg-gray-200  focus:bg-gray-600 focus:text-white ">
                        <span class="font-semibold mr-1 text-lg pl-1">ع</span>
                    </div>

                    <div class="px-2  py-0.5  bg-gray-600 rounded-md text-white  focus:bg-gray-600 focus:text-white ">
                        <span class="font-semibold text-lg">FR</span>
                    </div>
                </div>
            </div> -->
            <a href="#"
                class="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:mb-10 col-span-12 lg:col-span-auto">
                <img class=" mb-5 mx-auto w-24 bg-transparent" src="../../../public/storage/assets/svg/logo.svg"
                    alt="logo" />
            </a>
            
            <Card class="max-w-[500px]">
                <template #header>
                    <div class="">
                        <Title type="h3" class=" my-2 font-extrabold text-gray-900 dark:text-white">
                            Vérification OTP !
                        </Title>
                        <Text fontSize="sm" class="mt-6">
                            Veuillez envoyer le code de vérification que vous avez reçu au +21266276****
                        </Text>

                    </div>

                </template>

                <template #body>
                    <div class="mt-6">
                        <Otp integerOnly class="mb-4"> </Otp>
                        <Button type="submit" class="w-full  justify-center ">
                            Vérifier et continuer
                        </Button>
                    </div>
                </template>

                <template #footer>
                    <Text fontSize="sm" class="mt-4">
                        Vous ne recevez pas de code OTP ? <span class="text-primary">Renvoyer à nouveau.</span>
                    </Text>
                </template>
            </Card>

            <Text fontSize="base"
                class=" flex pt-10  md:text-xs md:mx-auto lg:text-sm text-xs mb-1  justify-center mx-auto ">
                Commune d'Agadir , Tous droits réservés © 2024
            </Text>
        </div>
    </GuestLayout>

</template>

<style lang="css" scoped>

</style>
