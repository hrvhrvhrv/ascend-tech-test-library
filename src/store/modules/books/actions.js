export default {
  async loadBooks(context) {
    const response = await fetch("https://api.com/books/", {
      method: "GET",
    });

    const responseData = await response.json();

    if (responseData.statusCodeHeader !== 200) {
      // error
    }

    const books = [];

    for (const key in responseData) {
      const book = {
        id: responseData[key].id,
        bookName: responseData[key].bookName,
        authorFirstName: responseData[key].authorFirstName,
        authorLastName: responseData[key].authorLastName,
        publishedYear: responseData[key].publishedYear,
        description: responseData[key].description,
        imageRef: responseData[key].imageRef,
        library: responseData[key].library,
      };
      books.push(book);
    }

    context.commit("setBooks", books);
  },
 
  async loadCheckedOutBooks(context,data) {
    const userData = {
      userId: data.userId
    }
    const response = await fetch("https://api.com/books/", {
      method: "GET",
      body: JSON.stringify(userData)
    });

    const responseData = await response.json();

    if (responseData.statusCodeHeader !== 200) {
      // error
    }

    const books = [];

    for (const key in responseData) {
      const book = {
        id: responseData[key].id,
        bookName: responseData[key].bookName,
        authorFirstName: responseData[key].authorFirstName,
        authorLastName: responseData[key].authorLastName,
        publishedYear: responseData[key].publishedYear,
        description: responseData[key].description,
        imageRef: responseData[key].imageRef,
        library: responseData[key].library,
      };
      books.push(book);
    }

    context.commit("setCheckedOutBooks", books);
  },

  async checkoutBook(context, data) {
    const bookData = {
      bookId: data.bookId,
      userId: data.userId,
      libraryId: data.libraryId,
    };
    const response = await fetch(`https://api.com/books/`, {
      method: "POST",
      body: JSON.stringify(bookData),
    });

    const responseData = await response.json();

    if (responseData.statusCodeHeader !== 200) {
      // error
    }

    context.commit("checkoutBook", bookData);
  },

  async returnBook(context, data) {
    const bookData = {
      bookId: data.bookId,
      userId: data.userId,
      libraryId: data.libraryId,
    };
    const response = await fetch(`https://api.com/books/${bookData.bookId}`, {
      method: "PUT",
      body: JSON.stringify(bookData),
    });

    const responseData = await response.json();

    if (responseData.statusCodeHeader !== 200) {
      // error
    }

    context.commit("returnedBook", bookData);
  },
};
