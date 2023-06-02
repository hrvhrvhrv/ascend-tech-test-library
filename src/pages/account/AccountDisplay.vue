<template>
  <section>
    <page-banner :message="pageTitle"></page-banner>
    <checked-out-books></checked-out-books>
  </section>
</template>
  
<script>
import PageBanner from '../../components/ui/BannerDisplay.vue'
import CheckedOutBooks from '../../components/account/CheckedOutBookList.vue'
export default {

  data() {
    return {
      pageTitle: "Account Display"
    }
  },
  components: {
    PageBanner,
    CheckedOutBooks
  }

};
</script>
  
<style scoped></style>