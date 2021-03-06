import { connect } from 'react-redux';
import SingleStudentUpdateModal from '../components/SingleStudentUpdateModal';
import { withRouter } from 'react-router';
import { updateStudent } from '../store';

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    campuses: state.campuses,
    initialValues: ownProps.student
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit(formData, campuses, students) {
      dispatch(updateStudent(formData, campuses, students));
    }
  };
};


const SingleStudentUpdateModalContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudentUpdateModal));
export default SingleStudentUpdateModalContainer;
