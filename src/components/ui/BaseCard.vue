<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
    
    
<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 5px;
    padding: 5px;
    overflow: hidden;
    transition: all ease-in-out 0.3s;
}
</style>