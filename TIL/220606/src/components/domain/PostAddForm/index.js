import { usePostContext } from "../../../contexts/PostProvider";
import { useForm } from "../../../hooks";
import Spinner from "../../base/Spinner";

const PostAddForm = () => {
  const { onAddPost } = usePostContext();
  const { isLoading, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      userId: 1,
      title: "",
      body: "",
    },
    onSubmit: async (values) => {
      await onAddPost(values);
    },
    validate: ({ title, body }) => {
      const errors = {};
      if (!title) {
        errors.title = "제목을 입력하세요";
      }
      if (!body) {
        errors.body = "내용을 입력하세요";
      }

      return errors;
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          placeholder="title 입력"
          onChange={handleChange}
        />
        {errors.title}
      </div>
      <div>
        <input
          type="text"
          name="body"
          placeholder="body 입력"
          onChange={handleChange}
        />
        {errors.body}
      </div>
      {isLoading ? <Spinner /> : <button>생성</button>}
    </form>
  );
};

export default PostAddForm;
