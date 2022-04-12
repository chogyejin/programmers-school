import PostEditPage from "./PostEditPage.js";
import PostsPage from "./PostsPage.js";

export default function App({ $target }) {
  const postsPage = new PostsPage({ $target });
  const postEditPage = new PostEditPage({
    $target,
    initialState: {
      postId: "new",
    },
  });

  // /posts/{id} id post 생성
  // /posts/new 새 post 생성
  this.route = () => {
    const { pathname } = window.location;

    if (pathname === "/") {
      postsPage.render();
    } else if (pathname.indexOf("/posts/") === 0) {
      const [, , postId] = pathname.split("/"); // "/"로 나눈 문자열 중 세 번째(post id)
      postEditPage.setState({ postId }); // 위에서 얻은 postId 값으로 setState 하면서 render
    }
  };

  this.route();
}
