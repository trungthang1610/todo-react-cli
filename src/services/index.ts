import axios from 'utils/axios';

import UsersService from './users';

import TodosService from './todos';

export const usersService = new UsersService(axios);
export const todosService = new TodosService(axios);
