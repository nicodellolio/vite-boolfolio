<script>
import axios from 'axios';

import ProjectCard from "./components/ProjectCard.vue";


export default{
  name: 'App',
  components:{
    ProjectCard
  },

  data() {
    return{
      'base_api_url' : 'http://127.0.0.1:8000',
      'base_projects_url' : '/api/projects',
      'projects' : []
    }
  },
  methods: {
    callApi(url){

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
  mounted(){
    let url = this.base_api_url + this.base_projects_url
    this.callApi(url)
  }
}
</script>

<template>

<ProjectCard :projects = "projects"/>

</template>

<style>

</style>
