import styled from "@emotion/styled";
import useScroll from "../../hooks/useScroll";

export default {
  title: "Hook/useScroll",
};

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  overflow: auto;
`;

const InnerBox = styled.div`
  width: 10000px;
  height: 10000px;
  background-image: linear-gradient(180deg, #000 0%, #fff 100%);
`;

export const Default = () => {
  const [ref, coord] = useScroll();

  return (
    <>
      <Box ref={ref}>
        <InnerBox />
      </Box>
      <button
        onClick={() => {
          ref.current.scrollTo({
            top: 10000,
            left: 10000,
            behavior: "smooth",
          });
        }}
      >
        스크롤 이동
      </button>
      {coord.x}, {coord.y}
    </>
  );
};
