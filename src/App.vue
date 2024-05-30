<script>
import axios from 'axios';


export default{
  name: 'App',
  data() {
    return{
      'projects' : []
    }
  },
  mounted(){
    axios
    .get('http://127.0.0.1:8000/api/project')
    .then(response => {
      console.log(response);
    })
  }
}
</script>

<template>

</template>

<style>

</style>
