<script setup>
import AuthLayout from '@/Layouts/AuthLayout.vue';
import { ref } from 'vue';
import {
    ListGroup,
    Title,
    Text ,
    Badge,
    ListGroupItem ,
    ButtonLink,
    BreadCrumb, 
    BreadCrumbItem,
    Table,
    CheckBox,
    LightButtonIcon,
    DropDownButton,
    LightButton
} from 'vue-component-cua'

const headers = ref([
    {
        display: true,
        title:'checked',
        toggle: false,
        align:'left'
    },
    {
        display: true,
        title:'Nom complete',
        toggle: true,
        align:'left'
    },
    {
        display: true,
        title:'Email',
        toggle: true,
        align:'left'
    },
    
    {
        display: true,
        title:'gender',
        toggle: true,
        align:'left'
    },
    
    {
        display: true,
        title:'ip_address',
        toggle: true,
        align:'left'
    }
    
])
const data = ref([{
    "checked" : true,
  "id": 1,
  "first_name": "Jeanette",
  "last_name": "Penddreth",
  "email": "jpenddreth0@census.gov",
  "gender": "Female",
  "ip_address": "26.58.193.2"
}, {
    "checked" : true,

  "id": 2,
  "first_name": "Giavani",
  "last_name": "Frediani",
  "email": "gfrediani1@senate.gov",
  "gender": "Male",
  "ip_address": "229.179.4.212"
}, {
    "checked" : true,

  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
},  {
    "checked" : true,

  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
},  {
    "checked" : true,

  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
},  {
    "checked" : true,

  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
},  {
    "checked" : true,

  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
},  {
    "checked" : true,

  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
},  {
    "checked" : true,

  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
}, {
    "checked" : true,

  "id": 4,
  "first_name": "Willard",
  "last_name": "Valek",
  "email": "wvalek3@vk.com",
  "gender": "Male",
  "ip_address": "67.76.188.26"
},{
    "checked" : true,
  "id": 1,
  "first_name": "Jeanette",
  "last_name": "Penddreth",
  "email": "jpenddreth0@census.gov",
  "gender": "Female",
  "ip_address": "26.58.193.2"
}, {
    "checked" : true,

  "id": 2,
  "first_name": "Giavani",
  "last_name": "Frediani",
  "email": "gfrediani1@senate.gov",
  "gender": "Male",
  "ip_address": "229.179.4.212"
}, {
    "checked" : true,

  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
},  {
    "checked" : true,

  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
},  {
    "checked" : true,

  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
}]);
</script>
<template>
    <AuthLayout>
        <div class="flex justify-between ">
                <Title type="h5" class="mb-2 font-bold">
                    Utilisateurs
                </Title>  
        </div>
        <!-- breadcrumbs -->
        <div class=" mb-4">
            <BreadCrumb>
                <BreadCrumbItem title='Acceuil' icon='pi-home' href='/' />
                <BreadCrumbItem title='Roles et Utilsateurs' href='/' />
                <BreadCrumbItem title='Utilsateurs'  href='/' :last="true" />
            </BreadCrumb>
        </div>
        <Table :headers='headers' :data='data' :checkable='true' @onSelect='selectItems' @onSearch='search'>
            <template #actions>                      
                <LightButtonIcon icon='pi-trash' class='mr-1 ml-2' color='error' @click='confirmDelete'/>
                <LightButtonIcon icon='pi-pencil' class='mr-1' color='primary'/>
                <LightButtonIcon icon='pi-share-alt' class='mr-1' color='accent'/>
                <LightButtonIcon icon='pi-download' class='mr-1' color='success'/>    
            </template>
            <DropDownButton class='float-end'> 
                <template v-slot:drop>
                    <LightButton color='light' startIcon='pi-filter' size='md'>Filter</LightButton>
                </template>
                <template v-slot:panel>
                    <ul class='p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownCheckboxButton'>
                        <li>
                            <div class='flex items-center'>
                                <CheckBox id='checkbox-item-1' type='checkbox' v-model='checkedDefault' name='checkbox'/>
                                <Label for='["checkbox-item-1' class='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                                    Default checkbox
                                </Label>    
                            </div>
                        </li>
                    </ul>
                </template>
            </DropDownButton>
             <template #column1='{ entity }'>
                <div class="flex w-full items-center  ">

<div class="flex ps-2 pe-2">

    <div
        class="relative  rounded-lg bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <img class="h-auto w-10 rounded-md"
            src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
            alt="">
        <span
            class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>

</div>
<div class="flex flex-col">

    <h3 class="text-gray-500 font-medium text-[15px]">Mohamed Ali</h3>

    <h3 class="text-gray-400 font-medium text-[12px]">m.ali@company.ma</h3>

</div>

</div>

           
            </template>
             <template #column2='{ entity }'>
                {{ entity.email }}
            </template>
           
             <template #column3='{ entity }' >
                    {{ entity.gender }}
            </template>
            <template #column4='{ entity }' >
                    {{ entity.ip_address }}
            </template>
             <template #column5='{ entity }' >
                <LightButtonIcon icon='pi-pencil' size='sm' @click='confirmDelete(entity)' class='mr-1' color='primary'/>
                <LightButtonIcon icon='pi-share-alt' size='sm' class='mr-1' color='accent'/>
            </template>
        </Table>

    </AuthLayout>
</template>



<style lang="css" scoped>

</style>