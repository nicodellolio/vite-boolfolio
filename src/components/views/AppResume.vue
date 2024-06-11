<script>
export default {
    name: 'AppResume',
    data() {
        return {}
    }
}
</script>


<template>
    <div class="resume container p-5">
        <div class="banner d-flex justify-content-between ">
            <router-link class="back btn text-decoration-none fs-3 mt-4 mb-2 px-3 pt-1" to="/about">
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                Go back
            </router-link>
            <h1 class="page_title">MY RESUME</h1>
        </div>
        <div class="hr"></div>
        <img class="img-fluid mt-3 p-3" src="/Fullstack_Resume_EN.png" alt="">
    </div>
</template>


<style lang="scss" scoped>
.back{
   color: var(--bg-light);
   border: 1px solid var(--bg-light);
   border-radius: 10px;
   background-color: transparent;
}
</style>