<script setup>
import {
Card,
Text,
Title,
TextInput,
GroupInput,
Button
} from 'vue-component-cua'
import GuestLayout from '@/Layouts/GuestLayout.vue'

</script>


<template>
   <GuestLayout>
    <Card class="w-auto h-auto max-w-[500px]  lg:mx-auto mx-10  flex flex-col  shadow-sm  rounded-lg bg-white dark:bg-gray-800">
        <template #header>
            <div>
                <Title type="h3" class="  justify-left font-bold   "> 
                    Numero téléphone verification
            </Title>
            <Text fontSize="sm"  class=" mt-5 break-words " >
                Veuillez prendre un moment pour vérifier votre numéro de téléphone
                Cela nous aide à confirmer votre identité et à sécuriser votre compte.
            </Text>
            </div>
        </template>
        
        <template #body>
            <GroupInput class="my-5" >
                <TextInput start-icon="pi-phone" type='text'  placeholder='+2126542131' name='password' id='password' ></TextInput>
            </GroupInput>

            <GroupInput class="my-5">
                <Button   type="submit"   class="w-full  justify-center ">
                    Next
                </Button>
            </GroupInput>

        </template>

        <template #footer>
            
            <Text fontSize="sm"  class=" mt-2  break-words " >
                Plus d information ? <span class="text-primary">Visit Website.</span>
            </Text>
            
        </template>
    </Card>
   </GuestLayout>
</template>


<style lang="css" scoped>

</style>