import { RootState } from 'types';
import { TodosState } from './slice';

export const todosSelector = (state: RootState): TodosState => state.todos;
