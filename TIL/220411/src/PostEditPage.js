import { request } from "./api.js";
import Editor from "./Editor.js";
import LinkButton from "./LinkButton.js";
import { getItem, removeItem, setItem } from "./storage.js";

export default function PostEditPage({ $target, initialState }) {
  const $page = document.createElement("div");

  this.state = initialState;

  this.setState = async (nextState) => {
    if (this.state.postId !== nextState.postId) {
      postLocalSaveKey = `tempKey-${nextState.postId}`;
      this.state = nextState;

      if (this.state.postId === "new") {
        const post = getItem(postLocalSaveKey, {
          title: "",
          content: "",
        });

        editor.setState(post);
        this.render();
      } else {
        await fetchPost();
      }
      return;
    }

    this.state = nextState;
    this.render();

    editor.setState(this.state.post || { title: "", content: "" });
  };

  let postLocalSaveKey = `tempKey-${this.state.postId}`;
  const post = getItem(postLocalSaveKey, {
    title: "",
    content: "",
  });
  let timer = null;

  const editor = new Editor({
    $target: $page,
    initialState: post,
    // 키 간 입력이 1초 이하인 이벤트들 묶음(debouncing)
    onEditing: (post) => {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => {
        setItem(postLocalSaveKey, {
          ...post,
          tempSaveData: new Date(),
        });

        // new면 API 날리고 현재 url id로 replace
        const isNew = this.state.postId === "new";
        if (isNew) {
          const createdPost = await request(`/posts`, {
            method: "POST",
            body: JSON.stringify(post),
          });
          history.replaceState(null, null, `/posts/${createdPost.id}`);
          removeItem(postLocalSaveKey);

          // new에서 작성하다가 /posts/{id} 갔을 때 해당 id로 set (id 무한 생성 막음)
          this.setState({
            postId: createdPost.id,
          });
        } else {
          await request(`/posts/${post.id}`, {
            method: "PUT",
            body: JSON.stringify(post),
          });
          removeItem(postLocalSaveKey);
        }
      }, 3000);
    },
  });

  this.render = () => {
    $target.appendChild($page);
  };

  const fetchPost = async () => {
    const { postId } = this.state;

    if (postId !== "new") {
      const post = await request(`/posts/${postId}`);

      const tempPost = getItem(postLocalSaveKey, {
        title: "",
        content: "",
      });

      // tempPost 저장할 때의 시간과 update 시간 비교하여 확인 누르면 전 자동 저장 데이터 가져오기, 아니면 안 가져옴
      if (tempPost.tempSaveData && tempPost.tempSaveData > post.updated_at) {
        if (confirm("임시 저장 데이터 불러올까요?")) {
          this.setState({
            ...this.state,
            post: tempPost,
          });
          return;
        }
      }

      this.setState({
        ...this.state,
        post,
      });
    }
  };

  // custom button
  new LinkButton({
    $target: $page,
    initialState: { text: "목록으로", link: "/" },
  });
}
