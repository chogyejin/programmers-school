import HomePage from "./pages/HomePage.js";
import ProductPage from "./pages/ProductPage.js";

export default function App({ $target }) {
  const homePage = new HomePage({ $target });
  const productPage = new ProductPage({ $target, initialState: {} });

  this.route = () => {
    // pathname에 따라 컴포넌트 렌더링
    const { pathname } = window.location;

    $target.innerHTML = ""; // 기존 렌더링 페이지 HTML 초기화

    if (pathname === "/") {
      // HomePage
      homePage.render();
    } else if (pathname.indexOf("/products") > -1) {
      // ProductPage
      const [, , productId] = pathname.split("/"); // "/"로 자른 세 번째 값

      productPage.setState({
        productId,
      });
    } else {
      // 404
      $target.innerHTML = "<h1>404 에러 페이지</h1>";
    }
  };

  this.init = () => {
    this.route();
  };

  window.addEventListener("click", (event) => {
    if (event.target.className === "link") {
      event.preventDefault();

      const { href } = event.target;
      history.pushState(null, null, href.replace(window.location.origin, "")); // 전체 url에서 파싱
      this.route();
    }
  });

  window.addEventListener("popstate", () => this.route());

  this.init();
}
