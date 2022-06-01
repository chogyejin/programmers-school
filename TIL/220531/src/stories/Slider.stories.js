import Slider from "../components/Slider";
import Spacer from "../components/Spacer";
import Icon from "../components/Icon";

export default {
  title: "Component/Slider",
  component: Slider,
  argTypes: {
    defaultValue: { defaultValue: 1, control: "number" },
    min: { defaultValue: 1, control: "number" },
    max: { defaultValue: 100, control: "number" },
    step: { defaultValue: 0.1, control: "number" },
    onChange: { action: "onChange" },
  },
};

export const Default = (args) => {
  return <Slider {...args} />;
};

// 응용
export const VolumeControl = () => {
  return (
    <Spacer>
      <Icon name="volume" />
      <Slider style={{ marginLeft: 5, width: 100, display: "inline-block" }} />
      <Icon name="volume-2" />
    </Spacer>
  );
};
