import { useState } from "react";
import useIntervalFn from "../../hooks/useIntervalFn";

export default {
  title: "Hook/useIntervalFn",
};

export const Default = () => {
  const [array, setArray] = useState([]);
  const [run, clear] = useIntervalFn(() => {
    setArray([...array, "추가"]);
  }, 1000);

  return (
    <>
      <h2>useIntervalFn</h2>
      <div>{array}</div>
      <button onClick={run}>1초마다 추가</button>
      <button onClick={clear}>멈추기</button>
    </>
  );
};
