<template>
    <footer>
        <p v-html="copyRight"></p>
    </footer>
</template>
  
<script>

let thisYear = new Date();

export default {
    data() {
        return {
            copyRight: "&copy; Ascend Library " + thisYear.getFullYear()
        }
    }
};
</script>
  
<style scoped>
p {
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    margin: 40px auto;
    text-align: center;
}

section {
    box-sizing: border-box;
    width: 90%;
    margin: 10px auto;
    padding: 10px;
}
</style>