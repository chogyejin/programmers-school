import Task from "../components/Task";

export default {
  title: "Component/Task",
  component: Task,
};

export const Default = (args) => {
  const task = {
    content: "공부하기",
    complete: false,
  };
  return <Task content={task.content} complete={task.complete}></Task>;
};
