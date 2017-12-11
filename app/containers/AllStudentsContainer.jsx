import { connect } from 'react-redux';
import AllStudents from '../components/AllStudents';
import { removeStudent, fetchCampuses } from '../store';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  //use current campus if found.
  const campusId = ownProps.match.params.id;
  const selectedCampuses = campusId ? [state.campuses.find(campus => campus.id === +campusId)] : state.campuses;
  const selectedStudents = campusId ? selectedCampuses[0].students : state.students;
  return {
    campuses: state.campuses,
    students: state.students,
    selectedCampuses,
    selectedStudents
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //when you remove a student, update the campus
    handleUserDelete(studentId) {
      dispatch(removeStudent(studentId))
        .then(dispatch(fetchCampuses()));
    }
  };
};

const AllStudentsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllStudents));
export default AllStudentsContainer;
