import React from 'react';
import store, { fetchStudents, fetchCampuses } from '../store';
import NavBar from './NavBar';
export default class Root extends React.Component {
  componentDidMount() {
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampuses());
  }

  render() {
    return (
      <NavBar />
    );
  }
}
