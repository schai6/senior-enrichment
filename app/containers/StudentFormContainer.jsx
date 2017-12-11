import { connect } from 'react-redux';
import StudentForm from '../components/StudentForm';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    students: state.students,
    selectedStudents: ownProps.selectedStudents ? ownProps.selctedStudents : state.students,
    selectedCampuses: ownProps.selectedCampuses ? ownProps.selctedCampuses : state.campuses,
    initialValues: ownProps.student
  };
};

const StudentFormContainer = withRouter(connect(mapStateToProps)(StudentForm));
export default StudentFormContainer;
