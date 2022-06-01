import styled from "@emotion/styled";

const Line = styled.hr`
  border: none;
  background-color: #aaa;

  &.horizontal {
    display: block;
    width: 100%;
    height: 1px;
  }

  &.vertical {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 1px;
    height: 13px;
    vertical-align: middle;
  }
`;

const Divider = ({ type = "horizontal", size = 8, ...props }) => {
  const dividerStyle = {
    margin: type === "horizontal" ? `${size}px 0` : `0 ${size}px`,
  };
  return (
    <Line
      className={type}
      {...props}
      style={{ ...props.style, ...dividerStyle }}
    />
  );
};

export default Divider;
