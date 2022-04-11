import { getItem, removeItem, setItem } from "./storage.js";

const TODO_TEMP_SAVE_KEY = "TODO_TEMP_SAVE_KEY";
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
    removeItem(TODO_TEMP_SAVE_KEY);
  });

  this.render();

  // todo 입력 창에 적은 거 임시 저장
  const $input = $form.querySelector("input");
  $input.value = getItem(TODO_TEMP_SAVE_KEY, "");

  $input.addEventListener("keyup", (event) => {
    setItem(TODO_TEMP_SAVE_KEY, event.target.value);
  });
}
