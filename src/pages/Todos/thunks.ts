import { createAsyncThunk } from '@reduxjs/toolkit';
import { todosService } from 'services';
import { CreateTodoRequest, CreateTodoResponse, FetchTodosRequest, FetchTodosResponse } from 'types';

export const fetchTodo = createAsyncThunk<FetchTodosResponse, FetchTodosRequest>('todos/fetchTodo', async (params) => {
  //TODO call api
  const response = await todosService.fetchTodo(params);
  return { todos: response.data.todos ?? 20 };
});

export const createTodo = createAsyncThunk<CreateTodoResponse, CreateTodoRequest>(
  'todos/createTodo',
  async (params) => {
    console.log(params);
    const response = await todosService.createTodo(params);
    return { todo: response.data.todo ?? {} };
  },
);
