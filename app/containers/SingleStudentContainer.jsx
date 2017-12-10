import { connect } from 'react-redux';
import SingleStudent from '../components/SingleStudent';

const mapStateToProps = (state) => {
  return {
    student: state.student
  };
};

const SingleStudentContainer = connect(mapStateToProps)(SingleStudent);
export default SingleStudentContainer;
