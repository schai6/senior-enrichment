import { connect } from 'react-redux';
import AllStudents from '../components/AllStudents';
import { removeStudent, postStudent } from '../store';

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
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
