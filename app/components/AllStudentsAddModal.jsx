import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import StudentFormContainer from '../containers/StudentFormContainer';

class AllStudentsAddModal extends React.Component {
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

  handleFormSubmit(values, campuses) {
    this.props.handleFormSubmit(values, campuses);
    this.handleClose();
  }

  render() {
    return (
      <Modal size='tiny' open={this.state.modalOpen} onClose={() => this.handleClose()} trigger={<Button positive onClick={() => this.handleOpen()} className='add-student-button'>ADD STUDENT</Button>}>
        <Modal.Header>Add a Student</Modal.Header>
        <Modal.Content>
          <StudentFormContainer selectedStudents={this.props.selectedStudents} selectedCampuses={this.props.selectedCampuses} handleFormSubmit={this.handleFormSubmit.bind(this)} handleClose={this.handleClose.bind(this)} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default AllStudentsAddModal;
