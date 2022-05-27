import Header from "../components/Header";

export default {
  title: "Component/Header",
  component: Header,
  argTypes: {
    level: { control: { type: "range", min: 1, max: 10 } },
    strong: { control: "boolean" },
    underline: { control: "boolean" },
    color: { control: "color" },
  },
};

export const Default = (args) => {
  console.log(args);
  return <Header {...args}>Header</Header>;
};
