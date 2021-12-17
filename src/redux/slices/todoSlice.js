import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
    completedList: [],
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todoList.push(payload);
    },
    markAsCompleted: (state, { payload }) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== payload.id);
      state.completedList.push(payload);
    },
  },
});

export const { addTodo, markAsCompleted } = todoSlice.actions;

export default todoSlice.reducer;
