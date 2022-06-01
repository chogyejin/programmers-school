import Divider from "../components/Divider";

export default {
  title: "Component/Divider",
  component: Divider,
};

export const Horizontal = () => {
  return (
    <>
      <div>위</div>
      <Divider />
      <div>아래</div>
    </>
  );
};

export const Vertical = () => {
  return (
    <>
      <div style={{ display: "inline-block" }}>왼쪽</div>
      <Divider type="vertical" />
      <div style={{ display: "inline-block" }}>오른쪽</div>
      <Divider type="vertical" />
      <div style={{ display: "inline-block" }}>더 오른쪽</div>
    </>
  );
};
