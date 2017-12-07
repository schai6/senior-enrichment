import React from 'react';
import { Table, Icon, Button, Modal } from 'semantic-ui-react';
import StudentForm from './StudentForm';

class AllStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  handleOpen() {
    this.setState({ modalOpen: true });
  }

  handleClose() {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <div>
        <Modal size='tiny' open={this.state.modalOpen} onClose={this.handleClose.bind(this)} trigger={<Button onClick={this.handleOpen.bind(this)} className='add-student-button'>ADD STUDENT</Button>}>
          <Modal.Header>Add a Student</Modal.Header>
          <Modal.Content>
            <StudentForm handleClose={this.handleClose.bind(this)} handleFormSubmit={this.props.handleFormSubmit} />
          </Modal.Content>
        </Modal>
        <Table textAlign='center' definition celled selectable size='large'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={1}/>
              <Table.HeaderCell width={1}>#</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Campus</Table.HeaderCell>
              <Table.HeaderCell width={1}>Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body >
            {this.props.students.map((student, i) => {
              return (
                <Table.Row key={student.id}>
                  <Table.Cell textAlign='center'><Button icon onClick={() => console.log('hihihih')}><Icon name='user' size='large' /></Button></Table.Cell>
                  <Table.Cell onClick={() => console.log('hihihi')}>{i + 1}</Table.Cell>
                  <Table.Cell>{student.name}</Table.Cell>
                  <Table.Cell>{student.campus}</Table.Cell>
                  <Table.Cell textAlign='center'><Button icon onClick={() => this.props.handleClick(student.id)}><Icon name='user delete' size='large' /></Button></Table.Cell>
                </Table.Row>
              );
            }
            )}
          </Table.Body>
        </Table>
      </div >
    );
  }
};

export default AllStudents;
