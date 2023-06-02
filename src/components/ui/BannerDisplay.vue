<template>
  <section>
    <h2>{{ message }}</h2>
  </section>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
h2 {
  font-family: 'Oswald', sans-serif;
  font-size: 60px;
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