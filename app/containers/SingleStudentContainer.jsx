import { connect } from 'react-redux';
import SingleStudent from '../components/SingleStudent';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return {
    student: state.student
  };
};

const SingleStudentContainer = withRouter(connect(mapStateToProps)(SingleStudent));
export default SingleStudentContainer;
