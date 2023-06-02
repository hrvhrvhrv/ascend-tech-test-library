import { createApp } from "vue";
import Router from "./router.js";
import Store from "./store/index.js";
import App from "./App.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";

const app = createApp(App);

app.use(Router);
app.use(Store);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);

app.mount("#app");
