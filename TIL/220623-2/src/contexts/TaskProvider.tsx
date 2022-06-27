import { createContext, ReactNode, useContext } from "react";
import { v4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

interface Task {
  id: string;
  content: string;
  complete: boolean;
}

interface ITaskContext {
  tasks: Task[];
  addTask: (content: string) => void;
  updateTask: (id: string, status: boolean) => void;
  removeTask: (id: string) => void;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext); // TaskContext.Provider의 value prop에서 ITaskContext 사용
export const useTasks = () => useContext(TaskContext);

interface TaskProviderProps {
  children: ReactNode;
  initialTasks?: Task[];
}

const TaskProvider = ({ children, initialTasks = [] }: TaskProviderProps) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", initialTasks);

  const addTask = (content: string) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        content,
        complete: false,
      },
    ]);
  };

  const updateTask = (id: string, status: boolean) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, complete: status } : item
      )
    );
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((item) => item.id !== id)); // 빼려는 아이디가 아닌 것들만 남음
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
