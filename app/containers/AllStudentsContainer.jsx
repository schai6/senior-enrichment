import { connect } from 'react-redux';
import AllStudents from '../components/AllStudents';
import { removeStudent, getCampuses } from '../store';
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
    handleUserDelete(student, students, campuses) {
      dispatch(removeStudent(student.id, students, campuses))
      .then(() => {
        const studentId = student.id;
        const campus = campuses.find(campus => campus.id === student.campus.id);
        const newCampusStudents = campus.students.filter(student => student.id !== studentId);
        const newCampus = {...campus, students: newCampusStudents};
        dispatch(getCampuses(campuses.map(campus => campus.id === newCampus.id ? newCampus : campus)));
      });
    }
  };
};

const AllStudentsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllStudents));
export default AllStudentsContainer;
