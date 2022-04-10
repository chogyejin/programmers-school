export default function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");
  $target.appendChild($form);

  this.render = () => {
    $form.innerHTML = `
      <input type="text" placeholder="할 일을 추가하세요." />
      <button>추가</button>
    `;
  };

  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    const $input = $form.querySelector("input");
    const content = $input.value;

    onSubmit(content);
    $input.value = "";
  });

  this.render();
}
