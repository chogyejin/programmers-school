import { push } from "./Router.js";

export default function LinkButton({ $target, initialState }) {
  const $button = document.createElement("button");
  $target.appendChild($button);

  this.state = initialState;

  this.render = () => {
    $button.textContent = this.state.text;
  };

  this.render();

  $button.addEventListener("click", () => {
    push(this.state.link);
  });
}
