import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { InputField, SelectField } from 'react-semantic-redux-form';

const StudentForm = (props) => {
  const campuses = props.campuses;
  let campusOptions = [{key: 'select', value: '', text: 'Select a Campus'}];
  campuses.map((campus, i) => {
    campusOptions.push({key: i, value: campus.id, text: campus.name});
  });
  return (
    <Form onSubmit={props.handleSubmit((values) => props.handleFormSubmit(values, props.students, event))}>
      <Form.Group>
        <Field name='firstName' component={InputField} label='First Name' placeholder='First Name' />
        <Field name='lastName' component={InputField} label='Last Name' placeholder='Last Name' />
      </Form.Group>
      <Field name='email' component={InputField} label='Email' type='email' placeholder='Email' />
      <Field name='campusId' component={SelectField} label='Campus' placeholder='Select Campus' options={campusOptions} />
      <Field name='gpa' component={InputField} label='GPA' type='number' placeholder='GPA' />
      <div>
        <Button disabled={props.pristine || props.submitting} onClick={props.reset}>Reset Form</Button>
        <Button type='submit'>Submit</Button>
      </div>
    </Form>
  );
};

export default reduxForm({ form: 'StudentForm' })(StudentForm);
