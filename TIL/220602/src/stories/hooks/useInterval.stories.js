import useInterval from "../../hooks/useInterval";
import { useState } from "react";

export default {
  title: "Hook/useInterval",
};

export const Default = () => {
  const [array, setArray] = useState([]);
  const clear = useInterval(() => {
    setArray([...array, "추가"]);
  }, 1000);

  return (
    <>
      <h1>useInterval</h1>
      <div>{array}</div>
      <button onClick={clear}>멈추기</button>
    </>
  );
};
