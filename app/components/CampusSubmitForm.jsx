import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import { InputField } from 'react-semantic-redux-form';

const CampusSubmitForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit((values) => props.handleFormSubmit(values))}>
      <Field name='name' component={InputField} label='Campus Name' placeholder='Campus Name' />
      <Field name='imageUrl' component={InputField} label='Image Url' placeholder='Image Url' />
      <Field name='description' component={InputField} label='Description' placeholder='Description' />
      <div>
        <Button disabled={props.pristine || props.submitting} onClick={props.reset}>Reset Form</Button>
        <Button disabled={props.pristine || props.submitting} type='submit'>Submit</Button>
      </div>
    </Form>
  );
};

export default reduxForm({ form: 'CampusSubmitForm' })(CampusSubmitForm);
