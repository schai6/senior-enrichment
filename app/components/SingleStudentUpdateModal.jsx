import React from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import StudentFormContainer from '../containers/StudentFormContainer';

class SingleStudentUpdateModal extends React.Component {
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

  handleFormSubmit(values, students) {
    this.props.handleFormSubmit(values, students);
    this.handleClose();
  }

  render() {
    const student = this.props.student;
    return (
      <Modal size='tiny' open={this.state.modalOpen} onClose={() => this.handleClose()} trigger={<Icon className='edit-student-icon' name='edit' onClick={() => this.handleOpen()} />}>
        <Modal.Header>Edit Student</Modal.Header>
        <Modal.Content>
          <StudentFormContainer student={student} handleFormSubmit={this.handleFormSubmit.bind(this)} handleClose={this.handleClose.bind(this)} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default SingleStudentUpdateModal;
