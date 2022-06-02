import styled from "@emotion/styled";
import { useState } from "react";
import useClickAway from "../../hooks/useClickAway";

export default {
  title: "Hook/useClickAway",
};

const Pppover = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background-color: #eee;
`;

export const Default = () => {
  const [show, setShow] = useState(false);
  const ref = useClickAway((e) => {
    if (e.target.tagName !== "BUTTON") {
      setShow(false); // "보이기" 버튼 눌렀을 땐 false 되면 안됨
    }
  });

  return (
    <div>
      <button onClick={() => setShow(true)}>보이기</button>
      <Pppover ref={ref} style={{ display: show ? "block" : "none" }}>
        팝오버
      </Pppover>
    </div>
  );
};
