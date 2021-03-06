import { createAsyncThunk } from '@reduxjs/toolkit';
import { todosService } from 'services';
import { FetchTodosResponse, FetchTodosRequest } from 'types';

export const fetchTodo = createAsyncThunk<FetchTodosResponse, FetchTodosRequest>('header/fetchTodo', async (params) => {
  //TODO call api
  const response = await todosService.fetchTodo(params);
  return { todos: response.data.todos ?? 20 };
});
