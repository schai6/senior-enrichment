import { connect } from 'react-redux';
import AllStudents from '../components/AllStudents';
import { removeStudent, postStudent, fetchCampus, getCurrentStudent } from '../store';

const mapStateToProps = (state, ownProps) => {
  //use own props if passed in.
  let students = ownProps.campus ? ownProps.campus.students : state.students;
  let campuses = ownProps.campus ? [ownProps.campus] : state.campuses;
  return {
    students,
    campuses,
    campus: state.campus,
    student: state.student
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //gets the campus for single campus view to cause rerender
    handleUserDelete(studentId, campus) {
      dispatch(removeStudent(studentId))
      .then(() => {
        if (campus) dispatch(fetchCampus(campus.id));
      });
    },
    handleFormSubmit(formData) {
      dispatch(postStudent(formData))
      .then(dispatch(fetchCampus(formData.campusId)));
    },
    handleGetCurrentStudent(student) {
      dispatch(getCurrentStudent(student));
    }
  };
};

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents);
export default AllStudentsContainer;
