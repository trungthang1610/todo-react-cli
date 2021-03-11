import React, { FC, useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Modal, Select, Switch } from 'antd';
import PropTypes from 'prop-types';

import { ControlType, IForm } from 'types';
import { useFormik } from 'formik';
import { createTodo } from 'pages/Todos/thunks';
import { useDispatch } from 'react-redux';

type Props = {
  form: IForm;
};

export const FormControl: FC<Props> = ({ form }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: 0,
      title: '',
      completed: false,
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(createTodo(values));
      resetForm();
    },
  });
  useEffect(() => {
    console.log(formik.values);
  });
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        New Todo
      </Button>
      <Modal
        visible={visible}
        okText="Create"
        cancelText="Cancel"
        title={form.title}
        onOk={() => {
          formik.handleSubmit();
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <Form layout="vertical" title={form.title}>
          {form.rows?.map((r) => {
            return r.controls?.map((c) => {
              if (c.type === ControlType.Number) {
                return (
                  <Form.Item label={c.title} name={c.id} help>
                    <InputNumber placeholder={c.placeHolder} onChange={formik.handleChange} />
                  </Form.Item>
                );
              } else if (c.type === ControlType.Text) {
                return (
                  <Form.Item label={c.title} name={c.id}>
                    <Input placeholder={c.placeHolder} onChange={formik.handleChange} />
                  </Form.Item>
                );
              } else if (c.type === ControlType.Choice) {
                return (
                  <Form.Item label={c.title} name={c.id}>
                    <Select onChange={formik.handleChange}>
                      {c.items?.map((item) => {
                        <Select.Option value={item.key}>{item.text}</Select.Option>;
                      })}
                    </Select>
                  </Form.Item>
                );
              } else if (c.type === ControlType.Switch) {
                return (
                  <Form.Item label={c.title} name={c.id}>
                    <Switch
                      onChange={(e) => {
                        formik.setFieldValue(c.id, e);
                      }}
                    />
                  </Form.Item>
                );
              } else {
                return null;
              }
            });
          })}
        </Form>
      </Modal>
    </>
  );
};

FormControl.propTypes = {
  form: PropTypes.object.isRequired,
};
