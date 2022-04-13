import PostList from "./PostList.js";
import { request } from "./api.js";
import LinkButton from "./LinkButton.js";

export default function PostsPage({ $target }) {
  const $page = document.createElement("div");

  const postList = new PostList({
    $target: $page,
    initialState: [],
  });

  new LinkButton({
    $target: $page,
    initialState: { text: "새 게시글 추가", link: "/posts/new" },
  });

  // 게시글이 모여있는 페이지는 App.js에서 렌더링할 것이 정해지면 렌더링
  this.setState = async () => {
    const posts = await request("/posts");
    postList.setState(posts);
    this.render();
  };

  this.render = async () => {
    $target.appendChild($page);
  };
}
