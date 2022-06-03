import React, { useState, useMemo } from "react";
import TabItem from "./TabItem";
import styled from "@emotion/styled";

const TabItemContainer = styled.div`
  border-bottom: 2px solid #ddd;
  background-color: #eee;
`;

const childrenToArray = (children, types) => {
  return React.Children.toArray(children).filter((ele) => {
    if (React.isValidElement(ele) && types.includes(ele.props.__TYPE)) {
      return true;
    }

    console.warn(
      `Only accepts ${
        Array.isArray(types) ? types.join(", ") : types
      } as it's children.`
    );
    return false;
  });
};

const Tab = ({ children, active, ...props }) => {
  const [currentActive, setCurrentActive] = useState(() => {
    if (active) {
      return active;
    } else {
      const index = childrenToArray(children, "Tab.Item")[0].props.index;

      return index;
    }
  });

  const items = useMemo(() => {
    return childrenToArray(children, "Tab.Item").map((ele) => {
      return React.cloneElement(ele, {
        ...ele.props,
        key: ele.props.index,
        active: ele.props.index === currentActive,
        onClick: () => {
          setCurrentActive(ele.props.index);
        },
      });
    });
  }, [children, currentActive]);

  const activeItem = useMemo(() => {
    return items.find((ele) => currentActive === ele.props.index);
  }, [currentActive, items]);

  return (
    <div {...props}>
      <TabItemContainer>{items}</TabItemContainer>
      <div>{activeItem.props.children}</div>
    </div>
  );
};

Tab.Item = TabItem;

export default Tab;
