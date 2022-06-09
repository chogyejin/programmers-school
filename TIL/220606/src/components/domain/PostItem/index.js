import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../..";
import { usePostContext } from "../../../contexts/PostProvider";
import Spinner from "../../base/Spinner";

const PostItem = ({ post }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { onDeletePost } = usePostContext();

  const handleDeletePost = useCallback(
    async (id) => {
      setIsLoading(true);
      await onDeletePost(id);
      setIsLoading(false);
    },
    [onDeletePost]
  );

  return (
    <li>
      <Header strong level={3}>
        {post.title}
      </Header>
      <Link to={`/posts/${post.id}`}>상세 내용 보기</Link>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <button onClick={() => handleDeletePost(post.id)}>삭제</button>
        )}
      </div>
    </li>
  );
};

export default PostItem;
