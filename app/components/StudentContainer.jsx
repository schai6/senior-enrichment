import { connect } from 'react-redux';
import Student from './Student';
import { removeStudent } from '../store';

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(studentId) {
      dispatch(removeStudent(studentId));
    }
  };
};

const StudentContainer = connect(mapStateToProps, mapDispatchToProps)(Student);
export default StudentContainer;
