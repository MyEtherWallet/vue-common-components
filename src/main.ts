import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { MewHeader, MewFooter } from "./libs/main";
import { createMemoryHistory, createRouter } from "vue-router";
import { i18n } from "./i18n/i18n";

const routes = [{ path: "/", component: MewHeader }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
createApp(App).use(router).use(i18n).mount("#app");
export { MewHeader, MewFooter };
