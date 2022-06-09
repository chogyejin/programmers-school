import "./Text.css";
import PropTypes from "prop-types";

const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  delete: del,
  color,
  mark,
  code,
  ...props
}) => {
  const Tag = block ? "div" : paragraph ? "p" : "span"; // 동적인 태그
  const fontStyle = {
    fontWeight: strong ? "bold" : undefined,
    fontSize: typeof size === "number" ? size : undefined,
    textDecoration: underline ? "underline" : undefined,
    color,
  };

  if (del) {
    children = <del>{children}</del>;
  }
  if (mark) {
    children = <mark>{children}</mark>;
  }
  if (code) {
    children = <code>{children}</code>;
  }

  return (
    <Tag
      className={typeof size === "string" ? `Text--size-${size}` : undefined}
      {...props}
      style={{ ...props.style, ...fontStyle }}
    >
      {children}
    </Tag>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  block: PropTypes.bool,
  paragraph: PropTypes.bool,
  delete: PropTypes.bool,
  code: PropTypes.bool,
  mark: PropTypes.bool,
  strong: PropTypes.bool,
  color: PropTypes.string,
};

export default Text;
