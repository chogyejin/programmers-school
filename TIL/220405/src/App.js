import TodoList from "./TodoList.js";
import TodoComments from "./TodoComments.js";
import { request } from "./api.js";

export default function App({ $app }) {
  // App 컴포넌트의 초기 상태
  this.state = {
    todos: [],
    selectedTodo: null,
    comments: [],
  };

  // 하위 컴포넌트 setState
  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state.todos);
    todoComments.setState({
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments,
    });
  };

  const todoList = new TodoList({
    $target: $app,
    initialState: this.state.todos,
    // 리스트 요소 클릭했을 때 댓글 요청
    onClick: async (id) => {
      // todos 배열 중 id가 onClick으로 넘어온 id와 같은 객체 추출
      const selectedTodo = this.state.todos.find((todo) => todo.id === id);
      this.setState({
        ...this.state,
        selectedTodo,
      });

      try {
        const data = await request(
          `https://kdt.roto.codes/comments?todo.id=${id}`
        );
        this.setState({
          ...this.state,
          comments: data,
        });
      } catch (e) {}
    },
  });

  const todoComments = new TodoComments({
    $target: $app,
    initialState: {
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments,
    },
  });

  const init = async () => {
    const data = await request("https://kdt.roto.codes/todos");
    this.setState({
      ...this.state,
      todos: data,
    });
  };

  init();
}
