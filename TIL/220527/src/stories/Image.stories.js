import Image from "../components/Image";

export default {
  title: "Component/Image",
  component: Image,
  argTypes: {
    src: {
      type: { name: "string", require: true },
      defaultValue: "https://picsum.photos/200",
      conntrol: { type: "text" },
    },
    width: {
      defaultValue: 200,
      control: { type: "range", min: 200, max: 600 },
    },
    height: {
      defaultValue: 200,
      control: { type: "range", min: 200, max: 600 },
    },
    alt: {
      control: "string",
    },
  },
};

export const Default = (args) => {
  return <Image {...args} />;
};
