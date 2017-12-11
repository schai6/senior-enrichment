import { connect } from 'react-redux';
import AllStudentsAddModal from '../components/AllStudentsAddModal';
import { withRouter } from 'react-router';
import {postStudent } from '../store';

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    selectedStudents: ownProps.selectedStudents,
    selectedCampuses: ownProps.selectedCampuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit(formData, campuses) {
      dispatch(postStudent(formData, campuses));
    }
  };
};


const AllStudentsAddModalContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllStudentsAddModal));
export default AllStudentsAddModalContainer;
