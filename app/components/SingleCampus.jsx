import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import AllStudentsContainer from '../containers/AllStudentsContainer';

const SingleCampus = (props) => {
  const campus = props.campus;
  return (
    <div>
      <Header as='h2' icon>
        <Image src={campus.imageUrl} />
        {campus.name}
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
