import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import AllStudentsContainer from '../containers/AllStudentsContainer';
import AllCampusesContainer from '../containers/AllCampusesContainer';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const NavBar = (props) => {
  const tab = props.location.pathname.slice(1);
  let currentPage;
  if (tab === 'campuses') {
    currentPage = <AllCampusesContainer />;
  } else if (tab === 'students') {
    currentPage = <AllStudentsContainer />;
  } else {
    currentPage = 'blah';
  }
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Menu position='right'>
          <NavLink to={`/home`}><Menu.Item name='Home' active={tab === 'home'} /></NavLink>
          <NavLink to={`/campuses`}><Menu.Item name='Campuses' active={tab === 'campuses'} /></NavLink>
          <NavLink to={`/students`}><Menu.Item name='Students' active={tab === 'students'} /></NavLink>
        </Menu.Menu>
      </Menu>
      <Segment attached='bottom' raised padded>
        {currentPage}
      </Segment>
    </div>
  );
};

export default withRouter(NavBar);
