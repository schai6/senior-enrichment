import { connect } from 'react-redux';
import AllStudents from './AllStudents';
import { removeStudent, postStudent } from '../store';

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUserDelete(studentId) {
      dispatch(removeStudent(studentId));
    },
    handleFormSubmit(formData) {
      dispatch(postStudent(formData));
    }
  };
};

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents);
export default AllStudentsContainer;
