<script setup>
    import {
        ref,
        defineEmits
    } from "vue";

    import {
        Button
    } from 'vue-component-cua'

    const props = defineProps({

        isOpen: Boolean

    })

    const emit = defineEmits(['onToggleBar']);

    const toggleBar = () => {

        emit("onToggleBar");

    };

    const isLang = ref(false)
    const state = ref(false);
    const isNotif = ref(false)
    const isAllApps = ref(false)


    // language
    const isLangClick = () => {

        isLang.value = !isLang.value
        state.value = !state.value;

    }
    const handleLangClickisAway = () => {
        isLang.value = false;

    };

    // all Apps
    const isAllAppsClick = () => {

        isAllApps.value = !isAllApps.value
        state.value = !state.value;

    }
    const handleAllApsClickAway = () => {

        isAllApps.value = false;
    };

    //notificiation
    const isNotifClick = () => {

        isNotif.value = !isNotif.value
        state.value = !state.value;
    }

    const handleNotifClickAway = () => {

        isNotif.value = false;

    };
</script>
<template>
    <nav
        class=" z-20 flex-none bg-white  dark:bg-gray-900   h-min  w-full  border-b border-gray-200 dark:border-gray-600">

        <div class="relative flex p-4 h-auto items-center justify-between px-2">


            <div class="flex flex-1 items-center justify-center">

                <div class="rtl:space-x-reverse flex flex-col w-full">

                    <a href="">
                        <span
                            class="text-md font-semibold dark:bg-gray-900   dark:text-white lg:flex  hidden">Application
                            Name</span>
                    </a>

                    <!-- toggle  -->
                    <div class=" p-1">

                        <span @click="toggleBar"
                            class=" fa-solid fa-bars fa-xl lg:hidden  py-0.5 px-1  dark:text-white cursor-pointer"></span>
                    </div>
                    <!-- toggle  -->
                </div>

            </div>



            <div class="flex flex-initial">

                <div class="flex px-2">

                    <button type="button" @click="isLangClick"
                        class="p-1 bg-gray-100 rounded-lg text-gray-600 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500">
                        <i class="px-1  py-0.5 fa-solid fa-language fa-lg"></i>
                    </button>

                    <Transition name="fade">
                        <div v-if="isLang" class="" v-click-away="handleLangClickisAway">

                            <div
                                class=" z-10 absolute top-20 end-44 lg:end-[345px] bg-white divide-y divide-gray-100 rounded-lg border w-36 dark:bg-gray-700 dark:divide-gray-600">
                                <div class="text-sm font-semibold text-gray-700 dark:text-gray-200">


                                    <div>
                                        <a href="#"
                                            class="px-2 flex group py-2 focus:bg-language hover:bg-language hover:bg-opacity-15   focus:bg-opacity-15 rounded-t-lg  dark:hover:bg-gray-600 dark:hover:text-white">
                                            <div
                                                class="h-5 w-5  rounded-md  group-hover:bg-green-700  group-focus:bg-green-700 group-focus:text-white group-hover:text-white text-gray-600 bg-gray-200  ">
                                                <span class="flex justify-center ">ع</span>
                                            </div>
                                            <span class="px-2">الـعـربــية</span>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="#"
                                            class="px-2 flex group py-2 focus:bg-language hover:bg-language hover:bg-opacity-15   focus:bg-opacity-15 rounded-b-lg  dark:hover:bg-gray-600 dark:hover:text-white">
                                            <div
                                                class="h-5 w-5  rounded-md  group-hover:bg-primary  group-focus:bg-primary group-focus:text-white group-hover:text-white text-gray-600 bg-gray-200    ">
                                                <span class="flex justify-center">Fr</span>
                                            </div>
                                            <span class="px-2 ">Français</span>
                                        </a>

                                    </div>


                                </div>

                            </div>

                        </div>
                    </Transition>
                </div>


                <div class="flex px-2">

                    <button type="button" @click="isAllAppsClick"
                        class="p-1 bg-gray-100 rounded-lg text-gray-600 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500 ">
                        <i class="px-2  py-0.5 fa-solid fa-border-all fa-lg"></i>
                    </button>

                </div>
                <Transition name="fade">
                    <div v-if="isAllApps" v-click-away="handleAllApsClickAway"
                        class="z-10 absolute top-10 end-20 lg:end-[250px] flex flex-row bg-white justify-between m-10  h-auto w-auto shadow-sm rounded-lg border">


                        <div class=" m-1">
                            <div class="p-3 flex flex-col  items-center">
                                <div>
                                    <i class="fa-solid fa-bag-shopping text-gray-400 fa-xl"></i>
                                </div>
                                <span class="text-[18px] text-gray-700 font-light p-2">Sales</span>
                            </div>
                            <div class="p-3 flex flex-col   items-center">

                                <div>
                                    <i class="fa-solid fa-user  text-gray-400 fa-xl"></i>
                                </div>
                                <span class="text-[18px] text-gray-700 font-light p-2">Profile</span>
                            </div>

                            <div class="p-3 flex flex-col   items-center">
                                <div>
                                    <i class="fa-solid fa-money-bills text-gray-400 fa-xl"></i>
                                </div>
                                <span class="text-[18px] text-gray-700 font-light  p-2 ">Pricing</span>
                            </div>
                        </div>


                        <div class="m-1">
                            <div class="p-3 flex flex-col   items-center">
                                <div>
                                    <i class="fa-solid fa-user-group text-gray-400 fa-xl"></i>
                                </div>
                                <span class="text-[18px] text-gray-700 font-light p-2">Users</span>
                            </div>


                            <div class="p-3 flex flex-col   items-center">
                                <div>
                                    <i class="fa-solid fa-gear text-gray-400 fa-xl"></i>
                                </div>
                                <span class="text-[18px] text-gray-700 font-light p-2">Settings</span>
                            </div>

                            <div class="p-3 flex flex-col   items-center">
                                <div>
                                    <i class="fa-solid fa-ticket fa-xl text-gray-400"></i>
                                </div>
                                <span class="text-[18px] text-gray-700 font-light p-2 ">Billing</span>
                            </div>
                        </div>

                        <div class=" m-1">
                            <div class="p-3 flex flex-col   items-center">

                                <div>
                                    <i class="fa-solid fa-inbox text-gray-400 fa-xl"></i>
                                </div>
                                <span class="text-[18px] text-gray-700 font-light p-2">Inbox</span>

                            </div>


                            <div class="p-3 flex flex-col   items-center">
                                <div>
                                    <i class="fa-solid fa-box-archive text-gray-400 fa-xl"></i>
                                </div>
                                <span class="text-[18px] text-gray-700 font-light p-2">Products</span>

                            </div>

                            <div class="p-3 flex flex-col  items-center">
                                <div>
                                    <i class="fa-solid fa-right-from-bracket text-gray-400 fa-xl"></i>
                                </div>
                                <span class="text-[18px] text-gray-700 font-light p-2">Logout</span>
                            </div>

                        </div>

                    </div>

                </Transition>


                <div class="flex px-2">
                    <button type="button" @click="isNotifClick"
                        class="p-1 bg-gray-100 rounded-lg text-gray-600 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500">
                        <i class="px-2 py-0.5 fa-regular fa-bell fa-lg"></i>
                    </button>
                </div>


                <Transition name="fade">
                    <div v-if="isNotif" v-click-away="handleNotifClickAway"
                        class="z-20 absolute top-20 end-20 lg:end-56  w-auto lg:w-full max-w-sm max-h-lg  divide-y divide-gray-100  dark:bg-gray-800 dark:divide-gray-700 rounded-lg border dark:border-gray-700">


                        <div
                            class="px-6 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-900 dark:text-white ">
                            Notifications
                        </div>


                        <div class="divide-y divide-gray-100 dark:divide-gray-700">


                            <a href="#"
                                class="flex px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-gray-800">

                                <div class="flex-shrink-0 content-center ">
                                    <img class="rounded-full  w-11 h-11"
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z">
                                </div>

                                <div class="w-full ps-3">
                                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Une réunion
                                        est
                                        prévue le 03/05/2024 à 11:00 dans la salle de réunion. Votre
                                        participation
                                        est essentielle.Merci.
                                        <span class="font-semibold text-gray-900 dark:text-white">Mohamed
                                            Ali</span>
                                    </div>
                                    <div class="text-xs text-blue-600 dark:text-blue-500">il y a 5 minutes
                                    </div>
                                </div>
                            </a>


                            <a href="#"
                                class="flex px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-gray-800">

                                <div class="flex-shrink-0 content-center">
                                    <img class="rounded-full w-11 h-11"
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z">
                                </div>

                                <div class="w-full ps-3">
                                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Des
                                        changements
                                        seront dans les procédures concernant (sujet). Ces changements entreront
                                        en
                                        vigueur à partir du 07/05/2024.

                                        <span class="font-semibold text-gray-900 dark:text-white">Mohamed
                                            Ali</span>
                                    </div>
                                    <div class="text-xs text-blue-600 dark:text-blue-500">il y a 10 minutes
                                    </div>
                                </div>
                            </a>

                            <a href="#"
                                class="flex px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-gray-800">

                                <div class="flex-shrink-0 content-center">
                                    <img class="rounded-full w-11 h-11"
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z">
                                </div>

                                <div class="w-full ps-3">
                                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Un rappel
                                        amical
                                        que la date limite pour (projet) est le 25/06/2024 . Assurez-vous de
                                        soumettre votre travail à temps pour éviter tout retard.

                                        <span class="font-semibold text-gray-900 dark:text-white">Mohamed
                                            Ali</span>
                                    </div>
                                    <div class="text-xs text-blue-600 dark:text-blue-500">il y a 20 minutes
                                    </div>
                                </div>
                            </a>



                            <a href="#"
                                class="flex px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-gray-800">

                                <div class="flex-shrink-0 content-center">
                                    <img class="rounded-full w-11 h-11"
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z">
                                </div>

                                <div class="w-full ps-3">
                                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Vous êtes
                                        invités
                                        à (événement) le 10/05/2024 à 10:00. Merci de confirmer votre présence.

                                        <span class="font-semibold text-gray-900 dark:text-white">Mohamed
                                            Ali</span>
                                    </div>
                                    <div class="text-xs text-blue-600 dark:text-blue-500">il y a 30 minutes
                                    </div>
                                </div>
                            </a>


                            <a href="#"
                                class="flex px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-gray-800">

                                <div class="flex-shrink-0 content-center">
                                    <img class="rounded-full w-11 h-11"
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z">
                                </div>

                                <div class="w-full ps-3">
                                    <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Formation sur
                                        (sujet) le 14/04/2024 à 14:00. Inscrivez-vous dès maintenant. Merci.

                                        <span class="font-semibold text-gray-900 dark:text-white">Mohamed
                                            Ali</span>
                                    </div>
                                    <div class="text-xs text-blue-600 dark:text-blue-500">il y a 15 jour</div>
                                </div>
                            </a>


                        </div>


                        <a href="#"
                            class="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50  hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white">
                            <div class="inline-flex items-center  ">
                                <i class="fa-solid fa-eye px-2"></i>
                                View all
                            </div>
                        </a>
                    </div>


                </Transition>


                <div class="flex pl-2">

                    <div
                        class="relative  flex rounded-lg bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <img class="h-auto w-10 rounded-md"
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgGCgkGBwoHBwYGBg8UFQYWIB0WIhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANBABAQACAAMGAgYLAQAAAAAAAAIBAwQREiEiMTJSYhNyBTNTgqHBI0FCUWFxgZGSk7EU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6oAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8qpic1WcYmfNVM/fxV3nOIzmY/GwXNvEa9XZVc6+znxVb4+s57kTj5u1UAWP/bu/fH+t1PHbMeM6s/d5KoC/HHRnzxc/L2rWM4zjGceFMZJp33pz3c85+zrwBrDjVsnbGKn70+h2AAAAAAAAAAAAAAABnPLGc58J7wM/j9ma2/D59kT5f4qr26zV5rPjVdTxQAAAAABZ4C8zu6OfZctFkaKzO/XnHrlroAAAAAAAAAAAAAACPfnlo2fJSRHvxz0bMeygZICgAAAAADqM9NzXpqabDFbWPBAAAAAAAAAAAAAAARb9k69ec3z5V3e6lVuPxz0Yz6bkGcAoAAAAAA9xy545+DW1XOyMXPVyr1Mhp8Hjlw8e7qr8UE4AAAAAAAAAAAAACHip6+HvHpnq/smeVOKnM58KnpoGMJeI0fAqcdXVivL3USgAAAAAA19U9GqJ9MqHDcN8bHVnPKZr/JpIAAAAAAAAAAAAAAAAKv0hHVqm8fsV/wBZ7ZqcXOZrwqemmTu151bMxnt6fLXqwDgBQAABJw+v4u3E58vmr+QL/CR0aJxnxr9JX9U4IAAAAAAAAAAAAAAAADP+kfrp+T8167iJ53Uzj3MzitmNu3qnyzPTIIgFAABa+jvrq+T81VNwuzGrdiq8tT00DUHMXFzzisVj2ukAAAAAAAAAAAAAEezdr1+e5xn0z25BI52XGueq6xjClt47OeeNU8vdStV1ddVVnOfVQGy6u81Wc573d6nIKAAAAAAOtd1F4qc5x3u90tbXcbJ6orGcMd1N1FdU1nGfVKDYFDVx2ccsbZ5+6VvXu17PJc5z6a7MgkAAAAAABDxO74Mc8dt13YkHW3dGrHO6+WZ8aVL4+s/VxOPds7VWqq6zVZznNeaqeAkviNt+a88vTPYjBQAAAAAAAAAAAAABJHEbY8t55emu1PHH1j6yJz7tfYqANbVujbjnFfNNeMpGNNVFYqc5xmfLUtPht3xo557Lnu3KCYABm8dWa35x+qJmQBXAUAAAAAAAAAAAAAAAAAAFjgazO/GP1XNSCDSAB//Z"
                            alt="">
                        <span
                            class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>

                </div>

                <div class="pl-3 flex-col hidden lg:flex justify-center ">

                    <span class="text-xs text-gray-800  dark:text-white font-semibold">Mohamed Ali</span>
                    <span class="text-xs text-gray-400 ">m.ali@company.ma</span>

                </div>

                <i class="fa-solid fa-chevron-down dark:text-white p-3 lg:flex hidden"></i>


            </div>



        </div>

    </nav>
</template>



<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
