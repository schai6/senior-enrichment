import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import TransferStudentsFormContainer from '../containers/TransferStudentsFormContainer';

class TransferStudentsModal extends React.Component {
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

  handleFormSubmit(values, campuses, students) {
    this.props.handleFormSubmit(values, campuses, students);
    this.handleClose();
  }

  render() {
    return (
      <Modal closeIcon size='tiny' open={this.state.modalOpen} onClose={() => this.handleClose()} trigger={<Button positive onClick={() => this.handleOpen()} className='add-student-button'>TRANSFER STUDENTS</Button>}>
        <Modal.Header>Transfer Students</Modal.Header>
        <Modal.Content>
          <TransferStudentsFormContainer selectedStudents={this.props.selectedStudents} selectedCampuses={this.props.selectedCampuses} handleFormSubmit={this.handleFormSubmit.bind(this)} handleClose={this.handleClose.bind(this)} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default TransferStudentsModal;
