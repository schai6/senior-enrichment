import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import StudentContainer from './StudentContainer';

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'Home'
    };
  }

  handleItemClick(e, {name}) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Menu position='right'>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick.bind(this)} />
          <Menu.Item name='Students' active={activeItem === 'Students'} onClick={this.handleItemClick.bind(this)} />
          </Menu.Menu>
        </Menu>
        {activeItem === 'Home' ? <Segment attached='bottom'>
          hi
        </Segment> : <Segment attached='bottom'>
          <StudentContainer />
        </Segment>}
      </div>
    );
  }
}
