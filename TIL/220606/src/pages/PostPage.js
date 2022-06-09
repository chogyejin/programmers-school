import axios from "axios";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks";
import { Spinner, Header, Text } from "../components";

const PostPage = () => {
  const { postId } = useParams();
  const post = useAsync(async () => {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.data);
  }, []);

  return (
    <div>
      {post.isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header>{post.value?.title}</Header>
          <Text>{post.value?.body}</Text>
        </>
      )}
    </div>
  );
};

export default PostPage;
