import React from 'react';
import store, { fetchStudents, fetchCampuses } from '../store';
import NavBar from './NavBar';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import AllCampusesContainer from '../containers/AllCampusesContainer';
import AllStudentsContainer from '../containers/AllStudentsContainer';
import SingleCampusContainer from '../containers/SingleCampusContainer';

export default class Root extends React.Component {
  componentDidMount() {
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampuses());
  }

  render() {
    return (
      <div>
        <NavBar />
        <Segment attached='bottom' raised padded>
          <Switch >
            <Route path="/home/" />
            <Route exact path="/students/" component={AllStudentsContainer} />
            <Route exact path="/campuses/" component={AllCampusesContainer} />
            <Route path="/students/:id/" />
            <Route path="/campuses/:id/" component={SingleCampusContainer} />
            <Redirect to="/home/" />
          </Switch >
        </Segment>
      </div>
    );
  }
}
