import { createStore } from "vuex";
import message from "./message";
import count from "./count";

export default createStore({
  // 전역으로 쓸 거면 여기 state()에 등록
  state() {
    return {
      msg: "안녕 뷰우우!!",
      count: 1,
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    message,
    count,
  },
});
