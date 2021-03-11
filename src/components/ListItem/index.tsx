import Table from 'antd/lib/table';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { TodoModel } from 'types';

type Props = {
  data: TodoModel[];
  columns: any[];
};

export const ListItem: FC<Props> = ({ columns, data }) => {
  console.log(data);
  console.log(columns);

  return <Table columns={columns} pagination={false} dataSource={data}></Table>;
};

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};
