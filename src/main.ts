import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { MewHeader, MewFooter } from "./libs/main";
import { createMemoryHistory, createRouter } from "vue-router";
const routes = [{ path: "/", component: MewHeader }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
// createApp(App).use(router).use(i18n).mount("#app");

createApp(App).use(router).mount("#app");
export { MewHeader, MewFooter };
