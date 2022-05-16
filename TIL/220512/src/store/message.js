export default {
  namespaced: true,
  state() {
    return {
      msg: "모듈의 메세지~~",
    };
  },
  getters: {
    reversedMsg(state) {
      return state.msg.split("").reverse().join("");
    },
  },
  mutations: {
    updateMsg(state, newMsg) {
      state.msg = newMsg;
    },
  },
  actions: {
    async fetchTodo(context) {
      const todo = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      ).then((res) => res.json());
      console.log(todo);
      context.commit("updateMsg", todo.title);
    },
  },
};
