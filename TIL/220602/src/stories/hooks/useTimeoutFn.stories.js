import useTimeoutFn from "../../hooks/useTimeoutFn";

export default {
  title: "Hook/useTimeoutFn",
};

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert("3초 뒤 실행");
  }, 3000);

  return (
    <>
      <h1>useTimeoutFn</h1>
      <button onClick={run}> 3초 뒤 실행</button>
      <button onClick={clear}>멈추기</button>
    </>
  );
};
