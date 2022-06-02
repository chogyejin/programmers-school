import styled from "@emotion/styled";
import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";

const BreadcrumbContainer = styled.nav`
  display: inline-block;
`;

const Breadcrumb = ({ children, ...props }) => {
  const items = React.Children.toArray(children)
    .filter((ele) => {
      if (React.isValidElement(ele) && ele.props.__TYPE === "BreadcrumbItem") {
        return true;
      }

      console.warn("Breadcrumb Item인지 확인!!");
      return false;
    })
    .map((ele, index, eles) => {
      return React.cloneElement(ele, {
        ...ele.props,
        active: index === eles.length - 1,
      });
    });
  return <BreadcrumbContainer {...props}>{items}</BreadcrumbContainer>;
};

Breadcrumb.Item = BreadcrumbItem; // <Breadcrumb.Item> 태그 사용 가능

export default Breadcrumb;
