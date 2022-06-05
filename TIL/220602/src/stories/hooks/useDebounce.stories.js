import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

export default {
  title: "Hook/useDebounce",
};

const words = [
  "abcdef",
  "aaaaaaaaa",
  "aabbccdd",
  "dddddddd",
  "eeeeeeee",
  "ffffffff",
];

export const Default = () => {
  const [value, setValue] = useState(""); // 검색어
  const [result, setResult] = useState([]); // 검색 결과 배열

  // 0.3초 내에 value가 변경되면 함수 호출 x
  useDebounce(
    () => {
      if (value === "") setResult([]);
      else {
        setResult(
          words.filter((word) =>
            word.toLowerCase().includes(value.toLowerCase())
          )
        );
      }
    },
    300,
    [value]
  );

  return (
    <>
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div>
        {result.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </>
  );
};
