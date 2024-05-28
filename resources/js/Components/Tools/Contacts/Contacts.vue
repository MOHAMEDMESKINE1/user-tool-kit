<script setup>
    import {  DateInput} from 'vue-component-cua';
    import Search from '../Search.vue';
    import AddButton from '../AddButton.vue'
    import Contact from './Contact.vue'
    import Calendar from 'primevue/calendar';
    import Dialog from 'primevue/dialog';
    import axios from 'axios';
    import Loader from '../Loader.vue';

    import {
        onMounted,
        reactive,
        ref
    } from 'vue';


    const form = reactive({
        id: null,
        name: '',
        phone: '',
        profile: '/src/assets/svg/image1.jpg'
    })

    const origial = ref([])
    const contacts = ref([])
    const isLoading = ref(false)
    const search = ref('')

    const apiContactsUrl = 'http://localhost:3000/contacts';


    // get contacts
    const getContacts = () => {
        onLoading(true)
        axios.get(apiContactsUrl)
            .then(res => {

                contacts.value = res.data;
                contacts.value = contacts.value.map((item) => {
                    return {
                        id: item.id,
                        name: item.name,
                        phone: item.phone,
                        profile: item.profile,
                    };
                });
                origial.value = contacts.value;
                setTimeout(() => {
                    onLoading(false)
                }, 1000);
            })
            .catch(err => console.log(err))

    }

    // mount contacts
    onMounted(() => {

        getContacts();
    })
    // onLoading
    const onLoading = (value) => {
        isLoading.value = value
    }

    // onLoading
    const showContact = () => {
        contacts.value.unshift(form)
    }

    // on Add 
    const onAdd = (contact) => {

        contact.id = Math.ceil(Math.random() * 1000) + "";

        axios.post(apiContactsUrl, contact)
    }

    // on Delete
    const onDelete = (contact) => {
        contacts.value.pop(contact);
        axios.delete(`${apiContactsUrl}/${contact.id}`)
    };


    const onSearch = (searchValue) => {

        onLoading(true)

        if (searchValue) {
            setTimeout(() => {
                axios.get(`${apiContactsUrl}?name=${searchValue}`)
                    .then(res => {
                        contacts.value = res.data;
                    })
                    .catch(err => {
                        console.error('Error searching contacts:', err);
                    }).finally(() => {
                        onLoading(false)

                    });
            }, 1000);
        } else {

            getContacts();
            onLoading(false)
        }

    }

    // on Update 
    const onUpdate = (contact) => {
        axios.put(`${apiContactsUrl}/${contact.id}`, contact)
            .catch(err => console.log(err))
    }
</script>

<template>
    <aside
        class="w-76 h-full  bg-white  z-10  overflow-y-scroll border-e border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div class="h-full dark:bg-gray-800 w-76 ">
            <div class="flex flex-col  font-medium w-72 h-full ">

                <AddButton @onAdd="showContact" label="Ajouter un nouveau Contact" icon="fa-solid fa-user-plus" />


                <Search v-model="search" @onSearch="onSearch" class="border-b" />
                <Loader v-if="isLoading" />

                <Contact v-else v-for="contact in contacts" :key="contact.id" :contact="contact" @onAdd="onAdd"
                    @onDelete="onDelete" @onUpdate="onUpdate" />

            </div>
        </div>
    </aside>
</template>
