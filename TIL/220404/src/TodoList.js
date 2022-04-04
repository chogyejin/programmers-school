// TodoList

// params.$target - 해당 컴포넌트가 추가될 DOM 요소
// params.initialState - 해당 컴포넌트의 초기 상태
function TodoList({ $target, initialState }) {
  const $todoList = document.createElement("div"); // todoList 영역 만들기

  $target.appendChild($todoList); // target 요소에 붙이기

  this.state = initialState; // [{ text: " " }, { text: " " }, ...]

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    // <li>어쩌고</li><li>저쩌고</li> 만들기
    $todoList.innerHTML = `
      <ul>
        ${this.state.map(({ text }) => `<li>${text}</li>`).join("")}
      </ul>
    `;
  };

  this.render();
}
