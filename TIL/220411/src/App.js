import PostEditPage from "./PostEditPage.js";
import PostsPage from "./PostsPage.js";
import { initRouter } from "./Router.js";

export default function App({ $target }) {
  const postsPage = new PostsPage({
    $target,
  });

  const postEditPage = new PostEditPage({
    $target,
    initialState: {
      postId: "new",
      post: {
        title: "",
        content: "",
      },
    },
  });

  // /posts/{id} id post 생성
  // /posts/new 새 post 생성
  this.route = () => {
    $target.innerHTML = ""; // route 전 비우고 특정 페이지 render
    const { pathname } = window.location;

    if (pathname === "/") {
      postsPage.setState();
    } else if (pathname.indexOf("/posts/") === 0) {
      const [, , postId] = pathname.split("/"); // "/"로 나눈 문자열 중 세 번째(post id)
      postEditPage.setState({ postId }); // 위에서 얻은 postId 값으로 setState 하면서 render
    }
  };

  this.route();

  // custom event
  initRouter(this.route); // this.route 콜백으로 넘김, ()=>this.route()
}
