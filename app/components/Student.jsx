import React from 'react';
import { Table, Icon, Button, Modal } from 'semantic-ui-react';
import StudentForm from './StudentForm';

const Student = (props) => {
  return (
    <div>
      <Modal size='tiny' trigger={<Button>ADD STUDENT</Button>}>
        <Modal.Header>Add a Student</Modal.Header>
        <Modal.Content><StudentForm /></Modal.Content>
      </Modal>
      <Table celled selectable sortable>
        <Table.Header>
          <Table.Row>
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
                <Table.Cell>{i + 1}</Table.Cell>
                <Table.Cell>{student.name}</Table.Cell>
                <Table.Cell>{student.campus}</Table.Cell>
                <Table.Cell textAlign='center'><Button icon onClick={() => props.handleClick(student.id)}><Icon name='user delete' size='large' /></Button></Table.Cell>
              </Table.Row>
            );
          }
          )}
        </Table.Body>
      </Table>
    </div >
  );
};

export default Student;
