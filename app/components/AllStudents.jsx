import React from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';
import SingleStudentModal from './SingleStudentModal';
import StudentFormModal from './StudentFormModal';

const AllStudents = (props) => {
  const students = props.students;
  const campuses = props.campuses;
  return (
    <div>
      {/* Modal for adding a student */}
      <StudentFormModal campuses={campuses} handleFormSubmit={props.handleFormSubmit} />
      {/* Table of Students */}
      <Table textAlign='center' definition celled selectable size='large'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={2}>#ID</Table.HeaderCell>
            <Table.HeaderCell width={4}>Name</Table.HeaderCell>
            <Table.HeaderCell width={4}>Email</Table.HeaderCell>
            <Table.HeaderCell width={4}>Campus</Table.HeaderCell>
            <Table.HeaderCell width={2}>GPA</Table.HeaderCell>
            <Table.HeaderCell width={2}>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body >
          {students.map(student => {
            if (!student.campus) {
              let campus = campuses[0];
              student.campus = { name: campus.name};
            }
            return (
              <Table.Row key={student.id}>
                <Table.Cell>{student.id}</Table.Cell>
                <Table.Cell>
                  {/* Modal for Viewing Student */}
                  <SingleStudentModal student={student} campus={student.campus} />
                </Table.Cell>
                <Table.Cell>{student.email}</Table.Cell>
                <Table.Cell>{student.campus.name}</Table.Cell>
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
