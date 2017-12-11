import { connect } from 'react-redux';
import AllStudentsAddModal from '../components/AllStudentsAddModal';
import { withRouter } from 'react-router';
import {postStudent, fetchCampuses } from '../store';

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit(formData) {
      dispatch(postStudent(formData))
      .then(dispatch(fetchCampuses()));
    }
  };
};


const StudentAddModalContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllStudentsAddModal));
export default StudentAddModalContainer;
