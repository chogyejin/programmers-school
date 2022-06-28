import axios from "axios";
import Link from "next/link";
import { Post } from "../interfaces";

interface HomePageProps {
  posts: Post[];
}

const HomePage = ({ posts }: HomePageProps) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data: posts } = await axios.get(
    // "https://jsonplaceholder.typicode.com/posts"
    "http://localhost:3000/api/posts"
  );

  return {
    props: { posts },
  };
};

export default HomePage;
