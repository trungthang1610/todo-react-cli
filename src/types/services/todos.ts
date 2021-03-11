export type TodoModel = {
  id: number;
  title: string;
  completed: boolean;
};

export type FetchTodosRequest = {
  limit: number;
};

export type FetchTodosResponse = {
  todos: TodoModel[];
};

export type CreateTodoRequest = {
  id: number;
  title: string;
  completed: boolean;
};

export type CreateTodoResponse = {
  todo: TodoModel;
};
