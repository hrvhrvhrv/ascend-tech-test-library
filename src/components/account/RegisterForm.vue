<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" v-model.trim="firstName">
        </div>
        <div>
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" v-model.trim="lastName">
        </div>
        <div>
            <label for="firstName">Select Library</label>
            <select id="library" v-model.number="library">
                <option selected disabled>Select Library</option>
                <option value="1">Main Library</option>
                <option value="2">Local Library</option>
            </select>
        </div>
        <base-button mode="outline">Register</base-button>
    </form>
</template>
    
<script>


export default {
    emits: ['save-data'],
    data() {
        return {
            firstName: '',
            lastName: '',
            library: null,
        }
    },
    methods: {
        submitForm() {
            const formData = {
                first: this.firstName,
                last: this.lastName,
                libraryId: this.library
            };
            // console.log(formData);
            this.$emit('save-data', formData);
        }
    }
};
</script>
    
<style scoped></style>