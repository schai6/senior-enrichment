import React from 'react';
import store, { fetchStudents } from '../store';
import NavBar from './NavBar';
export default class Root extends React.Component {
  componentDidMount() {
    store.dispatch(fetchStudents());
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}
