import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import Multiselect from 'react-widgets/lib/Multiselect';

const TransferStudentsForm = (props) => {
  const campuses = props.campuses;
  let campusOptions = [{key: 'select', value: '', text: 'Select Campus'}];
  campuses.map((campus, i) => {
    campusOptions.push({key: i, value: campus.id, text: campus.name});
  });
  const students = props.selectedStudents;
  let studentOptions = [];
  students.map((student) => {
    studentOptions.push({ value: student.id, text: student.name, campus: student.campus.name });
  });
  console.log(props);
  return (
    <Form onSubmit={props.handleSubmit((values) => props.handleFormSubmit(values, props.campuses, props.students))}>
      <Field name='campus' component={DropdownList} valueField='value' textField='text' label='Campus' placeholder='Select Campus' data={campusOptions} />
      <Field name='students' groupBy={student => student.campus} valueField='value' textField='text'defaultValue={[]} data={studentOptions} onBlur={() => props.onBlur()} component={Multiselect} label='Students' placeholder='Select Students' />
      <div>
        <Button disabled={props.pristine || props.submitting} onClick={props.reset}>Reset Form</Button>
        <Button disabled={props.pristine || props.submitting} type='submit'>Submit</Button>
      </div>
    </Form>
  );
};

export default reduxForm({ form: 'TransferStudentsForm' })(TransferStudentsForm);
