import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoModel } from 'types';
import { fetchTodo } from './thunks';

export interface TodosState {
  todos: TodoModel[];
}

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
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

export const { todo } = todosSlice.actions;
export default todosSlice.reducer;
