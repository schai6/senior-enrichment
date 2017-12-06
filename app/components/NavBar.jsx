import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';

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
          <Menu.Item name='photos' active={activeItem === 'photos'} onClick={this.handleItemClick.bind(this)} />
          </Menu.Menu>
        </Menu>
        <Segment attached='bottom'>
          hi
        </Segment>
      </div>
    );
  }
}
