<script>
import axios from 'axios';


export default {
  name: 'ProjectCard',

  props: {
    projects: Object,
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


        <router-link class="text-decoration-none" :to="{ name: 'SingleProject', params: { id: project.id } }">

          <div class="card h-100 myCard">
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
              
              <div class="projectDuration">
                <hr>
                Project Duration: {{ project.project_duration }}
              </div>
          </div>
      </div>

      </router-link>

    </div>
  </div>
  </div>

  <div class="d-flex justify-content-center">

    <nav aria-label="Page navigation">
      <ul class="pagination paginator">
        <li class="page-item">
          <button type="button" style="border-radius: 100%;" class="btn btn-light px-2 py-0 mt-3"
            :class="{ 'bg-secondary border-0 pb-1': projects.current_page == 1 }"
            @click="$emit('prevPage', projects.prev_page_url)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        <li class="page-item">

          <button style="border-radius: 100%;" type="button" class="btn btn-light px-3 py-0 fs-2 mx-1 fw-bold">
            {{ projects.current_page }}
          </button>

        </li>

        <li class="page-item">
          <button type="button" style="border-radius: 100%;" class="btn btn-light px-2 py-0 mt-3"
            :class="{ 'bg-secondary border-0 text-dark': projects.current_page == projects.last_page }"
            @click="$emit('nextPage', projects.next_page_url)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>

</template>

<style lang="css">
  .myCard{
    position: relative;
    padding-bottom: 50px;
  }

  .projectDuration{
    position: absolute;
    bottom: 0;
    width: 90%;
    padding-bottom: 0.5rem;
  }
</style>
