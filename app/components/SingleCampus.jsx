import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import AllStudentsContainer from '../containers/AllStudentsContainer';

const SingleCampus = (props) => {
  const campus = props.campus;
  return (
    <div>
      <Image size='large' centered bordered src={campus.imageUrl} />
      <Header as='h1' textAlign='center' color='teal'>
        <Header.Content>
          {campus.name}
        </Header.Content>
        <Header.Subheader>
          {campus.description}
        </Header.Subheader>
      </Header>
      {/* call AllStudentsContainer with own list of students/campus */}
      <AllStudentsContainer />
    </div>
  );
};

export default SingleCampus;
