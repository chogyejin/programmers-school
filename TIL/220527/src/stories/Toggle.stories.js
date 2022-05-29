import Toggle from "../components/Toggle";

export default {
  title: "Component/Toggle",
  component: Toggle,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: "boolean",
    },
  },
};

export const Default = (args) => {
  return <Toggle {...args} />;
};
