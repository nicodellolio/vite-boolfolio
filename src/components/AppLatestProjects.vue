<script>
import { state } from '../state';

export default {
  name: 'AppLatestProjects',

  data() {
    return {
      state
    }
  },
  methods: {
    initializeTypewriter() {
      class TxtType {
        constructor(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = '';
          this.tick();
          this.isDeleting = false;
        }
        tick() {
          let i = this.loopNum % this.toRotate.length;
          let fullTxt = this.toRotate[i];

          if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

          this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

          let that = this;
          let delta = 200 - Math.random() * 100;

          if (this.isDeleting) { delta /= 2; }

          if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
          }

          setTimeout(function () {
            that.tick();
          }, delta);
        }

      };

      let elements = document.getElementsByClassName('typewrite');
      for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      };
    }
  },
  mounted() {
    let url = state.base_api_url + state.base_projects_url
    state.callAPI(url);

    this.initializeTypewriter();

    AOS.init({
      duration: 700,
    });
  }


}

</script>

<template>

  <div id="latest-projects" class="mb-5" data-aos="fade-down">
    <div class="row my-row d-flex flex-row flex-nowrap h-100 overflow-scroll p-5">
      <div v-for="project in state.projects.data" class="col-12">

        <router-link class="text-decoration-none" :to="{ name: 'SingleProject', params: { id: project.id } }">

          <div class="card h-100 myCard overflow-scroll" >
            <div class="title_box d-flex text-center align-items-center text-uppercase justify-content-center py-3">

              <h3 class="card-title pt-2">
                {{ project.title }}
              </h3>

            </div>

            <img :src="state.base_api_url + '/storage/' + project.preview_image" alt="" class="card-img-top w-100">


            <div class="card-body">
              <div class="description">
                <h5 class="d-inline-block fs-2">Description:</h5>
                <p class="card-text">
                  {{ project.description }}
                </p>
              </div>

              <div class="projectDuration">
                Project Duration: {{ project.project_duration }}
              </div>
            </div>
          </div>

        </router-link>

      </div>
      <div class="col-12">
        <div class="card all-my-works bg-transparent d-flex border-0">
          <RouterLink class="btn all-my-works text-uppercase" :to="{ name: 'projects' }">
            <h1 class="hover-underline-animation">
              see all my works
            </h1>
            <span class="">
              &#62;
            </span>

          </RouterLink>
        </div>
      </div>
    </div>

  </div>

</template>

<style lang="scss" scoped>
@import "../partials_scss/_jumbo.css";
</style>
