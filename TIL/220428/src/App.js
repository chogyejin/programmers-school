import TodoList from "./components/TodoList.js";
import { request } from "./utils/api.js";

export default function App({ $target }) {
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

      nextTodos[todoIndex].isCompleted = true; // 완료여부 false에서 true로
      this.setState({
        ...this.state,
        todos: nextTodos, // 바꾼 todos 배열 낙관적 업데이트
      });

      // 실제 처리
      const res = await request(`/${todoId}/toggle`, {
        method: "PUT",
      });

      await fetchTodos();
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

      const res = await request(`/${todoId}/toggle`, {
        method: "PUT",
      });

      await fetchTodos();
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
}
