<script>
import axios from 'axios';


export default {
  name: 'ProjectCard',

  props: {
    projects: Array,
  },

  methods: {
  },
  mounted() {

  }
}
</script>

<template>

  <div class="container">
    <div class="row">
      <div v-for="project in projects.data" class="col">

        <div class="card">
          <div class="title_box d-flex bg-gradient justify-content-between bg-secondary p-3">

            <h3 class="card-title text-light fw-bolder pt-2">
              {{ project.title }}
            </h3>

          </div>

          <div class="card-body text-secondary">
            <h5 class="d-inline-block">Description:</h5>
            <p class="card-text">
              {{ project.description }}
            </p>
            <hr>

            <div class="project-date">
              <div class="projectStart">
                Start Date: {{ project.project_start_date }}
              </div>
              <div class="projectEnd">
                End Date: {{ project.project_end_date }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="css">

  

</style>
