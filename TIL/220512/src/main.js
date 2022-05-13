import { createApp } from "vue";
import App from "./App.vue";
import fetchPlugin from "./plugins/fetch";

const app = createApp(App);
app.use(fetchPlugin, {
  pluginName: "$myFetch",
}); // 플러그인 전역 등록
app.mount("#app");
