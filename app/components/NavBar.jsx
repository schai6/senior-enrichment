import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const NavBar = (props) => {
  //slash so the tab stays selected when viewing single campus/student
  const slash = props.location.pathname.indexOf('/', 1);
  const tab = slash > -1 ? props.location.pathname.slice(1, slash) : props.location.pathname.slice(1);
  return (
    <div className='nav-bar'>
      <Header
        as='h1' icon='snowflake outline' color='blue'
        content='Interplanetary Academy of JavaScript'
      />
      <Menu color='blue' pointing secondary size='large'>
        <Menu.Menu position='right'>
          <NavLink to={`/home`}><Menu.Item fitted='vertically' name='Home' active={tab === 'home'} /></NavLink>
          <NavLink to={`/campuses`}><Menu.Item name='Campuses' active={tab === 'campuses'} /></NavLink>
          <NavLink to={`/students`}><Menu.Item name='Students' active={tab === 'students'} /></NavLink>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default withRouter(NavBar);
