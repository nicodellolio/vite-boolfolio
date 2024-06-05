<script>

export default {
    name: 'AppJumbo',

    data() {
        return {

        }
    },
};

</script>

<template>
    <div class="container jumbotron mx-auto rounded-3 mt-5 mx-5 d-flex justify-content-evenly">

        <div class="left-side ps-3 z-2">

            <h1 class="jumbo-title">
                Full-Stack Portfolio
            </h1>


            <p class="fs-2 w-50 jumbo-pp-text">
                Welcome to my Full-Stack Web Developer Portfolio. Here I collect some of my major projects created in
                these
                years.
                I developed my skills throughtout a full-course with <a href="https://boolean.co.uk/" class="text-decoration-none" style="color: limegreen">Boolean</a>
            </p>


            <div class="">
                <RouterLink class="text-dark btn btn-warning fw-normal" :to="{ name: 'projects' }">My latest Projects</RouterLink>
            </div>

        </div>
    
        <img class="jumbo-img" src="../assets/jumbo.png" alt="">
    </div>

</template>

<style lang="scss" scoped>
.paginator-pp {
  .btn-light {
    color: #590441;
  }

}

.image_box {
  gap: 2rem;
}

.jumbo-pp-text{
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
  height: 80vh;
  width: 80%;
  max-width: 1125px;

  .jumbo-title {
    font-size: 800%;
    font-weight: 900;
    color: #ffffff;

  }
}
</style>
