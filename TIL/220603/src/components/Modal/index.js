import styled from "@emotion/styled";
import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import useClickAway from "../../hooks/useClickAway";

// Dim은 모달 외 부분
const BackgroundDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const Modal = ({
  children,
  width = 500,
  height,
  visible = true,
  onClose,
  ...props
}) => {
  const ref = useClickAway(() => {
    onClose && onClose(); // useClickAway에 넘길 핸들러
  });

  const containerStyle = useMemo(
    () => ({
      width,
      height,
    }),
    [height, width]
  );

  const el = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  // Modal 컴포넌트를 root가 아닌 document.body에 붙임
  return ReactDOM.createPortal(
    <BackgroundDim style={{ display: visible ? "block" : "none" }}>
      <ModalContainer
        ref={ref}
        {...props}
        style={{ ...props.style, ...containerStyle }}
      >
        {children}
      </ModalContainer>
    </BackgroundDim>,
    el
  );
};

export default Modal;
