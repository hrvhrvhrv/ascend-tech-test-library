<template>
    <section>
        <page-banner :message="pageTitle"></page-banner>
        <book-detailed></book-detailed>
    </section>
</template>
    
<script>
import PageBanner from '../../components/ui/BannerDisplay.vue'
import BookDetailed from '../../components/books/BookDetailed.vue';
export default {

    data() {
        return {
            pageTitle: "Book Detail"
        }
    },
    components: {
        PageBanner,
        BookDetailed
    }

};
</script>
    
<style scoped></style>