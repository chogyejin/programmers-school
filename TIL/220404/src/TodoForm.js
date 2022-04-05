export default function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");
  let isInit = false;

  $target.appendChild($form);

  this.render = () => {
    $form.innerHTML = `
      <input type="text" name="todo" />
      <button>추가</button>
    `;

    if (!isInit) {
      $form.addEventListener("submit", (event) => {
        event.preventDefault();

        // form 요소 안의 name이 todo인 input 요소의 value
        const $input = $form.querySelector("input[name=todo]");
        const text = $input.value;

        // 2글자 이상일 때 추가되도록
        if (text.length > 1) {
          $input.value = "";
          onSubmit(text);
        }
      });

      isInit = true;
    }
  };

  this.render();
}
