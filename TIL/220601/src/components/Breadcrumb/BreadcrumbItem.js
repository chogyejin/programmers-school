import styled from "@emotion/styled";
import PropTypes from "prop-types";

const BreadcrumbItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const BreadcrumbItem = ({ children, href, active, ...props }) => {
  return (
    <BreadcrumbItemContainer {...props}>
      <Anchor href={href}>
        <span style={{ fontWeight: active && "bold" }}>{children}</span>
      </Anchor>
      {!active && <span>▷</span>}
    </BreadcrumbItemContainer>
  );
};

BreadcrumbItem.defaultProps = {
  __TYPE: "BreadcrumbItem",
};

BreadcrumbItem.propTypes = {
  __TYPE: PropTypes.oneOf(["BreadcrumbItem"]),
};

export default BreadcrumbItem;
