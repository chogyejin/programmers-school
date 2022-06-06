import { useState } from "react";
import useHotKey from "../hooks/useHotKey";

export default {
  title: "Hook/useHotKey",
};

export const Default = () => {
  const [value, setValue] = useState("");
  const hotKeys = [
    {
      global: true,
      combo: "meta+shift+k",
      onKeyDown: (e) => {
        alert("안녕");
      },
    },
    {
      combo: "ctrl+d",
      onKeyDown: (e) => {
        setValue(""); // control + d로 지움
      },
    },
  ];

  // useHotKey(hotKeys);
  const { handleKeyDown } = useHotKey(hotKeys);

  return (
    <>
      <h2>useHotKey</h2>
      <div>cmd+shift+k로 alert 띄워보세요</div>
      <div>ctrl + d로 지워보세요</div>
      <input
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
