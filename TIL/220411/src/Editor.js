export default function Editor({ $target, initialState, onEditing }) {
  const $editor = document.createElement("div"); // textarea or div + content editable
  $target.appendChild($editor);
  let isInit = false;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    $editor.querySelector("[name=title]").value = this.state.title;
    $editor.querySelector("[name=content]").value = this.state.content;

    this.render();
  };

  this.render = () => {
    if (!isInit) {
      $editor.innerHTML = `
      <input type="text" name="title" value="${this.state.title}" style="width:600px;" />
      <textarea name="content" style="width:600px;height:400px;" >${this.state.content}</textarea>
    `;

      isInit = true;
    }
  };

  this.render();

  $editor.addEventListener("keyup", (event) => {
    const { target } = event;
    const name = target.getAttribute("name");

    // editor state는 { title:~~, content:~~ }
    if (this.state[name] !== undefined) {
      const nextState = {
        ...this.state,
        [name]: target.value,
      };

      this.setState(nextState);
      onEditing(this.state);
    }
  });
}
