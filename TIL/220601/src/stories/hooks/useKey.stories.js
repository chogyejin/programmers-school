import useKey from "../../hooks/useKey";

export default {
  title: "Hook/useKey",
};

export const Default = () => {
  useKey("keydown", "f", () => {
    alert("f 눌림!");
  });

  useKey("keyup", "q", () => {
    alert("q 눌림!");
  });

  return <div>useKey</div>;
};
