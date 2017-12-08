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
            <Table.HeaderCell width={2}>#</Table.HeaderCell>
            <Table.HeaderCell width={5}>Name</Table.HeaderCell>
            <Table.HeaderCell width={5}>Campus</Table.HeaderCell>
            <Table.HeaderCell width={2}>GPA</Table.HeaderCell>
            <Table.HeaderCell width={2}>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body >
          {props.students.map((student, i) => {
            const campus = props.campuses.find(campus => campus.id === student.campusId);
            campus.name = campus ? campus.name : '';
            return (
              <Table.Row key={student.id}>
                <Table.Cell>{student.id}</Table.Cell>
                <Table.Cell>
                  {/* Modal for Viewing Student */}
                  <SingleStudentModal student={student} campus={campus} />
                </Table.Cell>
                <Table.Cell>{campus.name}</Table.Cell>
                <Table.Cell>{student.gpa}</Table.Cell>
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
