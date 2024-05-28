<script setup>
    import AddButton from '../AddButton.vue'
    import Search from '../Search.vue';
    import Task from './Task.vue'
    
    import Loader from '../Loader.vue';
    import axios from 'axios';
    import {
        computed,
        onMounted,
        reactive,
        ref
    } from 'vue';

    const origial = ref([])
    const tasks = ref([])
    const apiTasksUrl = 'http://localhost:3000/tasks';
    const search = ref('')
    const isLoading = ref(false)

  

    // showTask 
    const showTask = () => {
        const items  = [];
        const newTask = {
        id: null,
        pinned: false,
        progress: false,
        success: false,
        title: '',
    
        tasks:  items

    };
        console.log(newTask);
        tasks.value.unshift(newTask)

    }

    // getTasks
    const getTasks = () => {

        onLoading(true)
        axios.get(apiTasksUrl)
            .then(res => {

                res.data.forEach((task) => {

                    var items = [];

                    res.data.forEach((task) => {
                        var task = {
                            id: task.id,
                            pinned: task.pinned,
                            progress: false,
                            success: false,
                            title: task.title,
                            tasks: items
                        };
                    });
                    tasks.value.push(task)

                });

                origial.value = tasks.value;
                setTimeout(() => {
                    onLoading(false)
                }, 1000);

                console.log(tasks);
            })
            .catch(err => console.log(err))


    }

    // onMounted
    onMounted(() => {
        getTasks()
    })

    // on  Search
    const onSearch = (searchValue) => {

        onLoading(true)

        if (searchValue) {
            setTimeout(() => {
                axios.get(`${apiTasksUrl}?id=${searchValue}`)
                    .then(res => {
                        tasks.value = res.data;
                    })
                    .catch(err => {

                        console.error('Error searching tasks:', err);
                    }).finally(() => {
                        onLoading(false)

                    });
            }, 1000);
        } else {

            getTasks();
            onLoading(false)
        }

    }
    // on Add 
    const onAdd = (task) => {
        task.id = Math.ceil(Math.random() * 1000) + "";
        axios.post(apiTasksUrl, task)
    }
    // on Update 
    const onUpdate = (task) => {
        console.log(task);
        onProgress(task, true);
        axios.put(`${apiTasksUrl}/${task.id}`, task).then(() => {
            onProgress(task, false);
            onSuccess(task);
        }).catch(err => {
            onProgress(task, false);
        });
    }
    // on Delete
    const onDelete = (task) => {
        // tasks.value.pop(task);
        tasks.value.splice(tasks.value.indexOf(task), 1);
        axios.delete(`${apiTasksUrl}/${task.id}`)
    };

    // on Pin
    const onPin = (task, isPinned) => {

        task.pinned = isPinned;
        onProgress(task, true);

        axios.put(`${apiTasksUrl}/${task.id}`, task).then(() => {
            onProgress(task, false);
            onSuccess(task);
        }).catch(err => {
            onProgress(task, false);
        });
    };
    // onSuccess
    const onSuccess = (task) => {
        task.success = true;
        setTimeout(() => {
            task.success = false;
        }, 2000);
    }
    //  onProgress
    const onProgress = (task, progress) => {
        task.progress = progress;
    }
    // onLoading
    const onLoading = (value) => {
        isLoading.value = value
    }
</script>

<template>
    <aside
        class="w-76 h-full  bg-white  z-10  overflow-y-scroll  border-e border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div class="  h-full  dark:bg-gray-800 w-76 ">
            <div class="flex flex-col  font-medium w-72 h-full">

                <AddButton label="Ajoutez vos taches ici" @onAdd="showTask" icon="fa-regular fa-clipboard " />

                <Search v-model="search" @onSearch="onSearch" />

                <Loader v-if="isLoading" />

                <div v-else>
                    <Task v-for="task in tasks" :key="task.id" :task="task" @onAdd="onAdd"
                        :showSuccess="task" @onDelete="onDelete" @onPin="onPin" @onUpdate="onUpdate" />
                </div>


            </div>
        </div>
    </aside>
</template>


