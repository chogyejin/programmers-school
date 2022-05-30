import styled from "@emotion/styled";
import Toggle from "./Toggle";

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  padding: 0 8px;
  box-sizing: border-box;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
`;

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
`;

const RemoveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: white;
  border: none;
  border-radius: 8px;
  background-color: red;
  cursor: pointer;
`;

const Task = ({ content, complete, ...props }) => {
  return (
    <ListItem {...props}>
      <Toggle on={complete} />
      <Content>{content}</Content>
      <RemoveButton>삭제</RemoveButton>
    </ListItem>
  );
};

export default Task;
