import { createStore } from "vuex";

import bookModule from "./modules/books/index.js";
import AccountModule from "./modules/account/index.js";

const store = createStore({
  modules: {
    books: bookModule,
    account: AccountModule,
  },
});
export default store;
