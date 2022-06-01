import { useState } from "react";
import Progress from "../components/Progress";

export default {
  title: "Component/Progress",
  component: Progress,
};

export const Default = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button onClick={() => setValue(100)}>밸류 바꾸기</button>
      <Progress value={value} />
    </div>
  );
};
