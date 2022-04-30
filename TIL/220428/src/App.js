import TaskManager from "./components/TaskManager.js";
import SyncTaskManager from "./components/SyncTaskManager.js";
import TodoList from "./components/TodoList.js";
import { request } from "./utils/api.js";

export default function App({ $target }) {
  // const tasks = new TaskManager();
  const tasks = new SyncTaskManager();
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

  const handleTodoDrop = async (todoId, updateValue) => {
    const nextTodos = [...this.state.todos];
    const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId);

    nextTodos[todoIndex].isCompleted = updateValue;
    this.setState({
      ...this.state,
      todos: nextTodos,
    });

    // tasks.addTask(async () => {
    //   await request(`/${todoId}/toggle`, {
    //     method: "PUT",
    //   });
    // });

    tasks.addTask({
      url: `/${todoId}/toggle`,
      method: "PUT",
    });
  };

  const handleTodoRemove = (todoId) => {
    const nextTodos = [...this.state.todos];
    const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId);

    nextTodos.splice(todoIndex, 1);

    this.setState({
      ...this.state,
      todos: nextTodos,
    });

    tasks.removeTasks(`/${todoId}`);

    tasks.addTask({
      url: `/${todoId}`,
      method: "DELETE",
    });
  };

  const incompletedTodoList = new TodoList({
    $target,
    initialState: {
      title: "완료되지 않은 todo",
      todos: [],
    },
    onDrop: (todoId) => handleTodoDrop(todoId, false),
    onRemove: handleTodoRemove,
  });

  const completedTodoList = new TodoList({
    $target,
    initialState: {
      title: "완료된 todo",
      todos: [],
    },
    onDrop: (todoId) => handleTodoDrop(todoId, true),
    onRemove: handleTodoRemove,
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
