import TaskList from "../components/TaskList";
import TaskProvider from "../contexts/TaskProvider";

export default {
  title: "Component/TaskList",
  component: TaskList,
};

export const Default = () => {
  const tasks = [
    {
      id: "1233",
      content: "toodo",
      complete: false,
    },
    {
      id: "1234",
      content: "ttttttttttttoodo",
      complete: true,
    },
  ];

  return (
    <TaskProvider initialTasks={tasks}>
      <TaskList />
    </TaskProvider>
  );
};
