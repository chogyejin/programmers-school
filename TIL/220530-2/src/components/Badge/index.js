import styled from "@emotion/styled";

const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Super = styled.sup`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex; // container 간에 inline 특성을 가진 flex
  align-items: center;
  height: 20px;
  padding: 0 8px;
  font-size: 12px;
  border-radius: 20px;
  color: white;
  background-color: #f44;
  transform: translate(50%, -50%);

  &.dot {
    padding: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`;

const Badge = ({
  children,
  count,
  maxCount,
  dot = false,
  backgroundColor,
  textColor,
  ...props
}) => {
  const colorStyle = {
    backgroundColor,
    color: textColor,
  };

  let badge = null;
  if (count) {
    if (dot) {
      badge = <Super className="dot" style={colorStyle}></Super>;
    } else {
      badge = (
        <Super style={colorStyle}>
          {maxCount && count > maxCount ? `${maxCount}+` : count}
        </Super>
      );
    }
  }

  return (
    <BadgeContainer {...props}>
      {children}
      {badge}
    </BadgeContainer>
  );
};

export default Badge;
