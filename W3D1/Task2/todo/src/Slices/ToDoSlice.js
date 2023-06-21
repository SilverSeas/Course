import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todosList: [
      { id: 1, content: 'wake up', completed: false },
      { id: 2, content: 'cook', completed: false },
      { id: 3, content: 'eat', completed: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        content: action.payload.content,
        completed: false,
      };
      state.todosList.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.todosList.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.todosList = state.todosList.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
