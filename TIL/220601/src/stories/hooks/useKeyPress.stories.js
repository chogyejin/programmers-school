import useKeyPress from "../../hooks/useKeyPress";

export default {
  title: "Hook/useKeyPress",
};

export const Default = () => {
  const pressed = useKeyPress("?");

  return <div>{pressed ? "누름!!" : "물음표를 눌러보세요"}</div>;
};
