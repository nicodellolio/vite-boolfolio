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
    <div class="container jumbotron p-bg-lighter mx-auto rounded-3 mt-5 mx-5 d-flex justify-content-evenly">

        <div class="left-side ps-3 z-2">

            <h1 class="fw-bold">
                Full-Stack Portfolio
            </h1>


            <p class="fs-4 w-50 fw-light">
                Welcome to my Full-Stack Web Developer Portfolio. Here I collect some of my major projects created in
                these
                years.
                I developed my skills throughtout a full-course with <span class="fw-semibold"
                    style="color: limegreen">Boolean</span>
            </p>


            <div class="">
                <a class="btn btn-warning" href="{{route('admin.projects.index')}}">Go to your projects</a>
            </div>

        </div>
    
        <img class="jumbo-img" src="../assets/jumbo.png" alt="">
    </div>

</template>

<style lang="scss" scoped></style>
