import useForm from "../../hooks/useForm";

export default {
  title: "Hook/useForm",
};

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

export const Default = () => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await sleep(); // 2초 동안 로딩 만들어줌
      alert(JSON.stringify(values));
    },
    validate: ({ email, password }) => {
      const errors = {};
      if (!email) {
        errors.email = "이메일을 입력해주세요";
      }
      if (!password) {
        errors.password = "비밀번호를을 입력해주세요";
      }
      if (!/^.+@.+\..+$/.test(email)) {
        errors.email = "올바른 이메일을 입력해주세요";
      }

      return errors;
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <h2>로그인 폼</h2>
      <div>
        <input
          name="email"
          type="email"
          placeholder="이메일"
          onChange={handleChange}
        />
        {errors.email}
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={handleChange}
        />
        {errors.password}
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "로그인 중.." : "로그인!"}
      </button>
    </form>
  );
};
