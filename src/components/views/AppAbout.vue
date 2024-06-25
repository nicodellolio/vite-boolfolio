<script>
export default {
    name: 'AppAbout',
    data() {
        return {
            technologies: [
                'Laravel', 'MySQL', 'PHP', 'Vite', 'VueJS', 'Javascript', 'CSS', 'HTML'
            ]
        }
    }
};
</script>

<template>

    <div class="container">
        <h1 class="page_title">About Me</h1>
        <div class="hr"></div>

        <div class="about-me d-flex">

            <div class="svgs">


            </div>


            <div class="resume-box mx-auto align-self-center">
                <router-link to="/resume">
                    <img class="" src="/Fullstack_Resume_EN.png" alt="">
                </router-link>
            </div>

            <div class="right-side">

                <p class="all-about-me">
                    During my experience as video editor, I realized my true passion lies in the world of coding and
                    software
                    development. Inspired by my experience in visual storytelling and post-production,
                    I now apply my creative problem-solving skills to deliver innovative software solutions. I'm excited
                    to
                    combine my technical aptitude and eye for detail to create stunning user experiences in my current
                    role.
                </p>

                <div class="hr" style="margin-top: 4rem;"></div>

                <div class="technologies">
                    <ul class="list-unstyled">
                        <li class="list-item" v-for="technology in technologies">{{ technology }}</li>
                    </ul>
                </div>


            </div>

        </div>
    </div>
</template>

<style scoped lang="css">
.resume-box {
    width: fit-content;
}

img {
    width: 200px;
    opacity: 0.9;
}

img:hover {
    scale: 1.15;
    opacity: 1;
}


.fa-expand {
    color: var(--bg-dark);
    position: absolute;
    font-size: 4rem;
    z-index: 10;
    top: 23%;
    left: 27%;
}

.right-side {
    width: 41%;

    .all-about-me {
        margin: 3rem 0 4rem;
        text-align: end;
        font-family: "Comfortaa", sans-serif;
        font-optical-sizing: auto;
        color: #ffffffbc;
        font-weight: 100;
        font-size: 1.5rem;
    }

}

ul{
    margin-top: 2rem;
    .list-item {
        color: #ffffffbc;
        text-transform: uppercase;
        font-size: 2rem;
        
        
    }
}

</style>
