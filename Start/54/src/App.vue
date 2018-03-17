<template>

  <div id="app">

    <h1>Pokaz zdjęć</h1>

    <slideshow :images=""></slideshow>

  </div>

</template>

<script>

  import Slideshow from './components/Slideshow.vue';

  export default {
    name: 'App',
    components: {
          Slideshow
    }
  }
</script>
