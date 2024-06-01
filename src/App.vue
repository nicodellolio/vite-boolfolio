<script>
import AppHeader from './AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader />

  <main>
    <RouterView />
  </main>


</template>

<style></style>
