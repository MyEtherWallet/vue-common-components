import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import FooterPreview from "./FooterPreview.vue";
import { MewHeader, MewFooter } from "./libs/main";
import { createMemoryHistory, createRouter } from "vue-router";
const routes = [{ path: "/", component: MewHeader }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
// /#footer opens the AppFooter preview instead of the 1.x harness
const Root = window.location.hash === "#footer" ? FooterPreview : App;
createApp(Root).use(router).mount("#app");
export { MewHeader, MewFooter };
