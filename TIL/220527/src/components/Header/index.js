import PropTypes from "prop-types";

const Header = ({
  children,
  level = 1,
  strong,
  underline,
  color,
  ...props
}) => {
  let Tag = `h${level}`;
  if (level < 1 || level > 6) {
    console.warn("Header 태그는 1~6 사용!!");
    Tag = "h1";
  }

  const fontStyle = {
    fontWeight: strong ? "bold" : "normal",
    textDecoration: underline ? "underline" : underline,
    color,
  };

  return (
    <Tag {...props} style={{ ...props.style, ...fontStyle }}>
      {children}
    </Tag>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  strong: PropTypes.bool,
  underline: PropTypes.bool,
  color: PropTypes.string,
};

export default Header;
