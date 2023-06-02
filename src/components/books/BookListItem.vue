<template>
    <base-card v-if="!linkRef" :class="randomCardColor">
        <h3>{{ bookName }}</h3>
        <p>{{ authorFullName }}</p>
        <img :src="require('@/assets/' + imageRef)" alt="image of book cover">
    </base-card>
    <router-link v-else :to="bookDetailLink">
        <base-card :class="randomCardColor">
            <h3>{{ bookName }}</h3>
            <p>{{ authorFullName }}</p>
            <img :src="require('@/assets/' + imageRef)" alt="image of book cover">
        </base-card>
    </router-link>
</template>
  
<script>
export default {
    data() {
        return {
            backgroundOption: ["red", "blue", "green"]
        }
    },
    props: {
        linkRef: {
            type: Number,
            required: false
        },
        bookName: {
            type: String,
            required: true
        },
        authorFirstName: {
            type: String,
            required: true
        },
        authorLastName: {
            type: String,
            required: true
        },
        publishedYear: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageRef: {
            type: String,
            required: false,
            default: "logo.png"
        },
        cardColor: {
            required: false,
            type: String
        }
    },
    computed: {
        authorFullName() {
            return this.authorFirstName + " " + this.authorLastName;
        },
        randomCardColor() {
            return this.backgroundOption[Math.floor(Math.random() * this.backgroundOption.length)] + 'Background'
        },
        bookDetailLink() {
            return this.$route.path + '/' + this.linkRef;
        }
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration: none;
    color: black;
}

.card:hover>img {
    scale: 115%;
    rotate: -5deg;
}

.card>img {
    width: 60%;
    transition: all ease-in-out 0.3s;
}

.card>h3,
.card>p {
    width: 100%;
    position: relative;
    z-index: 2;
    padding: 0;
    margin: 0 2rem;
}

.card>h3 {
    font-family: 'Oswald', sans-serif;
}

/* Card Backgrounds */
.redBackground {
    background-color: #f4e9e6;
}

.orangeBackground {
    background-color: #ffe4c9;
}

.blueBackground {
    background-color: #eef2f3;
}

.greenBackground {
    background-color: #e9e8e4;
}
</style>
 