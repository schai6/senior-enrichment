import React from 'react';
import { Button, Modal, Header, Icon } from 'semantic-ui-react';

const SingleStudent = (props) => {
  return (
    // <Modal size='tiny' open={props.modalOpen} onClose={props.handleClose} trigger={<Button icon onClick={props.handleOpen} className='add-student-button'><Icon name='user' size='large' /></Button>}>
    <Modal>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default SingleStudent;
