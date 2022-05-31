import { Buffer } from "buffer";
import styled from "@emotion/styled";

const IconWrapper = styled.i`
  display: inline-block;
`;

const Icon = ({
  name,
  size = 16,
  strokeWidth,
  rotate,
  color = "#222",
  ...props
}) => {
  const wrapperStyle = {
    width: size,
    height: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  };
  const iconStyle = {
    "stroke-width": strokeWidth,
    stroke: color,
    width: size,
    height: size,
  };
  const icon = require("feather-icons").icons[name]; // name에 맞는 icon 가져옴
  const svg = icon ? icon.toSvg(iconStyle) : ""; // icon style 적용하여 svg로 변환
  const base64 = Buffer.from(svg, "utf8").toString("base64"); // base64로 인코딩

  return (
    <IconWrapper {...props} style={wrapperStyle}>
      <img src={`data:image/svg+xml;base64, ${base64}`} alt={name} />
    </IconWrapper>
  );
};

export default Icon;
