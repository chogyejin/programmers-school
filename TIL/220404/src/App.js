// main에서 처음에 $target으로 $app, initialState로 더미 데이터 넘김
function App({ $target, initialState }) {
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
      storage.setItem("todos", JSON.stringify(nextState)); // storage.js 이용
      console.log(storage);
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
  });
}
