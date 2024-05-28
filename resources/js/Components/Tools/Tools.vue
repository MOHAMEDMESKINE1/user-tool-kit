<script setup>

import ToolBar from '../Tools/ToolBar/ToolBar.vue'
import Notes from '../Tools/Notes/Notes.vue';
import Tasks from '../Tools/Tasks/Tasks.vue';
import Calendar from '../Tools/Calendar/Calendar.vue';
import Contacts from '../Tools/Contacts/Contacts.vue';

import { ref } from 'vue';

const activeComponent = ref('');

const handleComponentSelected = (component) => {
  activeComponent.value = component;
};
</script>


<template>

   
        <div class="flex  absolute end-0 bottom-0 top-0 z-20">


            <ToolBar @componentSelected="handleComponentSelected" />
            
            <Notes v-if="activeComponent === 'Notes'"/>

            <Tasks v-if="activeComponent === 'Tasks'"/>

            <Calendar v-if="activeComponent === 'Calendar'"/>

            <Contacts v-if="activeComponent === 'Contacts'"/>

        </div>
           
</template>


<style  scoped>




</style>