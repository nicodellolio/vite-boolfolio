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

  <div class="container mb-3">
    <div class="row">
      <div v-for="project in projects.data" class="col-4 g-3">

        <div class="card h-100">
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

  <div class="d-flex justify-content-center paginator-pp">

    <nav aria-label="Page navigation">
      <ul
      class="pagination"
      >
      <li class="page-item disabled">
        <a class="page-link" :href="projects.prev_page_url" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" :href="projects.first_page_url">1</a>
      </li>
      <li class="page-item"><a class="page-link" :href="projects.next_page_url">2</a></li>
      <li class="page-item">
        <a class="page-link" :href="projects.last_page_url">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" :href="projects.next_page_url" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
  
  
</template>

<style lang="css">



</style>
