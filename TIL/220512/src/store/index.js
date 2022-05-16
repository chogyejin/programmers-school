import { reactive } from "vue";

export const state = reactive({
  msg: "Hello 뷰우우!",
  count: 1,
});

// 계산된 데이터 만들어서 return
export const getters = {
  reversedMsg() {
    return state.msg.split("").reverse().join("");
  },
};

// 데이터 수정
export const mutations = {
  increaseCount() {
    state.count += 1; // proxy 인스턴스를 바꿔야 반응형이 되는데, state는 단순한 객체기 때문에 reactive로 state 감싼다
  },
  decreaseCount() {
    state.count -= 1;
  },
  updateMsg(newMsg) {
    state.msg = newMsg;
  },
};

// 그 외
export const actions = {
  async fetchTodo() {
    const todo = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    ).then((res) => res.json());
    console.log(todo);
    // state.msg = todo.title; // 데이터 수정은 mutaions에서만 관리해야 추적이 용이하다
    mutations.updateMsg(todo.title);
  },
};
