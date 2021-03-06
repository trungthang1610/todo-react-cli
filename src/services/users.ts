import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { FetchUserRequest, FetchUserResponse } from 'types';

export default class UsersService {
  private readonly axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  fetchTodo = (params: FetchUserRequest): AxiosPromise<FetchUserResponse> => {
    const request: AxiosRequestConfig = {
      url: '/',
      params: params,
    };
    return this.axios(request);
  };
}
