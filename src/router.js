import { createRouter, createWebHistory } from "vue-router";

import BookDetail from "./pages/books/BookDetail.vue";
import BookList from "./pages/books/BookList.vue";
import RegisterAccountPage from "./pages/account/RegisterAccount.vue";
import AccountDisplay from "./pages/account/AccountDisplay.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/books" },
    { path: "/books", component: BookList },
    { path: "/books/:id", component: BookDetail },
    { path: "/register", component: RegisterAccountPage },
    { path: "/account", component: AccountDisplay },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
