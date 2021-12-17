import { createSlice } from "@reduxjs/toolkit";

const todos = [
  { id: "0", name: "Hello", status: "pending" },
  { id: "1", name: "Hello", status: "pending" },
  { id: "2", name: "Hello", status: "completed" },
  { id: "3", name: "Hello", status: "pending" },
  { id: "4", name: "Hello", status: "completed" },
  { id: "5", name: "Hello", status: "pending" },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: todos,
    completedList: [],
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todoList.push(payload);
    },
    markAsCompleted: (state, { payload }) => {
      //   state.todoList
    },
  },
});

export const { addTodo, markAsCompleted } = todoSlice.actions;

export default todoSlice.reducer;
