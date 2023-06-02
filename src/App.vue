<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
  <page-footer></page-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import PageFooter from './components/layout/PageFooter.vue'

export default {
  components: {
    TheHeader,
    PageFooter
  },
  data() {
    return {
      bannerMessage: 'Browse our Catalog',
    }
  }, methods: {}
}
</script>

<style scoped>
@import './assets/css/main.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  margin-top: 180px;
}

h1 {
  font-family: 'Oswald', sans-serif;
  font-size: 80px;
  margin: 0;
  text-align: center;
}

section {
  box-sizing: border-box;
  width: 90%;
  margin: 10px auto;
  padding: 10px;
}
</style>
