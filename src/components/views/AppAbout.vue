<script>
export default {
    name: 'AppAbout',
    data() {
        return {
            technologies: [
                {
                    "icon": "devicon-css3-plain",
                    "name": "CSS 3"
                },
                {
                    "icon": "devicon-bootstrap-plain",
                    "name": "Bootstrap"
                },
                {
                    "icon": "devicon-vuejs-plain-wordmark",
                    "name": "VueJS"
                },
                {
                    "icon": "devicon-mysql-original",
                    "name": "MYSQL"
                },
                {
                    "icon": "devicon-laravel-original",
                    "name": "Laravel"
                },
                {
                    "icon": "devicon-php-plain",
                    "name": "PHP"
                },
                {
                    "icon": "devicon-codepen-original",
                    "name": "CodePen"
                }, 
                {
                    "icon": "devicon-git-plain",
                    "name": "GIT"
                }, 
                {
                    "icon": "devicon-vscode-plain",
                    "name": "VS Code"
                }, 
                {
                    "icon": "devicon-javascript-plain",
                    "name": "JavaScript"
                },
                {
                    "icon": "devicon-npm-original-wordmark",
                    "name": "NPM"
                },
                {
                    "icon": "devicon-vitejs-plain",
                    "name": "Vite"
                }
            ],
        }
    }
};
</script>

<template>

    <div class="container" id="about">
        <h1 class="page_title">About Me</h1>
        <div class="hr"></div>

        <h1 class="text-end a-bit-about-me">A bit about me</h1>

        <div class="about-me d-flex">


            <div class="left-side">
                <p>The technologies I'm fluent in &downarrow;</p>
            </div>

            <div class="right-side">


                <p class="all-about-me">
                    I'm a creative soul who loves coding and travel. I spent a year in Australia working as a video
                    editor, where I discovered my passion for programming. Now, I'm diving into the tech world, blending
                    my creative background with my new coding skills. I'm all about tackling challenges and exploring
                    new places along the way.
                </p>


            </div>


        </div>
    </div>
    <div class="slider">
        <div class="slide-track">

            <div v-for="technology in technologies" class="slide">
                <i :class="technology.icon"><span v-if="technology.name != 'VueJS'">{{ technology.name }}</span></i>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.about-me {
    display: flex;

    .left-side {
        display: flex;
        align-items: end;
        margin-bottom: -10%;
        width: 600px;

        p {
            font-family: "Cabin Sketch", sans-serif;
            font-size: 1.7rem;
            transform: rotate(-15deg);
            color: #fff;
            font-weight: 600;
        }
    }

}

.right-side {
    display: flex;
    flex-direction: column;

    .all-about-me {
        margin: 3rem 0 4rem;
        text-align: end;
        font-size: 1.25rem;
        font-family: "Comfortaa", sans-serif;
        font-optical-sizing: auto;
        color: #ffffffbc;
        font-weight: 100;
        width: 60%;
        align-self: flex-end;
    }

}

.a-bit-about-me {
    font-size: 8rem;
    margin-top: 5rem;
    font-weight: 800;
    text-transform: lowercase;
    color: var(--bg-lighter)
}

@import '../../partials_scss/_carousel.scss';
</style>
