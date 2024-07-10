<script>

import AppJumbo from '../AppJumbo.vue';
import AppAbout from './AppAbout.vue';

export default {
    name: 'AppHome',
    components: {
        AppJumbo,
        AppAbout
    }
}

</script>

<template>
    <AppJumbo />
    <AppAbout />
</template>

<style></style>