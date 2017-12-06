import React from 'react';
import { Table } from 'semantic-ui-react';

const Student = (props) => {
  return (
    <div>
      <Table celled inverted selectable sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>#</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Campus</Table.HeaderCell>
            <Table.HeaderCell width={1}>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {props.students.map((student, i) => {
          return (
            <Table.Body key={student.id}>
              <Table.Row>
                <Table.Cell>{i + 1}</Table.Cell>
                <Table.Cell>{student.name}</Table.Cell>
                <Table.Cell>{student.campus}</Table.Cell>
                <Table.Cell>-</Table.Cell>
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
