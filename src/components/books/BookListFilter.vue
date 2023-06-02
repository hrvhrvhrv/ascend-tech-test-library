<template>
    <div class="filterBox">
        <h2>Filter Library</h2>
        <select id="libraryFilter" @change="setFilter">
            <option selected value="all">All Libraries</option>
            <option value="1">Main Library</option>
            <option value="2">Local Library</option>
        </select>
    </div>
</template>
  
<script>

export default {
    methods: {
        setFilter(event) {
            const whatLibrary = event.target.value;
            this.$emit('change-filer', whatLibrary);
        }
    }
}
</script>

<style scoped>
.bookDisplayWrapper {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    padding: 10px;
    width: 90%;
    margin: 0 auto;
}

.filterBox {
    width: 30%;
    margin: 0 auto 40px;
    text-align: center;
}
</style>
 