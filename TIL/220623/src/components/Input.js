import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef((_, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRef.current.value = "";
    },
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
});

export default Input;
