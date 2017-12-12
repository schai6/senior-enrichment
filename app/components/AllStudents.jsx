import React from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';
import AllStudentsAddModalContainer from '../containers/AllStudentsAddModalContainer';
import TransferStudentsModalContainer from '../containers/TransferStudentsModalContainer';
import { NavLink } from 'react-router-dom';

const AllStudents = (props) => {
  const students = props.selectedStudents;
  const campuses = props.selectedCampuses;
  return (
    <div>
      <div className='students-button'>
        {/* Modal for adding a student */}
        <AllStudentsAddModalContainer selectedCampuses={campuses} selectedStudents={students} />
        <TransferStudentsModalContainer selectedCampuses={campuses} selectedStudents={students} />
      </div>
      {/* Table of Students */}
      <Table color='teal' textAlign='center' definition celled selectable size='large'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={2}>#ID</Table.HeaderCell>
            <Table.HeaderCell width={4}>Name</Table.HeaderCell>
            <Table.HeaderCell width={4}>Campus</Table.HeaderCell>
            <Table.HeaderCell width={4}>Email</Table.HeaderCell>
            <Table.HeaderCell width={2}>GPA</Table.HeaderCell>
            <Table.HeaderCell width={2}>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body >
          {students.map(student => {
            if (!student.campus) {
              let campus = campuses[0];
              student.campus = { name: campus.name, id: campus.id };
            }
            return (
              <Table.Row key={student.id}>
                <Table.Cell>{student.id}</Table.Cell>
                <Table.Cell>
                  <NavLink to={`/students/${student.id}`}>{student.name}</NavLink>
                </Table.Cell>
                <Table.Cell><NavLink to={`/campuses/${student.campus.id}`}>{student.campus.name}</NavLink></Table.Cell>
                <Table.Cell>{student.email}</Table.Cell>
                <Table.Cell>{student.gpa}</Table.Cell>
                <Table.Cell textAlign='center'><Button negative icon onClick={() => props.handleUserDelete(student, props.students, props.campuses)}><Icon name='user delete' size='large' /></Button></Table.Cell>
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
