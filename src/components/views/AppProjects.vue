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
            <h1 class="projects-title">All my works</h1>
            <div class="hr">
                <div class="inside-hr"></div>
            </div>
            <ProjectCard :projects="projects" @next-page="nextPage" @prev-page="prevPage" />
        </div>

    </div>
</template>

<style scoped lang="css">

h1{
    text-align: end;
    color: var(--bg-medium);
    font-weight: 200;
    margin-top: 2rem;
    text-transform: uppercase;
}
.hr{
    height: 2px;
    background-color: #ffffff35;
    border-radius: 50px;
    margin-bottom: 0.5rem;
}

</style>