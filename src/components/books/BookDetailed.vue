<template>
    <section class="bookDisplayWrapper">
        <BookCard :key="bookDetails.id" :book-name="bookDetails.bookName" :author-first-name="bookDetails.authorFirstName"
            :author-last-name="bookDetails.authorLastName" :published-year="bookDetails.publishedYear"
            :description="bookDetails.description" :imageRef="bookDetails.imageRef">
        </BookCard>

        <div v-if="hasAccount">
            <base-button v-if="bookAvailable > 0" mode="outline" @click="checkOutBook">Checkout</base-button>
            <h2 v-else>Book Not available</h2>
        </div>
    </section>
</template>
  
<script>
import BookCard from './BookListItem.vue';


export default {
    components: {
        BookCard
    },
    methods: {
        returnBook() {
            this.$store.dispatch('books/returnBook', {
                bookId: this.bookId,
                userId: this.userId,
                libraryId: this.libraryId
            });
            this.$router.replace('/account');
        }
    },
    computed: {
        bookAvailable() {
            return this.$store.getters['books/availableBookCopies'];
        },
        bookDetails() {
            return this.$store.getters['books/getSingleBook'];
        },
    }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
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
 




 