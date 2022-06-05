import useTimeout from "../../hooks/useTimeout";

export default {
  title: "Hook/useTimeout",
};

export const Default = () => {
  const clear = useTimeout(() => {
    alert("3초 뒤 실행");
  }, 3000);

  return (
    <>
      <h1>useTimeout</h1>
      <button onClick={clear}>멈추기</button>
    </>
  );
};
