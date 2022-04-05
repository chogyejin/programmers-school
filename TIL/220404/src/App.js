import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { setItem } from "./storage.js";

// main에서 처음에 $target으로 $app, initialState로 더미 데이터 넘김
export default function App({ $target, initialState }) {
  new Header({
    $target,
    text: "투두리스트입니다",
  });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text }];
      todoList.setState(nextState);

      // localStorage.setItem("todos", JSON.stringify(nextState));
      setItem("todos", JSON.stringify(nextState));
      console.log(storage);
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
  });
}
