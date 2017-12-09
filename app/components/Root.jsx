import React from 'react';
import store, { fetchStudents, fetchCampuses } from '../store';
import NavBar from './NavBar';
import { Redirect, Switch, Route } from 'react-router-dom';

export default class Root extends React.Component {
  componentDidMount() {
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampuses());
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch >
          <Route path="/home/" />
          <Route exact path="/students/" />
          <Route exact path="/campuses/" />
          <Route path="/students/:id/" />
          <Route path="/campuses/:id/" />
          <Redirect to="/home/" />
        </Switch >
      </div>
    );
  }
}
