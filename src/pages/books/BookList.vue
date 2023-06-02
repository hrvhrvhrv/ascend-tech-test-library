<template>
  <main>
    <splash-area></splash-area>
    <page-banner :message="bannerMessage"></page-banner>

    <book-list></book-list>
  </main>
</template>
  
<script>
import BookList from '../../components/books/BookList.vue'
import SplashArea from '../../components/layout/SplashArea.vue'
import PageBanner from '../../components/ui/BannerDisplay.vue'

export default {

  components: {
    BookList,
    SplashArea,
    PageBanner,

  },
  data() {
    return {
      activePage: 'teams-list',
      bannerMessage: 'Browse our Catalog',
    }
  }, methods: {

  }
}
</script>
  
<style scoped>
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
  