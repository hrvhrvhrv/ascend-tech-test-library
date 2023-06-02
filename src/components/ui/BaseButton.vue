<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: ""
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    },
}
</script>

<style scoped>
button,
a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font: inherit;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    border-radius: 30px;
    display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
    background-color: #270041;
    border-color: #270041;
}

.flat {
    background-color: transparent;
    color: #000;
    border: none;
}

.outline {
    background-color: transparent;
    border-color: #000;
    color: #000;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
    background-color: lightgray;
}
</style>