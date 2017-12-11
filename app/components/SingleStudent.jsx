import React from 'react';
import { Table, Segment, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SingleStudentUpdateModalContainer from '../containers/SingleStudentUpdateModalContainer';

const SingleStudent = (props) => {
  const student = props.student;
  const campus = props.student.campus;
  return (
    <Segment raised className='single-student-segment'>
      <Label corner='right'>
        <SingleStudentUpdateModalContainer student={student} />
      </Label >
      <Table textAlign='center' collapsing definition celled selectable size='large'>
        <Table.Body >
          <Table.Row>
            <Table.Cell className='single-student-table' textAlign='center'><p>First Name</p></Table.Cell>
            <Table.Cell>{student.firstName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className='single-student-table' textAlign='center'><p>Last Name</p></Table.Cell>
            <Table.Cell>{student.lastName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className='single-student-table' textAlign='center'><p>Email</p></Table.Cell>
            <Table.Cell>{student.email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className='single-student-table' textAlign='center'><p>GPA</p></Table.Cell>
            <Table.Cell>{student.gpa}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className='single-student-table' textAlign='center'><p>Campus</p></Table.Cell>
            <Table.Cell><NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default SingleStudent;
