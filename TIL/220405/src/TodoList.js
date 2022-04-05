export default function TodoList({ $target, initialState, onClick }) {
  const $element = document.createElement("div");
  $target.appendChild($element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (Array.isArray(this.state)) {
      $element.innerHTML = `
      <h2>투두리스트 2</h2>
      <ul>
        ${this.state
          .map(({ id, text }) => `<li data-id=${id}>${text}</li>`)
          .join("")}
      </ul>
      `;

      // render() 함수가 다시 render할 때마다 이벤트 등록
      $element.querySelectorAll("li").forEach(($li) => {
        $li.addEventListener("click", (event) => {
          const { id } = event.target.dataset;
          onClick(parseInt(id));
        });
      });
    }
  };

  this.render();
}
