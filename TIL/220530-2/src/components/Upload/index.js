import styled from "@emotion/styled";
import { useRef, useState } from "react";

const UploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const Upload = ({
  children,
  droppable,
  name,
  accept, // file type
  value,
  onChange,
  ...props
}) => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  // div를 눌러 안 보이는 input 활성화
  const handleChooseFile = (e) => {
    inputRef.current.click();
  };

  const handleDragEnter = (e) => {
    if (!droppable) return;
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true); // dragging state로 input의 border 결정
    }
  };

  const handleDragLeave = (e) => {
    if (!droppable) return;
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  };

  // 기본 동작 및 이벤트 전파 방지
  const handleDragOver = (e) => {
    if (!droppable) return;
    e.preventDefault();
    e.stopPropagation();
  };

  // 드래그&드랍으로 파일 골랐을 때
  const handleFileDrop = (e) => {
    if (!droppable) return;
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
    setDragging(false);
  };

  // 클릭으로 파일 골랐을 때
  const handleChangeFile = (e) => {
    const files = e.target.files; // FileList {0: File, length: 1}
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
  };

  return (
    <UploadContainer
      onClick={handleChooseFile}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleFileDrop}
      {...props}
    >
      <Input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={handleChangeFile}
      />
      {typeof children === "function" ? children(file, dragging) : children}
    </UploadContainer>
  );
};

export default Upload;
