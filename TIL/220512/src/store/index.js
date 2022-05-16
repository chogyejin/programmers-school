import { createStore } from "vuex";
import message from "./message";
import count from "./count";

export default createStore({
  // 데이터는 함수로 만들어야함
  state() {
    return {
      msg: "안녕 뷰우우!!",
      count: 1,
    };
  },
  // state에 대한 계산된 결과 생성 후 return
  getters: {},
  // 데이터 수정(동기)
  mutations: {},
  // 그 외 모든 로직(비동기)
  actions: {
    // context 객체는 state, getters, commit(mutations), dispatch(actions)로 다른 객체에 접근
    // async fetchTodo(context) {
    //   const todo = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos/1"
    //   ).then((res) => res.json());
    //   console.log(todo);
    //   context.commit("updateMsg", todo.title); // 매개변수 context 구조분해할당 가능
    // },
  },
  modules: {
    message,
    count,
  },
});
