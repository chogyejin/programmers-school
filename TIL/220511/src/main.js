import { createApp } from "vue";
import App from "~/App";
import Btn from "~/components/Btn";

const app = createApp(App);
app.component("Btn", Btn); // 전역에 Btn 등록(자주 사용되는 것만)
app.mount("#app");
