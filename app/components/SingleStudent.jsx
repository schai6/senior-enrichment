import React from 'react';
import { Table } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const SingleStudent = (props) => {
  const student = props.student;
  const campus = props.student.campus;
  return (
    <Table textAlign='center' definition celled selectable size='large'>
      <Table.Body >
        <Table.Row>
          <Table.Cell textAlign='center'>First Name</Table.Cell>
          <Table.Cell>{student.firstName}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign='center'>Last Name</Table.Cell>
          <Table.Cell>{student.lastName}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign='center'>Email</Table.Cell>
          <Table.Cell>{student.email}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign='center'>GPA</Table.Cell>
          <Table.Cell>{student.gpa}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign='center'>Campus</Table.Cell>
          <Table.Cell><NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default SingleStudent;
