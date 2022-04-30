export default function TodoList({ $target, initialState, onDrop, onRemove }) {
  const $todoList = document.createElement("div");
  $todoList.setAttribute("droppable", true);
  $target.appendChild($todoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { title, todos = [] } = this.state;
    $todoList.innerHTML = `
      <h2>${title}</h2>
      <ul>
        ${todos
          .map(
            (todo) =>
              `<li data-id="${todo._id}" draggable="true">${todo.content}<button>X</button></li>`
          )
          .join("")}
      </ul>
      ${todos.length === 0 ? "<div>설정된 일이 없습니다.</div>" : ""}
    `;
  };

  this.render();

  $todoList.addEventListener("dragstart", (event) => {
    const $li = event.target.closest("li");

    event.dataTransfer.setData("todoId", $li.dataset.id);
  });

  $todoList.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });

  $todoList.addEventListener("drop", (event) => {
    event.preventDefault();
    const droppedTodoId = event.dataTransfer.getData("todoId");
    const { todos } = this.state;

    if (!todos.find((todo) => todo._id === droppedTodoId)) {
      onDrop(droppedTodoId);
    }
  });

  $todoList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const $li = event.target.closest("li");

      if ($li) {
        onRemove($li.dataset.id);
      }
    }
  });
}
