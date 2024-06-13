<script>
export default {
    name: 'AppAbout'
};
</script>

<template>

    <div class="container">
        <h1 class="page_title">About Me</h1>
        <div class="hr"></div>

        <div class="about-me d-flex">

            <div class="svgs">
                <!-- 
                <svg viewBox="0 0 163 160" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style="width: 200px; position: absolute; top: 15%; left: 29%;">
                    <path d="M153.199 6.92285V149.861H9.50098V159.244H162.632V6.92285H153.199Z" fill="#fff4" />
                </svg>
                <svg viewBox="0 0 163 160" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style="width: 200px; position: absolute; top:15%; left: 40%; transform:rotate(90deg);">
                    <path d="M153.199 6.92285V149.861H9.50098V159.244H162.632V6.92285H153.199Z" fill="#fff4" />
                </svg>
                <svg viewBox="0 0 163 160" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style="width: 200px; position: absolute; top: 35%; left: 40%; transform: rotate(180deg);">
                    <path d="M153.199 6.92285V149.861H9.50098V159.244H162.632V6.92285H153.199Z" fill="#fff4" />
                </svg>
                <svg viewBox="0 0 163 160" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style="width: 200px; position: absolute; top: 35%; left: 29%; transform: rotate(270deg);">
                    <path d="M153.199 6.92285V149.861H9.50098V159.244H162.632V6.92285H153.199Z" fill="#fff4" />
                </svg> -->

                <svg class="w-10 h-10" viewBox="0 0 77 85" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style="width: 400px; position: absolute; top:50%; left: 10%; transform: rotate(-20deg);">
                    <path
                        d="M1.33755 84.3973C0.297616 62.7119 2.93494 39.8181 19.4192 23.8736C28.2211 15.3599 42.4944 12.5723 47.6281 26.2359C51.1245 35.5419 51.542 51.9945 41.0605 57.0865C29.486 62.7095 40.2945 35.2221 41.9942 32.4952C49.9497 19.7313 59.7772 11.6122 72.2699 3.78281C76.9496 0.849879 73.7108 0.477284 70.0947 1.13476C66.9572 1.7052 63.4035 2.43717 60.5291 3.81975C59.6524 4.24143 65.7349 2.73236 66.6827 2.44768C70.7471 1.22705 75.4874 -0.0219285 75.9527 5.60812C76.0274 6.5127 75.9956 14.9844 74.7481 15.2963C74.099 15.4586 71.0438 10.27 70.4642 9.65288C66.6996 5.64506 63.5835 4.42393 58.2726 5.11792"
                        stroke="#fff5" stroke-width="4" stroke-linecap="round" />
                </svg>

            </div>


            <div class="resume-box mx-auto align-self-center">
                <router-link to="/resume">
                    <img class="img-fluid" src="/Fullstack_Resume_EN.png" alt="">
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
                    technologies list
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
</style>