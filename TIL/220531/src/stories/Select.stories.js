import Select from "../components/Select";

export default {
  title: "Component/Select",
  component: Select,
  argTypes: {
    label: {
      defaultValue: "Label",
      control: "text",
    },
    placeholder: {
      defaultValue: "Placeholder",
      control: "text",
    },
    block: {
      defaultValue: false,
      control: "boolean",
    },
    invalid: {
      defaultValue: false,
      control: "boolean",
    },
    required: {
      defaultValue: false,
      control: "boolean",
    },
    disalbed: {
      defaultValue: false,
      control: "boolean",
    },
  },
};

export const Default = (args) => {
  return (
    <Select
      data={[
        "string 아이템",
        "string 아이템2",
        { label: "object 아이템3", value: "아이템3의 value" },
        { label: "object 아이템4", value: "아이템4의 value" },
      ]}
      {...args}
    />
  );
};
