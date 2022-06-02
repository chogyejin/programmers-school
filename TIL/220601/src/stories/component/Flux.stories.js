import Flux from "../../components/Flux";

export default {
  title: "Component/Flux",
  component: Flux,
};

const { Row, Col } = Flux;
const Box = () => {
  return (
    <div
      style={{ backgroundColor: "red", borderRadius: 8, textAlign: "center" }}
    >
      Box
    </div>
  );
};

export const Default = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col span={6}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={2}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col offset={4} span={4}>
        <Box />
      </Col>
      <Col span={4}>
        <Box />
      </Col>
      <Col offset={2} span={8}>
        <Box />
      </Col>
      <Col span={8}>
        <Box />
      </Col>
    </Row>
  );
};
