import { push } from "./Router.js";

export default function PostList({ $target, initialState }) {
  const $postList = document.createElement("div");
  $target.appendChild($postList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    $postList.innerHTML = `
      ${this.state
        .map(
          (post) => `
        <li data-id=${post.id}>${post.title}</li>
      `
        )
        .join("")}
      `;
  };

  this.render();

  $postList.addEventListener("click", (event) => {
    const $li = event.target.closest("li");

    if ($li) {
      const { id } = $li.dataset;

      // custom event
      push(`/posts/${id}`);
    }
  });
}
