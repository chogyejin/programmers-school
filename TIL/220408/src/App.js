import TodoList from "./TodoList.js";
import TodoForm from "./TodoForm.js";
import Header from "./Header.js";
import { request } from "./api.js";
import UserList from "./UserList.js";

export default function App({ $target }) {
  const $userListContainer = document.createElement("div");
  const $todoListContainer = document.createElement("div");

  $target.appendChild($userListContainer);
  $target.appendChild($todoListContainer);

  this.state = {
    userList: [],
    username: null,
    todos: [],
    isTodoLoading: true,
  };

  this.setState = (nextState) => {
    this.state = nextState;

    userList.setState(this.state.userList);

    header.setState({
      username: this.state.username,
      isLoading: this.state.isTodoLoading,
    });

    todoList.setState({
      todos: this.state.todos,
      isLoading: this.state.isTodoLoading,
      username: this.state.username,
    });

    this.render();
  };

  const userList = new UserList({
    $target: $userListContainer,
    initialState: this.state.userList,
    onSelect: async (username) => {
      this.setState({
        ...this.state,
        username,
      });
      fetchTodos();
    },
  });

  const header = new Header({
    $target: $todoListContainer,
    initialState: {
      username: this.state.username,
      isLoading: this.state.isTodoLoading,
    },
  });

  new TodoForm({
    $target: $todoListContainer,
    onSubmit: async (content) => {
      console.log(content);
      // 낙관적 업데이트
      const todo = {
        content,
        isCompleted: false,
      };
      this.setState({
        ...this.state,
        todos: [...this.state.todos, todo],
      });
      await request(`/${this.state.username}`, {
        method: "POST",
        body: JSON.stringify(todo),
      });
      fetchTodos();
    },
  });

  const todoList = new TodoList({
    $target: $todoListContainer,
    initialState: {
      todos: this.state.todos,
      isTodoLoading: this.state.isTodoLoading,
      username: this.state.username,
    },
    onToggle: async (id) => {
      // 낙관적 업데이트
      const todoIndex = this.state.todos.findIndex((todo) => todo._id === id);
      const nextTodos = [...this.state.todos];
      nextTodos[todoIndex].isCompleted = !nextTodos[todoIndex].isCompleted;

      this.setState({
        ...this.state,
        todos: nextTodos,
      });

      await request(`/${this.state.username}/${id}/toggle`, {
        method: "PUT",
      });
      fetchTodos();
    },
    onRemove: async (id) => {
      // 낙관적 업데이트
      const todoIndex = this.state.todos.findIndex((todo) => todo._id === id);
      const nextTodos = [...this.state.todos];
      nextTodos[todoIndex].isCompleted = !nextTodos[todoIndex].isCompleted;

      this.setState({
        ...this.state,
        todos: nextTodos,
      });

      await request(`/${this.state.username}/${id}`, {
        method: "DELETE",
      });
      fetchTodos();
    },
  });

  const fetchUserList = async () => {
    const userList = await request("/users");
    this.setState({
      ...this.state,
      userList,
    });
  };

  const fetchTodos = async () => {
    // username이 있을 때 request
    const { username } = this.state;
    if (username) {
      this.setState({
        ...this.state,
        isTodoLoading: true,
      });
      const todos = await request(`/${username}`);
      this.setState({
        ...this.state,
        todos,
        isTodoLoading: false,
      });
    }
  };

  this.render = () => {
    const { username } = this.state;
    $todoListContainer.style.display = username ? "block" : "none";
  };

  const init = () => {
    fetchUserList();
  };

  this.render();
  init();
}
