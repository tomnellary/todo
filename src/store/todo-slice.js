import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    completedTodos: [],
  },
  reducers: {
    addNewTodo: (state, action) => {
      let todo = action.payload;
      state.todos = [...state.todos, todo];
    },
    doneTodo: (state, action) => {
      const todos = [...state.todos];
      const existingTodo = todos.find((item) => item.id === action.payload);
      state.completedTodos = [...state.completedTodos, existingTodo];
      let updatedTodo = todos.filter((item) => item.id !== action.payload);
      state.todos = updatedTodo;
    },
    removeTodo: (state, action) => {
      let todos = [...state.todos];
      todos.splice(action.payload, 1);
      state.todos = [...todos];
    },
  },
});

export const { todoActions, addNewTodo, doneTodo, removeTodo } =
  todoSlice.actions;

export default todoSlice;
