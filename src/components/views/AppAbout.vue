<script>
export default {
    name: 'AppAbout'
};
</script>

<template>
    <div class="container">
        <h1 class="page_title">About Me</h1>
        <div class="hr"></div>



        <div class="resume-box">
            <router-link to="/resume">
                <img class="img-fluid mt-3 p-3" src="/Fullstack_Resume_EN.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="css">
.resume-box{
    width: fit-content;
}
img{
    width: 200px;
    opacity: 0.8;
}
.fa-expand{
    color: var(--bg-dark);
    position: absolute;
    font-size: 4rem;
    z-index: 10;
    top: 23%;
    left: 27%;
}
</style>