<template>
    <div class="bookDisplayWrapper" v-if="hasCheckoutBooks">
        <BookCard v-for="book in loadCheckedOutBooks" :key="book.id" :link-ref="book.id" :book-name="book.bookName"
            :author-first-name="book.authorFirstName" :author-last-name="book.authorLastName"
            :published-year="book.publishedYear" :description="book.description" :imageRef="book.imageRef"></BookCard>
        <base-button @click="returnBook">Return Book</base-button>
    </div>
    <h2 v-else>You have no books checked out</h2>
</template>
  
<script>
import BookCard from '../books/BookListItem.vue';
export default {
    created() {
        this.loadCheckedOutBooks()
    },
    components: {
        BookCard,
    },
    computed: {
        hasCheckoutBooks() {
            return this.$store.getters['books/hasCheckoutBooks'];
        }
    },
    methods: {
        loadCheckedOutBooks() {
            this.$store.dispatch('books/loadCheckedOutBooks');
        },
        returnBook() {
            this.$store.dispatch('books/returnBook');
        },
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
</style>
 