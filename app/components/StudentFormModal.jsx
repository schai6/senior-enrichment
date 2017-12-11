import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import StudentForm from './StudentForm';

class StudentFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  handleOpen() {
    this.setState({ modalOpen: true });
  }

  handleClose() {
    this.setState({ modalOpen: false });
  }

  handleFormSubmit(values) {
    this.props.handleFormSubmit(values);
    this.handleClose();
  }

  render() {
    return (
      <Modal size='tiny' open={this.state.modalOpen} onClose={() => this.handleClose()} trigger={<Button positive onClick={() => this.handleOpen()} className='add-student-button'>ADD STUDENT</Button>}>
        <Modal.Header>Add a Student</Modal.Header>
        <Modal.Content>
          <StudentForm campuses={this.props.campuses} handleFormSubmit={this.handleFormSubmit.bind(this)} handleClose={this.handleClose.bind(this)} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default StudentFormModal;
