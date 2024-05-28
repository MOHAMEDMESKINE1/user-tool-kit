<script setup>
    import AddButton from '../AddButton.vue'
    import Search from '../Search.vue';
    import Note from './Note.vue'
    import axios from 'axios'
    import Dialog from 'primevue/dialog';
    import Loader from '../Loader.vue';
    import {
        computed,
        onMounted,
        reactive,
        ref
    } from 'vue';

    const origial = ref([])
    const notes = ref([])
    const apiNotesUrl = 'http://localhost:3000/notes';
    const search = ref('')
    const isLoading = ref(false)



    // showNote 
    const showNote = () => {
        const note = reactive({
        id: null,
        pinned: false,
        progress: false,
        success: false,
        title: '',
        content: ''
        })

        notes.value.unshift(note)
       
    }

    // getNotes
    const getNotes = () => {

        onLoading(true)  
        axios.get(apiNotesUrl)
            .then(res => {

                notes.value = res.data;
                notes.value = notes.value.map((item) => {
                    return {
                        id: item.id,
                        pinned: item.pinned,
                        progress: false,
                        success: false,
                        title: item.title,
                        content: item.content,
                    };
                });
                origial.value = notes.value;
                 setTimeout(() => {
                    onLoading(false)
                }, 1000);
            })
            .catch(err => console.log(err))


    }

    // onMounted
    onMounted(() => {
        getNotes()
    })

    // on  Search
    const onSearch = (searchValue) => {

        onLoading(true)

        if (searchValue) {
            setTimeout(() => {
                axios.get(`${apiNotesUrl}?id=${searchValue}`)
                .then(res => {
                    notes.value = res.data;
                })
                .catch(err => {

                    console.error('Error searching notes:', err);
                }).finally(() => {
                   onLoading(false)

                });
            }, 1000);
        } else {

            getNotes();
            onLoading(false)
        }

    }
    // on Add 
    const onAdd = (note) => {
        note.id = Math.ceil(Math.random() * 1000) + "";
        axios.post(apiNotesUrl, note)
    }

    // on Delete
    const onDelete = (note) => {
        // notes.value.pop(note);
        notes.value.splice(notes.value.indexOf(note), 1);

        axios.delete(`${apiNotesUrl}/${note.id}`)
    };


    // on Pin
    const onPin = (note, isPinned) => {

        note.pinned  = isPinned;
        onProgress(note, true);

        axios.put(`${apiNotesUrl}/${note.id}`, note).then(() => {
            onProgress(note, false);
            onSuccess(note);
        }).catch(err => {
            onProgress(note, false);
        });
    };

    // onSuccess
    const onSuccess = (note) => {
        note.success = true;
        setTimeout(() => {
            note.success = false;
        }, 2000);
    }
    //  onProgress
    const onProgress = (note, progress) => {
        note.progress = progress;
    }
    // onLoading
    const onLoading = (value) =>{
        isLoading.value = value
    }

    // on Update 
    const onUpdate = async (note) => {

        onProgress(note, true);
        axios.put(`${apiNotesUrl}/${note.id}`, note).then(() => {
            onProgress(note, false);
            onSuccess(note);
        }).catch(err => {
            onProgress(note, false);
        });
    }

</script>

<template>
    <aside
        class="w-76 h-full  bg-white  z-10 overflow-y-scroll    border-e border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div class="h-full   dark:bg-gray-800 w-76 ">
            <div class="flex flex-col   font-medium h-full  w-72">


                <AddButton @onAdd="showNote" label="Écrivez vos notes" icon="fa-regular fa-pen-to-square" />                

                <Search v-model="search" @onSearch="onSearch" />

                <Loader  v-if="isLoading"/>

                <div v-else>

                    <Note v-for="note in notes" :key="note.id" :note="note" :showSuccess="note"
                        @onAdd="onAdd" @onPin="onPin" @onUpdate="onUpdate" @onDelete="onDelete" />
                </div>


            </div>
        </div>
    </aside>
</template>


