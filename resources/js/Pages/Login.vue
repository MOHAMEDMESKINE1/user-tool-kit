
<script setup>
import {TextInput,
Label,
GroupInput,
CheckBox,
Button,
Card,
Text,
Title

} from 'vue-component-cua'
import GuestLayout from '@/Layouts/GuestLayout.vue'
</script>

<template>
<GuestLayout>
    <div class="dark:bg-black dark:text-white">
    <section class="min-h-screen content-center   text-green-600  dark:bg-gray-900">

        <div class="mx-auto md:px-9 max-w-screen-xl g:grid-cols-12 lg:gap-20 lg:py-10">
            <a href="#"
                class="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:mb-10 col-span-12 lg:col-span-auto">
                <img class="lg:mr-14 mb-5 mx-3 w-24 bg-transparent" src="../../../public/storage/assets/svg/logo.svg" alt="logo" />

                <div class="title-container flex flex-col h-10">
                    <div class="grow"></div>
                    <Title type="h1" class="lg:text-3xl text-xl font-bold text-gray-700 dark:text-white" >
                        Plateforme Intégrée des Services de la
                    </Title>
                    <Title type="h1" class="lg:flex text-xl lg:text-5xl mt-1 font-extrabold text-primary" >
                        Commune d'Agadir
                    </Title>
                </div>
            </a>
            <div class="hidden lg:block">
                <div class="flex h-0.5 lg:-mt-7 lg:-mb-7 w-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
        </div>



        <div class="mx-auto max-w-screen-xl -mt-4 md:px-9 px-4 py-8 lg:grid lg:grid-cols-12 lg:gap-20 lg:py-16">
            <div class="col-span-7 mr-10 hidden flex-col justify-between lg:flex xl:mb-0">
                <div>
                    <Text  fontSize='lg' class="mb-10  text-gray-500">
                        Sous la direction avisée de Sa Majesté le Roi Mohammed VI, les
                        efforts du Maroc ont visé à consolider une culture de
                        transformation numérique à tous les niveaux et à investir les
                        opportunités qu'elle offre pour ouvrir de nouvelles perspectives
                        pour faire progresser le développement de notre pays.
                    </Text>

                    <div class="mb-6">
                        <span class="inline-flex items-center mb-3">
                            <i class="pi pi-check-circle text-primary"></i>
                            <Text fontSize="base" class="mx-2 font-bold">
                                Réussir la Transformation Numérique : Naviguer dans la Gestion
                                Moderne
                            </Text>
                        </span>

                        <span class="inline-flex items-center mb-3">
                            <i class="pi pi-check-circle text-primary"></i>
                            <Text fontSize="base" class="mx-2 font-bold">
                                Maximiser l'Efficacité : Rationaliser les Opérations avec une
                                Gestion Numérique
                            </Text>
                        </span>

                        <span class="inline-flex items-center mb-3">
                            <i class="pi pi-check-circle text-primary"></i>
                            <Text fontSize="base" class="mx-2 font-bold">
                                Propulsez Votre Entreprise : Exploitez la Technologie pour une
                                Gestion Efficace
                            </Text>
                        </span>

                        <span class="inline-flex items-center mb-3">
                            <i class="pi pi-check-circle text-primary"></i>
                            <Text fontSize="base" class="mx-2 font-bold">
                                Maîtriser le Leadership Numérique : Stratégies pour une
                                Gestion Efficace à l'Ère Numérique
                            </Text>
                        </span>
                    </div>
                </div>
            </div>



            <div class="col-span-5 mx-auto w-full rounded-lg lg:pb-0 sm:pb-6  dark:bg-gray-800 sm:max-w-lg md:mt-0 xl:p-0">
                <Card class=" mt-5 lg:mt-0 mx-auto">

                    <template #header> 
                        <div class="flex items-center pt-6 lg:mt-0 mt-7 ">
                            <Title type="h5" class="font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                                Content de te revoir
                            </Title>
                            <img class="w-7 h-7 ml-3 mr-3" src="../../../public/storage/assets/svg/emojii.svg" alt="logo" />

                            <Title type="h5" class="font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-2xl">!</Title>
                        </div>

                    </template>

                    <template #body>
                            <form  class="space-y-4 lg:space-y-6 pt-4" action="#">

                                <GroupInput  >
                                    <Label for='username' class="block mb-2">Username</Label>
                                    <TextInput type='text'  placeholder='username' name='username' id='username' ></TextInput>
                                </GroupInput>

                                <GroupInput  >
                                    <Label for='password' class="block mb-2">Password</Label>
                                    <TextInput type='password'  placeholder='password' name='password' id='password' ></TextInput>
                                </GroupInput>

                                <GroupInput >
                                    <div class="flex items-start">
                                        <CheckBox id='check1' name='remember-social' class="h-5 w-5 mr-2"  />
                                        <Label for='remember-social' class="mx-2">Mémoriser cet appareil</Label>
                                    </div>
                                </GroupInput>

                                <GroupInput>
                                    <Button   type="submit"   class="w-full  justify-center ">
                                        Connectez-vous à votre compte
                                    </Button>
                                </GroupInput>
                            </form> 
                    </template>
                
                </Card>
                
            </div>
            
        </div>
       <div class="">
         <Text fontSize="base" class="flex  md:text-xs md:mx-auto lg:text-sm text-xs pt-14  justify-center mx-auto ">
            Commune d'Agadir , Tous droits réservés © 2024
        </Text>
       </div>
       
    </section>
</div>
</GuestLayout>

</template>


<style lang="css" scoped>

</style>