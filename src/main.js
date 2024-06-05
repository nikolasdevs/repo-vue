import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { VueAwesomePaginate } from "vue-awesome-paginate";

import "../main.css";
import "./input.css";
import "vue-awesome-paginate/dist/style.css";

// Create the Vue application instance
const app = createApp(App);

// Use plugins and libraries
app.use(VueAwesomePaginate);
app.use(createPinia());
app.use(router);

// Mount the app to the DOM
app.mount("#app");
