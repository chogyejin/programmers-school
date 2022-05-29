import Spinner from "../components/Spinner";

export default {
  title: "Component/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      defaultVaule: 24,
      control: "number",
    },
    color: {
      control: "color",
    },
    loading: {
      defaultVaule: true,
      control: "boolean",
    },
  },
};

export const Default = (args) => {
  return <Spinner {...args} />;
};
