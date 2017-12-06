import React from 'react';
import store, {fetchStudents} from '../store';
export default class Root extends React.Component {
  componentDidMount() {
    store.dispatch(fetchStudents());
  }

  render() {
    return (
      <div>
        <h1>Hellowerwr</h1>
      </div>
    );
  }
}
