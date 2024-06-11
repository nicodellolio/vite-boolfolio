<script>
import axios from 'axios';

export default {
  name: 'AppJumbo',

  data() {
    return {
      'base_api_url': 'http://127.0.0.1:8000',
      'base_projects_url': '/api/projects',
    }
  },
  methods: {
    callAPI(url) {

      axios
        .get(url)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  mounted() {
    let url = this.base_api_url + this.base_projects_url
    this.callAPI(url)
  }
};

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

    <img class="jumbo-img" :src="base_api_url + '/storage/uploads/' + 'jumbo.png'" alt="">
  </div>

  <div id="latest-projects" class="mb-5">
    <div class="">
      <RouterLink class="text-dark btn btn-warning fw-normal" :to="{ name: 'projects' }">All my works
      </RouterLink>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.container {
  height: calc((100vh - 48px) - 82px);
}

.icons {
  font-size: 4rem;
  gap: 1rem;
  max-width: 6rem;
  margin-left: -5rem;
  margin-top: 2rem;

  >i {
    color: var(--bg-light);
  }

  ;

  >i:hover {
    scale: 1.4;
    color: #fff;
  }
}

.paginator-pp {
  .btn-light {
    color: #590441;
  }

}

.image_box {
  gap: 2rem;
}

.jumbo-pp-text {
  font-weight: 100;
  color: #ffffff;
  margin-bottom: 3rem;
}

img.jumbo-img {
  position: absolute;
  bottom: 0;
  right: 5%;
  z-index: 99;
  width: 50%;
  max-width: 690px;
  //   margin-bottom: 8.2vh;

}

.jumbotron {
  min-height: 640px;
  width: 80%;
  max-width: 1125px;



  .jumbo-title {
    font-size: 600%;
    font-weight: 900;
    color: #ffffff;
    width: 60%;
  }

  .jumbo-title.second {
    margin-top: -3rem;
  }

}

.download_cv_box {
  filter: drop-shadow(0 0 1rem rgba(223, 10, 216, 0.788));
  text-transform: uppercase;
  font-weight: 100;
  text-align: center;
  align-items: center;
  padding-top: 1rem;
  border-radius: 100%;
  background-color: rgb(176, 9, 176);
  width: 150px;
  aspect-ratio: 1;
  position: absolute;
  left: 35%;
  bottom: 10%;
  display: flex;
  opacity: 0.75;

  .download_cv {
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    margin-bottom: 0.75rem;

    i {
      font-size: 3rem;
    }
  }
}

.download_cv_box:hover {
  scale: 1.15;
  opacity: 1;
}

.arrow_box {
  z-index: 99;
}

#latest-projects {
  height: 1000px;
  width: 80%;
  margin: auto;
  background-color: var(--bg-dark);
  border-radius: 20px;
  // background: linear-gradient(310deg, rgba(28, 3, 57, 1) 11%, rgba(62, 9, 121, 1) 46%, rgba(109, 61, 163, 1) 100%);

}

a {
  text-decoration: none;
}

h6.link-to-latest {

  position: relative;
  right: 1rem;
  bottom: 11%;
  color: rgb(6, 154, 6);
  font-weight: 300;
  font-size: 1.5rem;
  
}

h6:hover{
  color: #fff;
}



.scroll-prompt {
  z-index: 998;
  bottom: -80px;
  left: 50%;
  margin-left: -80px;
  width: 160px;
  height: 160px;

  .scroll-prompt-arrow-container {
    top: 0;
    left: 50%;
    margin-left: -18px;
    animation-name: bounce;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }

  .scroll-prompt-arrow {
    animation-name: opacity;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }

  .scroll-prompt-arrow:last-child {
    animation-direction: reverse;
    margin-top: -6px;
  }

  .scroll-prompt-arrow>div {
    width: 36px;
    height: 36px;
    border-right: 8px solid #bebebe;
    border-bottom: 8px solid #bebebe;
    transform: rotate(45deg) translateZ(1px);
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 0.1;
  }

  20% {
    opacity: 0.2;
  }

  30% {
    opacity: 0.3;
  }

  40% {
    opacity: 0.4;
  }

  50% {
    opacity: 0.5;
  }

  60% {
    opacity: 0.6;
  }

  70% {
    opacity: 0.7;
  }

  80% {
    opacity: 0.8;
  }

  90% {
    opacity: 0.9;
  }

  100% {
    opacity: 1;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  10% {
    transform: translateY(3px);
  }

  20% {
    transform: translateY(6px);
  }

  30% {
    transform: translateY(9px);
  }

  40% {
    transform: translateY(12px);
  }

  50% {
    transform: translateY(15px);
  }

  60% {
    transform: translateY(18px);
  }

  70% {
    transform: translateY(21px);
  }

  80% {
    transform: translateY(24px);
  }

  90% {
    transform: translateY(27px);
  }

  100% {
    transform: translateY(30px);
  }
}
</style>
