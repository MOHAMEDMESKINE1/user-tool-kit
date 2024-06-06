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
        
            <Card class="max-w-md  ">
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

         
    </GuestLayout>

</template>

<style lang="css" scoped>

</style>
