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
        Avatar
    } from 'vue-component-cua'
    import GuestLayout from '@/Layouts/GuestLayout.vue'
</script>

<template>

   <GuestLayout>
        <div class="bg-slate-50  dark:bg-black dark:text-white">
            <div class="min-h-screen content-center bg-gray-50 dark:bg-gray-900">



                <div
                    class="mx-5  py-4 lg:mx-auto flex flex-row  md:px-9 items-center  justify-center max-w-screen-xl lg:gap-4 gap-2">


                    <!-- <img class=" lg:h-24  border  h-20 rounded-full"
                        src="https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png" alt=""> -->
                    <Avatar type='img' src='https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png' size='lg' alt='avatar' rounded='full' />

                    <div class="  h-0.5  w-10  lg:w-14 bg-gray-300 dark:bg-gray-700"></div>

                
                    <i class="pi pi-link   text-3xl   text-success transform rotate-45"></i>

                    <div class="  h-0.5  w-10 lg:w-14 bg-gray-300 dark:bg-gray-700"></div>


                    <!-- <img class="lg:h-24 h-20 border rounded-full"
                        src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
                        alt=""> -->
                    <Avatar type='img' src='https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png' size='lg' alt='avatar' rounded='full' />



                </div>

                <div class="flex justify-center font-medium  dark:text-white text-black text-[20px] pt-6">
                    <Title type="h6">Authorize my-test-oauth-app </Title>
                </div>



                <Card class="lg:mx-auto md:mx-auto sm:mx-auto max-w-[650px]  dark:bg-gray-800 m-4 px-1">
                
                    <template #header>
                        <div class="flex w-full items-center  py-3 px-6 lg:mt-6 mt-3">

                            <div class="pe-2">
                                <!-- <img class=" h-10 w-10  rounded-full"
                                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z"
                                    alt=""> -->
                                <Avatar type='img' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z'
                                 size='md' alt='avatar' rounded='full' />

                            </div>
                            <div class="flex flex-col">
                                <div class="flex">

                                    <Text fontSize="sm" class="font-medium ">my-test-oauth-app by</Text>

                                    <Text fontSize="sm" class="ms-2 text-[#0057FF] font-medium ">my-user</Text>


                                </div>
                                <Text fontSize="sm" class="text-gray-500 font-medium "> wants to access your my-user
                                    account</Text>
                            </div>

                            </div>

                    </template>

                    <template #body>
                        <div class="flex   w-full   items-center px-6 py-3">
                            <div class="flex flex-col">
                                <div class="flex">

                                    <Text fontSize="sm" class="text-black dark:text-white font-semibold">
                                        Make sure you trust Appname
                                    </Text>

                                </div>

                                <Text fontSize="sm" class="text-gray-500 font-medium ">You'll be asked for permission
                                    to give Turnitin
                                    access to 'View users on
                                    your domain'. Google supplies some extra information about what you
                                    are agreeing to.
                                </Text>

                                <div class="flex h-px mt-2 w-full bg-gray-200 dark:bg-gray-700"></div>
                            </div>

                        </div>



                        <div class="px-8">

                            <Text fontSize="sm" class="text-black  py-2 dark:text-white font-bold">This Will allow
                                AppName to:</Text>

                        </div>

                        <div class="flex  w-full items-center px-16  py-2">
                            <div class="flex flex-col">
                                <div class="flex">
                                    <Text fontSize="sm" class="text-gray-500 font-medium ">View users on your
                                        domain</Text>
                                </div>
                            </div>
                            <div class="flex-1"></div>
                            <div>
                                <i class="pi pi-check"></i>
                            </div>
                        </div>
                        <div class="flex  w-full items-center px-16  py-2">
                            <div class="flex flex-col">
                                <div class="flex">
                                    <Text fontSize="sm" class="text-gray-500 font-medium ">View users on your
                                        domain</Text>
                                </div>
                            </div>
                            <div class="flex-1"></div>
                            <div>
                                <i class="pi pi-check"></i>
                            </div>
                        </div>



                        <div class=" py-2 ">
                            <div class="flex h-px   w-full bg-gray-200 dark:bg-gray-700"></div>
                        </div>




                        <div class="flex justify-center lg:py-8 py-2">
                            <div class=" w-full  ps-6 pe-4">

                                <!-- <button
                                    class="w-full mb-2 py-2 rounded-md lg:text-[14px] text-[12px] focus:outline-none bg-[#E5E7EB] text-black">
                                    Cancel
                                </button> -->

                                <Button color="secondary"
                                    class="w-full justify-center py-2 rounded-md lg:text-[14px] text-[12px]   ">
                                    Cancel
                                </Button>
                            </div>
                            <div class=" w-full  pe-6 ps-4">
                                <!-- <button

                                    class="w-full py-2 text-white lg:text-[14px] text-[12px] rounded-md focus:outline-none bg-primary">
                                    Authorize my-user
                                </button> -->
                                <Button class="w-full justify-center py-2 rounded-md lg:text-[14px] text-[12px]  ">
                                    Authorize my-user
                                </Button>
                            </div>
                        </div>
                    </template>

                    <template #footer>
                        <div class="flex flex-col  items-center lg:mb-6 mb-3 py-3">
                            <Text fontSize="sm" class="text-gray-500 font-medium ">Authorizing will redirect to</Text>
                            <a href=""
                                class="text-gray-800 dark:text-white font-medium text-[14px]">https://teleport.example.com</a>
                        </div>
                    </template>
                </Card>
                <div class="flex text-gray-500 md:text-xs md:m lg:text-sm text-xs pt-24 lg:flex justify-center">
                    Commune d'Agadir , Tous droits réservés © 2024
                </div>
            </div>
        </div>
   </GuestLayout>


</template>



<style lang="scss" scoped>

</style>
