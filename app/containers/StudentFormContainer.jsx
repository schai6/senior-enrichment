import { connect } from 'react-redux';
import StudentForm from '../components/StudentForm';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    students: state.students,
    initialValues: ownProps.student
  };
};

const StudentFormContainer = withRouter(connect(mapStateToProps)(StudentForm));
export default StudentFormContainer;