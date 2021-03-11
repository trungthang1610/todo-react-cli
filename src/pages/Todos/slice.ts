import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import * as Yup from 'yup';
import { ControlType, FormMode, IForm, TodoModel } from 'types';
import { fetchTodo } from './thunks';

const Forms: IForm[] = [
  {
    code: 'newForm',
    mode: FormMode.AddNew,
    title: 'Create todo',
    description: 'Create a new todo',
    rows: [
      {
        controls: [
          {
            id: 'title',
            title: 'Title',
            type: ControlType.Text,
            required: true,
          },
        ],
      },
      {
        controls: [
          {
            id: 'completed',
            title: 'Completed',
            type: ControlType.Switch,
            required: true,
          },
        ],
      },
    ],
  },
];

export interface TodosState {
  todos: TodoModel[];
  forms: IForm[];
  initTodo: TodoModel;
}

const initialState: TodosState = {
  todos: [],
  forms: Forms,
  initTodo: {
    id: 0,
    title: '',
    completed: false,
  },
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
