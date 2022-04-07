import { request } from "../api.js";

export default function HomePage({ $target }) {
  const $home = document.createElement("div");

  // 바로 $target에 append하지 않음, route 함수에 따라 렌더

  this.render = () => {
    request("/products").then((products) => {
      $home.innerHTML = `
        <h1> 홈 페이지 </h1>
        <ul>
          ${products
            .map(
              (product) => `
            <li>
              <a class="link" href="products/${product.id}">${product.name}</a>
            </li>
          `
            )
            .join("")}
        </ul>
      `;

      $target.appendChild($home);
    });
  };
}
