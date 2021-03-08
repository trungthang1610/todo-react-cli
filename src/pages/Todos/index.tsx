import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'types';
import StyledWrapper from './styles';
import { fetchTodo } from './thunks';
import { todosSelector } from './selector';

const TodosPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector(todosSelector);

  useEffect(() => {
    (async () => {
      const resultAction = await dispatch(fetchTodo({ limit: 10 }));
      if (fetchTodo.fulfilled.match(resultAction)) {
        //TODO handle success
        console.log('handle success');
      } else {
        //TODO handle error
        console.log('handle error');
      }
    })();
  }, []);

  return <StyledWrapper>Todos page {todos.todos.length}</StyledWrapper>;
};

export default TodosPage;
