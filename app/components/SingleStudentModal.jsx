import React from 'react';
import { Button, Modal, Icon} from 'semantic-ui-react';
import SingleStudent from './SingleStudent';

class SingleStudentModal extends React.Component {
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
      <Modal size='tiny' open={this.state.modalOpen} onClose={() => this.handleClose()} trigger={<Button icon onClick={() => this.handleOpen()} className='add-student-button'><Icon name='user' size='large' /></Button>}>
        <Modal.Header>{this.props.student.name}</Modal.Header>
        <Modal.Content>
          <SingleStudent modalOpen={this.state.modalOpen} handleOpen={this.handleOpen.bind(this)} handleClose={this.handleClose.bind(this)} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default SingleStudentModal;
