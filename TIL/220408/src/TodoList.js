export default function TodoList({
  $target,
  initialState,
  onToggle,
  onRemove,
}) {
  const $todo = document.createElement("div");
  $target.appendChild($todo);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $todo.innerHTML = `
      <ul>
        ${this.state
          .map(
            ({ _id, content, isCompleted }) => `
            <li data-id=${_id} class="todo-item">
              ${isCompleted ? `<s>${content}</s>` : content}
              <button class="remove">X</button>
            </li>
        `
          )
          .join("")}
      </ul>
    `;
  };

  // Event Delegation Pattern
  // todo div 자체에 이벤트 걸고 class별로 함수 실행
  $todo.addEventListener("click", (event) => {
    const $li = event.target.closest(".todo-item");

    if ($li) {
      const { id } = $li.dataset;
      const { className } = event.target;

      if (className === "remove") {
        onRemove(id);
      } else {
        onToggle(id);
      }
    }
  });

  this.render();
}
