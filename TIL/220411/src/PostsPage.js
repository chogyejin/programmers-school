import PostList from "./PostList.js";
import { request } from "./api.js";

export default function PostsPage({ $target }) {
  const $page = document.createElement("div");
  const $newPostButton = document.createElement("button");
  $newPostButton.textContent = "새 게시글 추가";
  $page.appendChild($newPostButton);

  const postList = new PostList({
    $target,
    initialState: [],
  });

  const fetchPosts = async () => {
    const posts = await request("/posts");
    postList.setState(posts);
  };

  // 게시글이 모여있는 페이지는 App.js에서 렌더링할 거야 정해지면 렌더링(appendChild())
  this.render = async () => {
    await fetchPosts();
    $target.appendChild($page);
  };

  // page 렌더도 App.js에서 일어남, 기본적인 this.render() 없음
}
