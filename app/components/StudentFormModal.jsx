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

  render() {
    return (
      <Modal size='tiny' open={this.state.modalOpen} onClose={() => this.handleClose()} trigger={<Button onClick={() => this.handleOpen()} className='add-student-button'>ADD STUDENT</Button>}>
        <Modal.Header>Add a Student</Modal.Header>
        <Modal.Content>
          <StudentForm handleClose={this.handleClose.bind(this)} handleFormSubmit={this.props.handleFormSubmit} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default StudentFormModal;
