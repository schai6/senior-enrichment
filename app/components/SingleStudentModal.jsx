import React from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
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
    const student = this.props.student;
    const campus = this.props.campus;
    return (
      <Modal size='tiny' open={this.state.modalOpen} onClose={() => this.handleClose()} trigger={<Button primary fluid onClick={() => this.handleOpen()} className='add-student-button'>{student.name}</Button>}>
        <Modal.Header>{student.name}</Modal.Header>
        <Modal.Content>
          <SingleStudent student={student} campus={campus} modalOpen={this.state.modalOpen} handleOpen={this.handleOpen.bind(this)} handleClose={this.handleClose.bind(this)} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default SingleStudentModal;
