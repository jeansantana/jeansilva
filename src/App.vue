<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
  @import url('assets/css/normalize.css');
  @import url('assets/css/bootstrap.min.css');
  @import url('assets/css/owl.carousel.css');
  @import url('assets/css/magnific-popup.css');
  @import url('assets/css/main.css');
</style>
