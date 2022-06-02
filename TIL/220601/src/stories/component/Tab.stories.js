import Tab from "../../components/Tab";

export default {
  title: "Component/Tab",
  component: Tab,
};

export const Default = () => {
  return (
    <Tab>
      <Tab.Item title="아이템 1" index="item1">
        아이템1의 내용
      </Tab.Item>
      <Tab.Item title="아이템 2" index="item2">
        아이템2의 내용
      </Tab.Item>
    </Tab>
  );
};
