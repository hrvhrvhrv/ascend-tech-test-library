<template>
  <section class="splashArea">
    <div class="splashSection splashLeft">
      <h1>What are you reading?</h1>
      <h2>Welcome to the Ascend library.</h2>
      <p>Login to checkout a book</p>
    </div>
    <div class="splashSection splashRight">
      <img :src="require('@/assets/readerIcon.png')" alt="peron reading">
    </div>
  </section>
</template>

<style scoped>
.splashArea {
  display: flex;
  flex-direction: row;
  width: 90%;
  min-height: 50vh;
  margin: 40px auto;
}

.splashSection {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.splashSection>h1 {
  font-family: 'Oswald', sans-serif;
  font-size: 80px;
  margin-bottom: 0;
}

.splashSection>h2 {
  font-size: 40px;
  margin-top: 0;
}

.splashSection>p {
  font-size: 20px;
  margin-top: 0;
}

.splashRight {
  display: flex;
  justify-content: center;
  align-items: center;
}

.splashRight>img {
  width: 30vw;
}

button {
  font: inherit;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  margin: 0 5px;
  display: inline-block;
  color: darkgrey;
  border-color: lightgray;
  background-color: #dadada;
  border-radius: 25px;
}
</style>