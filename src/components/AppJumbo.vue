<script>
import { state } from '../state';

export default {
  name: 'AppJumbo',

  data() {
    return {
      state
    }
  },
  mounted() {
    let url = state.base_api_url + state.base_projects_url
    state.callAPI(url)
  }

}

</script>

<template>
  <div class="container jumbotron mx-auto rounded-3 mt-5 mx-5 d-flex justify-content-evenly">



    <div class="icons d-flex w-75 flex-column">
      <i class="devicon-css3-plain"></i>
      <i class="devicon-bootstrap-plain"></i>
      <i class="devicon-vuejs-plain-wordmark"></i>
      <i class="devicon-mysql-plain-wordmark"></i>
      <i class="devicon-laravel-original"></i>
      <i class="devicon-php-plain"></i>
    </div>

    <div class="left-side ps-3 z-2">

      <div class="title-box">
        <h1 class="jumbo-title">
          Hei! I'm <span class="text-warning">Nico</span>, Full Stack Web Developer
        </h1>
      </div>

      <div class="svgs">

        <svg xmlns="http://www.w3.org/2000/svg" id="square-circle" viewBox="0 0 320 320" fill="#fff2"
          style="width: 200px; position: absolute; top: 6rem; right: 0%;">
          <path
            d="M20.4 273.2c-1.2-4.1 2.2-68.1 3.2-117.4.8-39.2-1.7-92.5-1.1-108 .2-7.4 5.3-9 10.6-9.5 12.8-1.2 18.8-1.2 46.1-.5 95.9 2.3 163.5 58.7 203.1 146 7.5 16.6 12.2 31.7 14.6 49.8 1.8 13.2 4 24.1 2.4 38.3-.1.6-.9 3.9-1.2 4.4-1.6 3.5-5.6 5.2-9.4 5.4-7.8.4-7.8.4-52.4.9-55.3.6-88.2-2.7-150.4-3.4-55.2-.7-49.5.1-56.9.1-3.7 0-7.5-2.3-8.6-6.1zm260.8-6.1s-1.2-27-1.8-31.5c-1.7-11.8-3.6-22.6-7.9-33.7-8.6-22.2-20-43.3-34-62.5-48.2-66.4-105.2-87.2-186-84.9-2.4.1-12.1.9-12.1.9.3 49.2 2.7 60.9.7 131.1l-2.3 77.4c35.2-1.7 126.9 3.7 201.5 2.7 5.1-.1 10.1-.1 15.2-.1 8.9 0 26.7.6 26.7.6z">
          </path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" id="circle" viewBox="0 0 270 270" fill="#fff1"
          style="width: 200px; position: absolute; top: 70%; left: -3%; transform: rotate(-45deg);">
          <path
            d="M245 116.2c-22.8-15.5-43.9-33.5-64.3-52.1-14.9-13.5-28.1-29.3-44.8-40.7-3.8-2.3-9.3-1.6-12 2C93.5 60.6 59.8 88.2 28 107.7c-3.4 1.3-7 3.5-6.9 7.7-2.9 14.1 11.6 31.9 17 45 14.3 25.8 27.4 52.1 39.2 79.1 5.5 9.6 24.4 3.6 34.1 5.2 20 .3 38.7.3 59.2 2.7 10.2 3.2 12.8-9 16.5-15.7 13.1-25.9 30.5-53.2 45.6-77.9 3.5-9 25.6-31.2 12.3-37.6zm-76 113.2c-27.1-3.7-54.3-.3-77.6-.6C76.6 190.9 53 157 38 119.3c35-21.2 67-47.6 94.2-78.1 31.5 29.3 61.9 60 97.4 84.6-21.9 35.6-41.9 66.2-60.6 103.6z">
          </path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" id="circle" viewBox="0 0 270 270" fill="#fff1"
          style="width: 200px; position: absolute; top: 82%; left: -6%; transform: rotate(-100deg);">
          <path
            d="M245 116.2c-22.8-15.5-43.9-33.5-64.3-52.1-14.9-13.5-28.1-29.3-44.8-40.7-3.8-2.3-9.3-1.6-12 2C93.5 60.6 59.8 88.2 28 107.7c-3.4 1.3-7 3.5-6.9 7.7-2.9 14.1 11.6 31.9 17 45 14.3 25.8 27.4 52.1 39.2 79.1 5.5 9.6 24.4 3.6 34.1 5.2 20 .3 38.7.3 59.2 2.7 10.2 3.2 12.8-9 16.5-15.7 13.1-25.9 30.5-53.2 45.6-77.9 3.5-9 25.6-31.2 12.3-37.6zm-76 113.2c-27.1-3.7-54.3-.3-77.6-.6C76.6 190.9 53 157 38 119.3c35-21.2 67-47.6 94.2-78.1 31.5 29.3 61.9 60 97.4 84.6-21.9 35.6-41.9 66.2-60.6 103.6z">
          </path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2150 2150" fill="#fffa" style="width: 450px; position: absolute; top: 65%; left: 29%; transform: rotate(-100deg);">
          <path
            d="M1036.3 2066.5c-133-1.2-265.8-22.8-392.3-64a893.7 893.7 0 0 1-260-133.4c-145-104.2-251.4-260.7-298.1-432.7-28.2-114.7-22.5-235.3 1.3-350.2 4.4-21.8 10.4-43.3 15.5-64.8 5-48.5 13-96.7 25.3-143.8C161.2 750.2 228.7 634.2 309.2 531c26-32.9 53.6-64.6 82.9-94.7 23.1-27.5 46.2-55.2 71.2-81.2 82.6-86.6 179.2-162 288.8-211.3 2-6.3 10-5.9 15.5-6.7 34-14.4 69.6-24.6 105.7-32.6 99.4-24.1 203-26.3 304.1-12.2 192.6 24.2 375.1 107 529 224.1 110.3 84 205.8 190.4 267.4 315a1092 1092 0 0 1 107.6 537.1c-6.2 124-29.2 248.2-78.2 362.6-63.7 150-172.7 280.2-312 365.3-121.6 75.7-259 125-399.2 151.7-84.3 15.3-170.2 18.3-255.7 18.4Zm25.8-17.8c73.2 1 146.4-7 218.5-18.7 69.5-12.2 139-28 204.6-54.4 92-38.2 173.4-98.6 243.5-168.7 106.8-110 186.2-244.8 244.2-386.2 59.1-147.7 82.8-293 31.3-447-94.2-292.5-309.4-538.6-578-685-149.6-88.4-317.9-154.6-493.7-154-27 .4-52.2 13-77.7 20.9a1131 1131 0 0 0-138 62C633 261.8 552 312.3 479.9 374.3c-43.7 34.5-77.2 79-109 124.3a1653.6 1653.6 0 0 0-115.3 187.9C196.2 802.2 147.3 924.4 117.4 1051c-10.8 134.4 1.9 271 41.9 400 51.3 170.6 139.1 340.2 291.3 440.9C632.9 2004 851 2041 1062 2048.7ZM985.2 122.5c184.9 13 353.3 91.7 508.5 188.5 263.6 159.6 482.4 434.7 548 738.6 32.1 161.5-22.3 325-92.2 469.4-73.4 147-171.5 285.3-304.6 384 219.8-120.8 357.1-338 398.5-582.6 43.3-241.5 11.4-498-105.8-715-128.3-226.7-363.8-389.2-610-465-64.6-18-131-31.7-198-36a732.8 732.8 0 0 0-155.4 17.3l11 .8ZM233.3 1693.8a643.8 643.8 0 0 0 48.8 59.7c-52.7-72-91-153.6-121-237.4a1062.7 1062.7 0 0 1-64.7-360.4c-29.3 205 15.7 371 137 538.1Zm-87.2-816.7c-1.8 6.2-3.2 12.5-4.7 18.8l-1.6 6.6c41.5-117.2 95-230.4 161.6-335.5-68.5 93.6-125.6 197.4-155.3 310.1Zm410.4-584.4L542.3 305l-11.5 10.3c101-71.9 211-132.7 327.7-174.8-25.2 3.3-51.3 3.5-76 9.5a632 632 0 0 0-58.7 27.3c-60.3 31.2-116 71-167.3 115.4Zm359.7-179.8a992 992 0 0 0-63.7 14.3c23-2.3 46-5.2 69.3-6 32.3-9 65.3-15.2 98.4-20.4a720 720 0 0 0-104 12.1Z">
          </path>
        </svg>
      </div>

      <p class="fs-2 w-50 jumbo-pp-text">
        Welcome to my Portfolio. Here I collect some of <span class="fw-semibold">my precious</span> projects created in
        these years.
      </p>


      <a href="#latest-projects" class="">
        <div class="scroll-prompt" scroll-prompt="" ng-show="showPrompt" style="opacity: 1;">
          <div class="scroll-prompt-arrow-container">
            <div class="scroll-prompt-arrow">
              <div></div>
            </div>
            <div class="scroll-prompt-arrow">
              <div></div>
            </div>
          </div>
        </div>

        <h6 class="link-to-latest">Take a look to my latest project</h6>
      </a>




      <div class="download_cv_box">
        <a class="download_cv" target="_blank" download=""
          :href="base_api_url + '/storage/uploads/' + 'resume_portfolio.pdf'">
          Resume
          <i class="fa fa-download" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <img class="jumbo-img" :src="state.base_api_url + '/storage/uploads/' + 'jumbo.png'" alt="">
  </div>

  <div id="latest-projects" class="mb-5">
    <div class="row">
      <div v-for="project in state.projects.data" class="col-4 g-3">


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
    <RouterLink class="text-dark btn all-my-works btn-warning fw-normal" :to="{ name: 'projects' }">All my works
    </RouterLink>
  </div>

</template>

<style lang="scss" scoped>
@import "../partials_scss/_jumbo.css";
@import "../partials_scss/_scroll_prompt.css"
</style>
