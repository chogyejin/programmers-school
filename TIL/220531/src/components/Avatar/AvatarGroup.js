import React from "react";

const AvatarGroup = ({ children, shape = "circle", size = 70, ...props }) => {
  const avatars = React.Children.toArray(children)
    .filter((ele) => {
      // isValidElement는 단순한 text 같은 요소만 걸러줌
      if (React.isValidElement(ele) && ele.props.__TYPE === "Avatar") {
        return true;
      }
      return false;
    })
    .map((avatar, index, avatars) => {
      return React.cloneElement(avatar, {
        ...avatar.props,
        size,
        shape,
        style: {
          ...avatar.props.style,
          marginLeft: -size / 5,
          zIndex: avatars.length - index,
        },
      });
    });

  return <div style={{ paddingLeft: size / 5 }}>{avatars}</div>;
};

export default AvatarGroup;
