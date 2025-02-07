import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue, {
    theme: 'none'
});
app.use(router).mount("#app");
