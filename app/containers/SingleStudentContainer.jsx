import { connect } from 'react-redux';
import SingleStudent from '../components/SingleStudent';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const student = state.students.find(student => student.id === +ownProps.match.params.id);
  return {
    student
  };
};

const SingleStudentContainer = withRouter(connect(mapStateToProps)(SingleStudent));
export default SingleStudentContainer;
