import { useState } from "react";
import Modal from "../components/Modal";

export default {
  title: "Component/Modal",
  component: Modal,
};

export const Default = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <h2>Modal</h2>
      <button onClick={() => setVisible(true)}>Show Modal</button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        안녕
        <button onClick={() => setVisible(false)}>닫기</button>
      </Modal>
    </>
  );
};
