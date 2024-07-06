<script>
export default {
    name: 'AppAbout',
    data() {
        return {
            technologies: [
                "devicon-css3-plain",
                "devicon-bootstrap-plain",
                "devicon-vuejs-plain-wordmark",
                "devicon-mysql-original",
                "devicon-laravel-original",
                "devicon-php-plain",
                "devicon-codepen-original",
                "devicon-git-plain",
                "devicon-vscode-plain",
                "devicon-javascript-plain",
                "devicon-npm-original-wordmark",
                "devicon-vitejs-plain"
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


            <div class="right-side">

                <p class="all-about-me">
                    I'm a creative soul who loves coding and travel. I spent a year in Australia working as a video
                    editor, where I discovered my passion for programming. Now, I'm diving into the tech world, blending
                    my creative background with my new coding skills. I'm all about tackling challenges and exploring
                    new places along the way.
                </p>

                <div class="hr" style="margin-top: 4rem;"></div>

                <div class="slider">
                    <div class="slide-track">

                        <div v-for="technology in technologies" class="slide">
                            <i :class="technology"></i>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.right-side {

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

@import '../../partials_scss/_carousel.scss';

</style>
