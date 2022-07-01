import { gql, useApolloClient, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useState, useCallback } from "react";

const Form = styled.form`
  width: 400px;
`;

const Input = styled.input`
  width: 332px;
  height: 32px;
  padding: 4px 6px;
  border-radius: 8px;
  border: 2px solid black;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  border-radius: 8px;
  margin-left: 8px;
  color: white;
  border: none;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;
`;

const CREATE_TASK = gql`
  mutation CreateTask($content: String!) {
    createTask(data: { content: $content, complete: false }) {
      data {
        id
      }
    }
  }
`;

const NewTaskForm = () => {
  const client = useApolloClient();
  const [task, setTask] = useState("");
  const [createTask] = useMutation(CREATE_TASK);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      createTask({ variables: { content: task } });
      setTask("");
      client.refetchQueries({ include: ["GetTasks"] });
    },
    [client, createTask, task]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <SubmitButton>추가</SubmitButton>
    </Form>
  );
};

export default NewTaskForm;
