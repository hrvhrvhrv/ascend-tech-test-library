<template>
  <section>
    <base-card>
      <page-banner :message="pageTitle"></page-banner>
      <account-form @save-data="saveData"></account-form>
    </base-card>
  </section>
</template>
  
<script>
import PageBanner from '../../components/ui/BannerDisplay.vue'
import AccountForm from '../../components/account/RegisterForm.vue'
export default {

  data() {
    return {
      pageTitle: "Register Account"
    }
  },
  components: {
    PageBanner,
    AccountForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('account/registerAccount', data);
      this.$router.push('/account');
    }
  }

};
</script>
  
<style scoped></style>