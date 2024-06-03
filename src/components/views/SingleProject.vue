<script>
export default {
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
        }
    },
    mounted() {
        let url = this.base_api_url + this.base_projects_url
        this.callAPI(url)
    },
    computed:{
        project(){
            return this.projects.find(this.project => this.project.id == $route.params.id)
        }
    }
}
</script>

<template>
    <div class="text-center mt-5">
        <h1 class="text-light">Single Project id:{{$route.params.id}}</h1>
    </div>
</template>


<style lang="scss" scoped>
</style>
