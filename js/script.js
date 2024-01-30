const { createApp } = Vue

createApp({
    data() {
        return {
            myApiUrl: 'server.php',
            tasksArray: [],
            taskItem: '',
        }
    },
    mounted() {
        this.getTasksArray()
    },
    methods: {
        getTasksArray() {
            axios.get(this.myApiUrl).then((response) => {
                this.tasksArray = response.data;
            })
        },
        addTask() {
            const data = {
                item: this.taskItem
            }
            axios.post(this.myApiUrl, data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then((response) => {
                    this.taskItem = '';
                    this.tasksArray = response.data;

                })
        }
    },
}).mount('#app');