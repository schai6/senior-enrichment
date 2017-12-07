import { connect } from 'react-redux';
import Student from './Student';
import { removeStudent, addStudent } from '../store';

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(studentId) {
      dispatch(removeStudent(studentId));
    },
    handleFormSubmit(formData) {
      dispatch(addStudent(formData));
    }
  };
};

const StudentContainer = connect(mapStateToProps, mapDispatchToProps)(Student);
export default StudentContainer;
