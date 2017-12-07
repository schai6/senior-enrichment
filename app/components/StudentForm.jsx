import React from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';

const StudentForm = (props) => {
  return (
    <Modal size='tiny' trigger={<Button>ADD STUDENT</Button>}>
      <Modal.Header>Add a Student</Modal.Header>
      <Modal.Content>
        <Form onSubmit={props.handleSubmit((values) => props.handleFormSubmit(values))}>
          <Form.Group>
            <Field name='firstName' component={InputField} label='First Name' placeholder='First Name' />
            <Field name='lastName' component={InputField} label='Last Name' placeholder='Last Name' />
          </Form.Group>
          <Field name='email' component={InputField} label='Email' type='email' placeholder='Email' />
          <Field name='campus' component={InputField} label='Campus' placeholder='Campus' />
          <Button type='submit'>Submit</Button>
        </Form></Modal.Content>
    </Modal>

  );
};

export default reduxForm({ form: 'StudentForm' })(StudentForm);
