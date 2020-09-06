<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  components: {
    Header,
  },
}
</script>

<style>
@import './assets/css/custom-bootstrap.css';
@import './assets/css/general.css';

#app{
  padding-left: 300px;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media (max-width: 750px) {
  #app {
    padding-left: 0;
    margin-top: 49px;
  }
}
</style>
