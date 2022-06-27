import { Action, Task } from "./types";

// 상태를 변화시키는 순수 함수
// state의 default value로 []를 줘서 useSelector를 사용했을 때 never 방지
export const tasks = (state: Task[] = [], action: Action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = action.payload;
      return [...state, newTask];
    }
    case "UPDATE_TASK": {
      const updatedTask = action.payload;
      return state.map((oldTask) =>
        oldTask.id === updatedTask.id ? updatedTask : oldTask
      );
    }
    case "REMOVE_TASK": {
      const removedTask = action.payload;
      return state.filter((task) => task.id !== removedTask.id);
    }
    default: {
      return state;
    }
  }
};
