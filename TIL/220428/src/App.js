import TaskManager from "./components/TaskManager.js";
import TodoList from "./components/TodoList.js";
import { request } from "./utils/api.js";

export default function App({ $target }) {
  const tasks = new TaskManager();
  this.state = { todos: [] };

  this.setState = (nextState) => {
    this.state = nextState;

    const { todos } = this.state;
    incompletedTodoList.setState({
      ...incompletedTodoList.state,
      todos: todos.filter((todo) => !todo.isCompleted),
    });

    completedTodoList.setState({
      ...completedTodoList.state,
      todos: todos.filter((todo) => todo.isCompleted),
    });
  };

  const incompletedTodoList = new TodoList({
    $target,
    initialState: {
      title: "완료되지 않은 todo",
      todos: [],
    },
    onDrop: async (todoId) => {
      // 낙관적 업데이트
      const nextTodos = [...this.state.todos]; // 현재 todo copy
      const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId); // 현재 todo index 찾고

      nextTodos[todoIndex].isCompleted = false; // 완료여부 false에서 true로
      this.setState({
        ...this.state,
        todos: nextTodos, // 바꾼 todos 배열 낙관적 업데이트
      });

      // 태스크 큐 적용
      tasks.addTask(async () => {
        await request(`/${todoId}/toggle`, {
          method: "PUT",
        });
      });
    },
  });

  const completedTodoList = new TodoList({
    $target,
    initialState: {
      title: "완료된 todo",
      todos: [],
    },
    onDrop: async (todoId) => {
      const nextTodos = [...this.state.todos];
      const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId);

      nextTodos[todoIndex].isCompleted = true;
      this.setState({
        ...this.state,
        todos: nextTodos,
      });

      tasks.addTask(async () => {
        await request(`/${todoId}/toggle`, {
          method: "PUT",
        });
      });
    },
  });

  const fetchTodos = async () => {
    const todos = await request(``);

    this.setState({
      ...this.state,
      todos,
    });
  };

  fetchTodos();

  const $button = document.createElement("button");
  $button.textContent = "변경 내용 동기화";
  $target.appendChild($button);
  $button.addEventListener("click", () => tasks.run()); // 버튼 누르면 백엔드로 요청
}
