import Input from "./Input";
import Button from "./Button";
import useForm from "../hooks/useForm";
import ErrorText from "./ErrorText";
import CardForm from "./CardForm";
import Title from "./Title";

const SignUpForm = ({ onSubmit }) => {
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
    validate: ({ name, password, passwordConfirm }) => {
      const newErros = {};
      if (!name) {
        newErros.name = "이름을 입력해주세요";
      }
      if (!password) {
        newErros.password = "비밀번호를 입력햐주세요";
      }
      if (password !== passwordConfirm) {
        newErros.passwordConfirm = "비밀번호가 일치하지 않습니다";
      }

      return newErros;
    },
  });

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Sign Up</Title>
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
      <Input
        style={{ marginTop: 8 }}
        type="password"
        name="passwordConfirm"
        placeholder="Password Confirm"
        onChange={handleChange}
      />
      {errors.passwordConfirm && (
        <ErrorText>{errors.passwordConfirm}</ErrorText>
      )}
      <Button style={{ marginTop: 16 }} disabled={isLoading}>
        Sign Up
      </Button>
    </CardForm>
  );
};

export default SignUpForm;
