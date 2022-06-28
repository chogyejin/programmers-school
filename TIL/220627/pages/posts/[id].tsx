import axios from "axios";
import { NextPageContext } from "next";
import { Post } from "../../interfaces";

interface PostPageProps {
  post: Post;
}

const PostPage = ({ post }: PostPageProps) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const postId = context.query.id;

  try {
    const { data: post } = await axios.get(
      // `https://jsonplaceholder.typicode.com/posts/${postId}`
      `http://localhost:3000/api/posts/${postId}`
    );

    return {
      props: { post },
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return {
        notFound: true,
      };
    }

    // 404 에러 아니어서 notFound 보여주는 거 아니면 home으로 redirect
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default PostPage;
