import TodoList from "./TodoList.js";
import TodoForm from "./TodoForm.js";
import Header from "./Header.js";
import { request } from "./api.js";
import UserList from "./UserList.js";
import { parse } from "./parse.js";

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
      history.pushState(null, null, `/?username=${username}`);
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
      // 유저가 todo 첫 추가면 데이터 보내고 user list refetch
      const isFirstTodoAdd = this.state.todos.length === 0;

      // 낙관적 업데이트
      const todo = {
        content,
        isCompleted: false,
      };
      this.setState({
        ...this.state,
        todos: [...this.state.todos, todo],
      });

      // todo 데이터 보내기
      await request(`/${this.state.username}`, {
        method: "POST",
        body: JSON.stringify(todo),
      });
      fetchTodos();

      if (isFirstTodoAdd) {
        fetchUserList();
      }
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

    // 쿼리 스트링에 username 있으면 그걸로 todos fetch
    const { search } = window.location;
    console.log(search);
    if (search.length > 0) {
      const { username } = parse(search.substring(1)); // 쿼리스트링의 "?"는 빼기
      if (username) {
        this.setState({
          ...this.state,
          username,
        });
        fetchTodos();
      }
    }
  };

  this.render();
  init();

  window.addEventListener("popstate", () => {
    init();
  });
}
