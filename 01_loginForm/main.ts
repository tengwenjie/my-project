import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import i18n from "./i18n";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(i18n);
app.mount("#app");

// createApp(App).mount('#app')
