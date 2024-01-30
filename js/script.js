const { createApp } = Vue

createApp({
    data() {
        return {
            myApiUrl: 'server.php',
            tasksArray: [],
        }
    },
    mounted() {
        this.getTasksArray()
    },
    methods: {
        getTasksArray() {
            axios.get(this.myApiUrl).then((response) => {
                this.tasksArray = response.data;
                console.log(this.tasksArray);
            })
        }
    },
}).mount('#app');