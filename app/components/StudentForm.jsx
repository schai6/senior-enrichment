import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const StudentForm = (props) => {
  return (
    <Form>
      <Form.Group>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
      </Form.Group>
      <Form.Field>
        <label>Email</label>
        <input placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <label>Campus</label>
        <input placeholder='Campus' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default StudentForm;
