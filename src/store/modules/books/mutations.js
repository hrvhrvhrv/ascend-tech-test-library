export default {
  checkoutBook(state, payload) {
    state.checkedOutBooks.push(payload);
  },
  returnBook(state, payload) {
    const indexOfBook = state.checkedOutBooks.findIndex((object) => {
      return object.id === payload.id;
    });
    state.checkedOutBooks.splice(indexOfBook, 1);
  },
  setBooks(state, payload) {
    state.books = payload;
  },
  setCheckedOutBooks(state, payload) {
    state.checkedOutBooks = payload;
  },
};
