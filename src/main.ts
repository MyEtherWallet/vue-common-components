import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { TheHeader } from "./libs/main";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [{ path: "/", component: TheHeader }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
export { TheHeader };
