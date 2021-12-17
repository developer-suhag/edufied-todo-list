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
    deleteFromTodoList: (state, { payload }) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== payload);
    },
    markAsCompleted: (state, { payload }) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== payload.id);
      state.completedList.push(payload);
    },
  },
});

export const { addTodo, markAsCompleted, deleteFromTodoList } =
  todoSlice.actions;

export default todoSlice.reducer;
