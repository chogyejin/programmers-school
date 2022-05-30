import styled from "@emotion/styled";
import { useRef, useState } from "react";

const Input = styled.input`
  display: none;
`;

const Upload = ({ children, name, accept, value, onChange, ...props }) => {
  const [file, setFile] = useState(value);
  const inputRef = useRef(null);

  const handleChooseFile = (e) => {
    inputRef.current.click();
  };

  const handleChangeFile = (e) => {
    const files = e.target.files; // FileList {0: File, length: 1}
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
  };

  return (
    <div onClick={handleChooseFile} {...props}>
      <Input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={handleChangeFile}
      />
      {typeof children === "function" ? children(file) : children}
    </div>
  );
};

export default Upload;
