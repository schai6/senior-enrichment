import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import AllStudentsContainer from './AllStudentsContainer';

export default class NavBar extends React.Component {
  constructor() {
    super();
    //local state for choosing tabs
    this.state = {
      activeItem: 'Home'
    };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    let currentPage;
    if (activeItem === 'Campuses') {
      currentPage = 'hi';
    } else if (activeItem === 'Students') {
      currentPage = <AllStudentsContainer />;
    } else {
      currentPage = 'blah';
    }
    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Menu position='right'>
            <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick.bind(this)} />
            <Menu.Item name='Campuses' active={activeItem === 'Campuses'} onClick={this.handleItemClick.bind(this)} />
            <Menu.Item name='Students' active={activeItem === 'Students'} onClick={this.handleItemClick.bind(this)} />
          </Menu.Menu>
        </Menu>
        <Segment attached='bottom' raised padded>
          {currentPage}
        </Segment>
      </div>
    );
  }
}
