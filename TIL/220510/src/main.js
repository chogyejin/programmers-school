import * as Vue from "vue"; // vue 패키지가 common.js 형식으로 export 해서 *로 가져옴
import App from "./App.vue";

Vue.createApp(App).mount("#app");
