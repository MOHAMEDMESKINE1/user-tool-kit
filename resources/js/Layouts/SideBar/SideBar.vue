<script setup>
    import {
        defineProps,
        ref
    } from 'vue';
    import AppBar from './AppBar/AppBar.vue';
    import MainBar from './MainBar/MainBar.vue';
    import ItemAppBar from "./AppBar/ItemAppBar.vue";
    import ItemMainBar from "./MainBar/ItemMainBar.vue";

    const props = defineProps({

        isOpen: Boolean

    })

    const emit = defineEmits(['onToggleBar']);

    const toggleBar = () => {

      
        emit("onToggleBar");
       
    };

    const ItemMainBarClick = () => {

        console.log("clicked ...");
    }
</script>

<template>

    <Transition name="fade">
        <div
            :class="[' flex lg:relative  z-40 lg:z-0  fixed start-0 end-0', { '-start-96 hidden lg:flex  ': !isOpen }]">
            <!-- AppBar -->

            <AppBar>
                <template #top>

                    <ItemAppBar icon="fa-house" tooltip="House" />

                    <ItemAppBar icon="fa-microchip" tooltip="Microchip" />

                    <ItemAppBar icon="fa-briefcase" tooltip="Briefcase" />

                    <ItemAppBar icon="fa-building" tooltip="Building" />

                    <ItemAppBar icon="fa-chart-pie" tooltip="Chart pie" />

                    <ItemAppBar icon="fa-users" tooltip="Users" />

                </template>

                <template #bottom>

                    <ItemAppBar icon="fa-gear" tooltip="Settings" />

                </template>
            </AppBar>

            <!-- MainBar -->
            <MainBar title="Rôles et Utilisateurs">

                <template #content>

                    <ItemMainBar icon="fa-user-group " text="Utilisateurs" @onItemClick="ItemMainBarClick"
                        :isActive='true' />
                    <ItemMainBar icon=" fa-shield-halved " text="Rôles et autorisations" />

                </template>

            </MainBar>


            <div class="flex-1 bg-black opacity-50" @click="toggleBar"></div>

        </div>

    </Transition>



</template>



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
