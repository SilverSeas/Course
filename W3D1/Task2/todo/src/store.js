import { configureStore } from '@reduxjs/toolkit';
import  todosReducer from './Slices/ToDoSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  }
});

export default store;
