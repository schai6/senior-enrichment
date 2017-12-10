import { connect } from 'react-redux';
import AllStudents from '../components/AllStudents';
import { removeStudent, postStudent, fetchCampuses } from '../store';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  //use current campus if found.
  const campusId = ownProps.match.params.id;
  const campuses = campusId ? [state.campuses.find(campus => campus.id === +campusId)] : state.campuses;
  const students = campusId ? campuses[0].students : state.students;
  return {
    students,
    campuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //when you remove a student, update the campus
    handleUserDelete(studentId) {
      dispatch(removeStudent(studentId))
        .then(dispatch(fetchCampuses()));
    },
    handleFormSubmit(formData) {
      dispatch(postStudent(formData, formData.campusId))
      .then(dispatch(fetchCampuses()));
    }
  };
};

const AllStudentsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllStudents));
export default AllStudentsContainer;
