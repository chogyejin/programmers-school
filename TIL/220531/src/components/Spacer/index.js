import React from "react";

const Spacer = ({ children, type = "horizontal", size = 8, ...props }) => {
  const spacerStyle = {
    ...props.style,
    display: type === "vertical" ? "block" : "inline-block",
    verticalAlign: type === "horizontal" ? "middle" : undefined,
  };

  // children 접근
  const nodes = React.Children.toArray(children)
    .filter((ele) => React.isValidElement(ele))
    .map((ele, index, eles) => {
      return React.cloneElement(ele, {
        ...ele.props,
        style: {
          ...ele.props.style,
          marginRight:
            type === "horizontal" && index !== eles.length - 1
              ? size
              : undefined,
          marginBottom:
            type === "vertical" && index !== eles.length - 1 ? size : undefined,
        },
      });
    });

  return (
    <div {...props} style={spacerStyle}>
      {nodes}
    </div>
  );
};
export default Spacer;
