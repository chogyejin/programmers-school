import { v4 } from "uuid";
import {
  createAction,
  createReducer,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface Task {
  id: string;
  content: string;
  complete: boolean;
}

// action에 대한 타입을 따로 정의하지 않아도 됨
// export const addTask = createAction("tasks/add", (content: string) => {
//   return {
//     payload: {
//       id: v4(),
//       content,
//       complete: false,
//     },
//   };
// });

// export const updateTask = createAction(
//   "tasks/update",
//   (id: string, content: string, complete: boolean) => {
//     return {
//       payload: {
//         id,
//         content,
//         complete,
//       },
//     };
//   }
// );

// export const removeTask = createAction("tasks/remove", (id: string) => {
//   return {
//     payload: {
//       id,
//     },
//   };
// });

// reducer
// export const tasks = createReducer([] as Task[], {
//   [addTask.type]: (state: Task[], action: PayloadAction<Task>) => {
//     state.push(action.payload); // immer 내장, 따로 객체 만들 필요 없음
//   },
//   [updateTask.type]: (state: Task[], action: PayloadAction<Task>) => {
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     state[index] = action.payload;
//   },
//   [removeTask.type]: (
//     state: Task[],
//     action: PayloadAction<Pick<Task, "id">>
//   ) => {
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     if (index !== -1) {
//       state.splice(index, 1); // 값 state에 있으면 제거
//     }
//   },
// });

// action과 reducer 한 번에 작성, conbineReducer에서 tasks.reducer로 사용
export const tasks = createSlice({
  name: "tasks",
  initialState: [] as Task[],
  reducers: {
    add: {
      reducer: (state: Task[], action: PayloadAction<Task>) => {
        state.push(action.payload); // immer 내장, 따로 객체 만들 필요 없음
      },
      prepare: (content: string) => ({
        payload: {
          id: v4(),
          content,
          complete: false,
        },
      }),
    },
    update: {
      reducer: (state: Task[], action: PayloadAction<Task>) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        state[index] = action.payload;
      },
      prepare: (id: string, content: string, complete: boolean) => ({
        payload: {
          id,
          content,
          complete,
        },
      }),
    },
    remove: {
      reducer: (state: Task[], action: PayloadAction<Pick<Task, "id">>) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.splice(index, 1); // 값 state에 있으면 제거
        }
      },
      prepare: (id: string) => ({
        payload: {
          id,
        },
      }),
    },
  },
});
