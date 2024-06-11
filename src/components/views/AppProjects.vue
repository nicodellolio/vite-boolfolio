<script>
import ProjectCard from '../ProjectCard.vue';
import axios from 'axios';



export default {
    name: 'AppProjects',
    components: {
        ProjectCard
    },

    data() {
        return {
            'base_api_url': 'http://127.0.0.1:8000',
            'base_projects_url': '/api/projects',
            'projects': []
        }
    },
    methods: {
        callAPI(url) {

            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.projects = response.data.projects
                })
                .catch(err => {
                    console.error(err);
                })
        },

        nextPage(url){
            this.callAPI(url)
        },
        prevPage(url){
            this.callAPI(url)
        }
    },
    mounted() {
        let url = this.base_api_url + this.base_projects_url
        this.callAPI(url)
    }
};
</script>

<template>
    <div>
        <div class="container">
            <h1  class="page_title">All my works</h1>
            <div class="hr"></div>
            <ProjectCard :projects="projects" @next-page="nextPage" @prev-page="prevPage" />
        </div>

    </div>
</template>

<style scoped lang="css">



</style>