import { createApp } from "vue";
import App from "~/App";
import Btn from "~/components/Btn";
import World from "~/components/World";

const app = createApp(App);
app.component("Btn", Btn); // 전역에 Btn 등록(자주 사용되는 것만)
app.component("World", World);
app.mount("#app");
