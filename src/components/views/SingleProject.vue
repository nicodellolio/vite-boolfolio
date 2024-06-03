<script>
import axios from 'axios';

export default {
    data() {
        return {
            'base_api_url': 'http://127.0.0.1:8000',
            'base_projects_url': '/api/projects',
            'project': '',
        }
    },
    methods: {
        callAPI(url) {

            axios
                .get(url)
                .then(response => {

                    if (response.data.success) {
                        console.log(response);
                        this.project = response.data.response
                        
                    } else {
                        //fai una merda di 404
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    mounted() {
        let url = this.base_api_url + this.base_projects_url + `/${this.$route.params.id}`
        this.callAPI(url)
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="card">
                <div class="title">
                    <h1 class="card-title display-6">
                        {{ project.title }}
                    </h1>
                    <div class="card-body d-flex">
                        <div class="left-side w-50">
                            <img class="img-fluid" :src="base_api_url + '/storage/' + project.preview_image" alt="">
                        </div>
                        <div class="right-side w-50"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
</style>
