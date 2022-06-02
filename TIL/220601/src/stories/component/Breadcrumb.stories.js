import Breadcrumb from "../../components/Breadcrumb";

export default {
  title: "Component/Breadcrumb",
  component: Breadcrumb,
};

export const Default = (args) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/">경로1</Breadcrumb.Item>
      <Breadcrumb.Item href="/">경로2</Breadcrumb.Item>
    </Breadcrumb>
  );
};
