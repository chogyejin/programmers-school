import { createContext, useContext } from "react";
import { v4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (content) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        content,
        complete: false,
      },
    ]);
  };

  const updateTask = (id, status) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, complete: status } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
