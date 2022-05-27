import Text from "../components/Text";

export default {
  title: "Component/Text",
  component: Text,
  argTypes: {
    size: { control: "number" },
    strong: { control: "boolean" },
    underline: { control: "boolean" },
    delete: { control: "boolean" },
    color: { control: "color" },
    block: { control: "boolean" },
    paragraph: { control: "boolean" },
    mark: { control: "boolean" },
    code: { control: "boolean" },
  },
};

export const Default = (args) => {
  return (
    <>
      <Text {...args}>Text</Text>
      <Text {...args}>Text</Text>
    </>
  );
};

export const Size = (args) => {
  return (
    <>
      <Text {...args} size="small">
        Small 사이즈
      </Text>
      <Text {...args} size="noraml">
        Normal 사이즈
      </Text>
      <Text {...args} size="large">
        Large 사이즈
      </Text>
      <Text {...args} size={20}>
        커스텀 20 사이즈
      </Text>
    </>
  );
};
