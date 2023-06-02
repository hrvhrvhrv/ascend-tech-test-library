<template>
  <section>
    <page-banner :message="pageTitle"></page-banner>
  </section>
</template>
  
<script>
import PageBanner from '../components/ui/BannerDisplay.vue'

export default {

  data() {
    return {
      pageTitle: "Not Found"
    }
  },
  components: {
    PageBanner
  }

};
</script>
  
<style scoped></style>