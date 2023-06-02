<template>
  <header>
    <nav>
      <div class="logoWrapper">
        <router-link to="/"><img class="logo" :src="require('@/assets/logo.svg')" alt="">
          <p>Library</p>
        </router-link>
      </div>
      <ul>
        <li v-if="hasAccount">
          Welcome {{ accountName }}
        </li>
        <li v-else>
          <base-button mode="outline" link to="/Register">Register</base-button>
        </li>
        <li v-if="hasAccount">
          <base-button mode="outline" link to="/account">Account</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ['set-page'],
  computed: {
    hasAccount() {
      return this.$store.getters['account/hasAccount'];
    },
    accountName() {
      return this.$store.getters['account/getAccountFirstName'];
    }
  }
};
</script>

<style scoped>
header {
  z-index: 1000;
  width: 90%;
  justify-content: center;
  display: flex;
  position: fixed;
  top: 2%;
  margin: 0 auto;
  bottom: auto;
  left: 0%;
  right: 0%;
}

nav {
  z-index: 1000;
  width: 100%;
  text-align: center;
  background-color: #fff;
  border-radius: 1000px;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  display: flex;
  flex-direction: row;
  position: -webkit-sticky;
  position: sticky;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
  box-shadow: 0 4px 2.5rem rgba(0, 0, 0, .08);
}

ul {
  list-style: none;
  margin: 0 2rem 0 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.logo {
  width: 125px;
  margin-left: 30px;
}

.logoWrapper>a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 25px;
}

.logoWrapper p {
  margin-left: 15px;
}
</style>