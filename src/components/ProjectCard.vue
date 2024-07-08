<script>
import { state } from '../state';

export default {
  name: 'ProjectCard',

  data() {
    return {
      state
    }
  },
  mounted() {
    let url = state.base_api_url + state.base_projects_url
    state.callAPI(url)

    AOS.init({
      duration: 1200,
    })
  }

}
</script>

<template>

  <div class="container mb-3">
    <div class="row">
      <div v-for="project in state.projects.data" class="col-4 g-3" >


        <router-link class="text-decoration-none" :to="{ name: 'SingleProject', params: { id: project.id } }">

          <div class="card h-100 myCard">
            <div class="title_box d-flex text-center align-items-center text-uppercase justify-content-center py-3">

              <h3 class="card-title pt-2">
                {{ project.title }}
              </h3>

            </div>

            <div class="card-body">
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


  <div class="d-flex justify-content-center container navigator-div">

    <nav aria-label="Page navigation">
      <ul class="pagination paginator">
        <li class="page-item">
          <button type="button" style="border-radius: 100%;" class="btn btn-light px-2 py-0 mt-3"
            :class="{ 'bg-secondary border-0 pb-1': state.projects.current_page == 1 }"
            @click="state.prevPage(state.projects.prev_page_url)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        <li class="page-item">

          <button style="border-radius: 100%;" type="button" class="btn btn-light px-3 py-0 fs-2 mx-1 fw-bold">
            {{ state.projects.current_page }}
          </button>

        </li>

        <li class="page-item">
          <button type="button" style="border-radius: 100%;" class="btn btn-light px-2 py-0 mt-3"
            :class="{ 'bg-secondary border-0 text-dark': state.projects.current_page == state.projects.last_page }"
            @click="state.nextPage(state.projects.next_page_url)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>

</template>

<style lang="css" scoped>
.myCard {
  font-family: "Quicksand", sans-serif;
  position: relative;
  padding-bottom: 50px;
  background-color: #ffffff21;
  background-image: var(--bs-gradient);
  color: #ffffffa7;
  border: 1px inset #ffffff55;

  .title_box {
    background-color: var(--bg-medium);
    background-image: var(--bs-gradient);
    height: 100px;
    color: #ffffffba;

    .card-title {
      font-weight: 100;
    }
  }
}

.myCard:hover {
  cursor: pointer;
  filter: brightness(0.8);
  filter: drop-shadow(15px 15px 7px #f8f8f87a);

}

.projectDuration {
  position: absolute;
  bottom: 0;
  width: 90%;
  padding-bottom: 0.5rem;
}

.navigator-div {
  position: absolute;
  bottom: 1rem;
  /* width: 84%; */
}

.projectDuration {
  position: absolute;
  bottom: 0;
  width: 90%;
  padding-bottom: 0.5rem;
}
</style>
