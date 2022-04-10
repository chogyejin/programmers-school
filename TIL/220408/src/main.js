import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

// 더미 데이터
const todos = [
  {
    _id: 1,
    content: "JS 공부",
    isCompleted: true,
  },
  {
    _id: 2,
    content: "쉬기",
    isCompleted: false,
  },
];

const $target = document.querySelector("#app");

new TodoForm({
  $target,
  onSubmit: (content) => {
    console.log(content);
  },
});

new TodoList({
  $target,
  initialState: todos,
  onToggle: (id) => {
    console.log("토글" + id);
  },
  onRemove: (id) => {
    console.log("삭제" + id);
  },
});
