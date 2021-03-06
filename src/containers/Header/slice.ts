import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoModel } from 'types';
import { fetchTodo } from './thunks';

export interface HeaderState {
  todos: TodoModel[];
}

const initialState: HeaderState = {
  todos: [],
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    todo(state, action: PayloadAction<TodoModel[]>) {
      return {
        ...state,
        todos: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => ({
      ...state,
      todos: action.payload.todos,
    }));
  },
});

export const { todo } = headerSlice.actions;
export default headerSlice.reducer;
