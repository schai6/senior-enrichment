import React from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';
import SingleStudentModal from './SingleStudentModal';
import StudentFormModal from './StudentFormModal';

const AllStudents = (props) => {
  return (
    <div>
      {/* Modal for adding a student */}
      <StudentFormModal campuses={props.campuses} handleFormSubmit={props.handleFormSubmit} />
      {/* Table of Students */}
      <Table textAlign='center' definition celled selectable size='large'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1} />
            <Table.HeaderCell width={1}>#</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Campus</Table.HeaderCell>
            <Table.HeaderCell width={1}>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body >
          {props.students.map((student, i) => {
            return (
              <Table.Row key={student.id}>
                <Table.Cell textAlign='center'>
                  {/* Modal for Viewing Student */}
                  <SingleStudentModal student={student} />
                </Table.Cell>
                <Table.Cell>{i + 1}</Table.Cell>
                <Table.Cell>{student.name}</Table.Cell>
                <Table.Cell>{student.campus}</Table.Cell>
                <Table.Cell textAlign='center'><Button icon onClick={() => props.handleUserDelete(student.id)}><Icon name='user delete' size='large' /></Button></Table.Cell>
              </Table.Row>
            );
          }
          )}
        </Table.Body>
      </Table>
    </div >
  );
};

export default AllStudents;
