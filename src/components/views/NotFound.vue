<script>

export default {
    name: 'NotFound',
    data() {
        return {
            error_message : 'I couldn\'t find what you\'re looking for',
            chatLeft: 'Hei, you guys know this guy?',
            chatRight: 'Yeah, no, no idea'
        }
    }
}
</script>

<template>

    <div class="d-flex flex-row">
        <div class="error-container container">
            <div class="error_number">404</div>
            <div class="error_message">{{ error_message }}</div>
            <router-link class="btn btn-warning fw-light fs-5" to="/">Better go Home</router-link>
        </div>
        <div class="not-found-container w-50 container mt-5">
            <div class="chat-left">
                {{ chatLeft }}
            </div>
            <div class="chat-right">
                {{ chatRight }}
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.not-found-container {
    background-image: url('png-not-found.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 100%;
    height: 550px;
    position: absolute;
    bottom: 2rem;
    right: 0;
    .chat-left{
        position: absolute;
        top: 10%;
        left: 36%;
        width: 20%;
        color: rgba(0, 65, 0, 0);
        font-weight: 700;
        font-size: 1.1rem;
    }
    .chat-right{
        position: absolute;
        top: 10%;
        right: 19%;
        width: 15%;
        color: rgba(51, 2, 51, 0);
        text-align: center;
        padding: 0rem 0 0.2rem 0 ;
        font-weight: 700;
        font-size: 1.1rem;
    }
}
.error_number{
    font-size: 20rem;
    margin: rem 0 0 3rem;
    font-weight: 900;
    color: rgb(213, 4, 213);
}
.error_message{
    color: rgb(145, 3, 145);
    font-size: 4rem;
    margin: -6rem 0 0 0rem;
}
</style>