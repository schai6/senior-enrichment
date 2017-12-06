import React from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';

const Student = (props) => {
  return (
    <div>
      <Table celled selectable sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>#</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Campus</Table.HeaderCell>
            <Table.HeaderCell width={1}>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {props.students.map((student, i) => {
          return (
            <Table.Body key={student.id}>
              <Table.Row>
                <Table.Cell>{i + 1}</Table.Cell>
                <Table.Cell>{student.firstName}</Table.Cell>
                <Table.Cell>{student.lastName}</Table.Cell>
                <Table.Cell>{student.campus}</Table.Cell>
                <Table.Cell textAlign='center'><Button icon><Icon name='user delete' size='large' onClick={() => props.handleClick(student.id)} /></Button></Table.Cell>
              </Table.Row>
            </Table.Body>
          );
        }
        )}
      </Table>
    </div>
  );
};

export default Student;
