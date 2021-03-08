import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { FetchTodosRequest, FetchTodosResponse } from 'types';

export default class TodosService {
  private readonly axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  fetchTodo = (params: FetchTodosRequest): AxiosPromise<FetchTodosResponse> => {
    const request: AxiosRequestConfig = {
      url: '/todos',
      params: params,
    };
    return this.axios(request);
  };
}
