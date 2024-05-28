<script setup>
    // import DateInput from '@/components/Input/DateInput.vue';
    // import DateInput from '@'
    import {    DateInput,} from 'vue-component-cua'

    import Search from '../Search.vue';
    import AddButton from '../AddButton.vue'
    import Event from './Event.vue'
    import Calendar from 'primevue/calendar';
    import axios from 'axios';
    import Loader from '../Loader.vue';
    import {
        computed,
        onMounted,
        reactive,
        ref
    } from 'vue';

    // const date = new Date().toLocaleString()
    // console.log(date);
    const origial = ref([])
    const events = ref([])
    const apiEventsUrl = 'http://localhost:3000/events';
    const search = ref('')
    const isLoading = ref(false)
    const dateFilter = ref('')

    const form = reactive({
        id: null,
        title: "",
        content: "",
        pinned: false,
        progress: false,
        success: false,
        date: null
    })

    // showEvent 
    const showEvent = () => {
        events.value.unshift(form)
    }

    // getEvents
    const getEvents = () => {

        onLoading(true)
        axios.get(apiEventsUrl)
            .then(res => {

                events.value = res.data;
                events.value = events.value.map((item) => {
                    return {
                        id: item.id,
                        pinned: item.pinned,
                        title: item.title,
                        content: item.content,
                        progress: false,
                        success: false,
                        date: item.date,

                    };
                });
                origial.value = events.value;
                setTimeout(() => {
                    onLoading(false)
                }, 1000);
            })
            .catch(err => console.log(err))


    }

    // onMounted
    onMounted(() => {

        getEvents()
    })
    
    // onFilterDate
    const onFilterDate = (searchValue) => {

        onLoading(true)

        if (searchValue) {
            setTimeout(() => {
                axios.get(`${apiEventsUrl}?date=${searchValue}`)
                .then(res => {
                    events.value = res.data;
                })
                .catch(err => {

                    console.error('Error searching events:', err);
                }).finally(() => {
                   onLoading(false)

                });
            }, 1000);
        } else {
            getEvents();
            onLoading(false)
        }

        console.log("dateFilter : ", dateFilter.value);
        console.log(event);

    }

    // on  Search
    const onSearch = (searchValue) => {

        onLoading(true)

        if (searchValue) {
            setTimeout(() => {
                axios.get(`${apiEventsUrl}?id=${searchValue}`)
                    .then(res => {
                        events.value = res.data;
                    })
                    .catch(err => {

                        console.error('Error searching events:', err);
                    }).finally(() => {
                        onLoading(false)

                    });
            }, 1000);
        } else {
            getEvents();
            onLoading(false)
        }

    }
    // on Add 
    const onAdd = (event) => {

        event.id = Math.ceil(Math.random() * 1000) + "";

        axios.post(apiEventsUrl, event)
    }

    // on Delete
    const onDelete = (event) => {
        // events.value.pop(event);
        events.value.splice(events.value.indexOf(event), 1);
        axios.delete(`${apiEventsUrl}/${event.id}`)
    };


    // on Pin
    const onPin = (event, isPinned) => {

        event.pinned = isPinned;
        onProgress(event, true);

        axios.put(`${apiEventsUrl}/${event.id}`, event).then(() => {
            onProgress(event, false);
            onSuccess(event);
        }).catch(err => {
            onProgress(event, false);
        });
    };

    // onSuccess
    const onSuccess = (event) => {
        event.success = true;
        setTimeout(() => {
            event.success = false;
        }, 2000);
    }
    //  onProgress
    const onProgress = (event, progress) => {
        event.progress = progress;
    }
    // onLoading
    const onLoading = (value) => {
        isLoading.value = value
    }

    // on Update 
    const onUpdate = async (event) => {

        onProgress(event, true);
        axios.put(`${apiEventsUrl}/${event.id}`, event).then(() => {

            onProgress(event, false);
            onSuccess(event);

        }).catch(err => {
            onProgress(event, false);
        });
    }
</script>

<template>
    <aside
        class="w-76 h-full  bg-white  z-10 overflow-y-scroll   border-e border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div class="h-full     dark:bg-gray-800 w-76 ">
            <div class="flex flex-col  font-medium w-72 h-full">

                <AddButton label="Ajouter un nouvel événement" @onAdd="showEvent" icon="fa-regular fa-calendar " />


                <div class="flex justify-center p-3  ">
                    <div
                        class="bg-white content-center border p-1 border-gray-300  w-full text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group focus-within:border-blue-700 focus-within:ring-1 focus-within:outline-none focus-within:ring-blue-700">
                        <Calendar  
                        @date-select="onFilterDate" 
                        :showWeek="false" 
                        v-model="dateFilter" inline
                        :pt="{
                            panel: { class: ' w-full  p-0 text-sm' },
                            day: { class: ' p-0.5 text-sm ' },
                            tableheadercell: { class: ' p-0.5 text-sm ' },
                            nexticon: { class: ' p-0.5 text-sm ' },
                            previousicon: { class: '  p-0.5 text-sm ' },
                        }" />
                    </div>
                </div>

                <Search v-model="search" @onSearch="onSearch" />

                <Loader v-if="isLoading" />
                <!-- <Event/> -->
                <div v-else>
                    <Event v-for="event in events" :key="event.id" :event="event" :showSuccess="event"
                        @onAdd="onAdd" @onPin="onPin" @onUpdate="onUpdate" @onDelete="onDelete" />
                </div>


            </div>
        </div>
    </aside>
</template>


