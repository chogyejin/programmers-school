import Input from "./Input";
import Button from "./Button";
import useForm from "../hooks/useForm";
import ErrorText from "./ErrorText";
import CardForm from "./CardForm";
import Title from "./Title";

// const sleep = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
// };

const LoginForm = ({ onSubmit }) => {
  const {
    // values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  } = useForm({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit,
    // onSubmit: async () => {
    //   await sleep();
    //   console.log("submit!!");
    // },
    validate: ({ name, password }) => {
      const newErros = {};
      if (!name) {
        newErros.name = "이름을 입력해주세요";
      }
      if (!password) {
        newErros.password = "비밀번호를 입력햐주세요";
      }

      return newErros;
    },
  });

  // console.log(values, errors);

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input
        style={{ marginTop: 8 }}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Button style={{ marginTop: 16 }} disabled={isLoading}>
        Login
      </Button>
    </CardForm>
  );
};

export default LoginForm;
