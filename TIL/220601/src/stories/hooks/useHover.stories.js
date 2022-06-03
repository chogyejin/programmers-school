import styled from "@emotion/styled";
import useHover from "../../hooks/useHover";

export default {
  title: "Hook/useHover",
};

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export const Default = () => {
  const [ref, hover] = useHover();

  return (
    <div>
      <Box ref={ref}>Box</Box>
      {hover ? "안녕???" : "마우스 올려봐"}
    </div>
  );
};
