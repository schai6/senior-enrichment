
import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import CampusFormContainer from '../containers/CampusFormContainer';

class AllCampusesAddModal extends React.Component {
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
      <Modal size='tiny' open={this.state.modalOpen} onClose={() => this.handleClose()} trigger={<Button positive onClick={() => this.handleOpen()} className='add-student-button'>ADD CAMPUS</Button>}>
        <Modal.Header>Add a Campus</Modal.Header>
        <Modal.Content>
          <CampusFormContainer handleFormSubmit={this.handleFormSubmit.bind(this)} handleClose={this.handleClose.bind(this)} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default AllCampusesAddModal;
