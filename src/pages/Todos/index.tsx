import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, FormMode } from 'types';
import { fetchTodo } from './thunks';
import { todosSelector } from './selector';
import { FormControl, ListItem } from 'components';
import { Button, Col, Row, Switch } from 'antd';

const TodosPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { forms, todos } = useSelector(todosSelector);
  const form = forms.find((form) => form.mode === FormMode.AddNew);

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

  const columns = [
    {
      key: 'id',
      title: 'Id',
      dataIndex: 'id',
      width: 200,
    },
    {
      key: 'title',
      title: 'Title',
      dataIndex: 'title',
      width: 200,
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      width: 200,
      render: function test() {
        return todos.map((todo) => {
          if (todo.completed) {
            return <Switch key={todo.id} checked={true} />;
          } else {
            return <Switch key={todo.id} />;
          }
        });
      },
    },
    {
      key: 'action',
      title: 'Action',
      render: function test() {
        return <Button type="link">Delete</Button>;
      },
    },
  ];

  return (
    <Row>
      <Col offset={8} span={8}>
        {form && <FormControl form={form} />}
        {columns && todos && <ListItem columns={columns} data={todos} />}
      </Col>
    </Row>
  );
};

export default TodosPage;
