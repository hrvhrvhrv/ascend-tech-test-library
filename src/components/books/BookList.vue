<template>
    <book-filter @change-filer="setFilter"></book-filter>
    <div class="bookDisplayWrapper" v-if="hasBooks">
        <BookCard v-for="book in filteredBooks" :key="book.id" :link-ref="book.id" :book-name="book.bookName"
            :author-first-name="book.authorFirstName" :author-last-name="book.authorLastName"
            :published-year="book.publishedYear" :description="book.description" :imageRef="book.imageRef"></BookCard>

    </div>
    <h2 v-else>No Books Available</h2>
</template>
  
<script>
import BookCard from './BookListItem.vue';
import BookFilter from './BookListFilter.vue';
export default {
    created() {
        this.loadBooks()
    },
    components: {
        BookCard,
        BookFilter
    },
    data() {
        return {
            activeFilter: 'all'
        }
    },
    computed: {
        filteredBooks() {
            const books = this.$store.getters['books/books'];
            return books.filter(book => {
                if (this.activeFilter == 'all') {
                    return true;
                } else {
                    return this.activeFilter == book.library;
                }
            });
        },
        hasBooks() {
            return this.$store.getters['books/hasBooks'];
        }
    },
    methods: {
        setFilter(updatedFilter) {
            this.activeFilter = updatedFilter;
        },
        loadBooks() {
            this.$store.dispatch('books/loadBooks');
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
 