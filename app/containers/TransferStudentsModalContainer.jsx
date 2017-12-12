import { connect } from 'react-redux';
import TransferStudentsModal from '../components/TransferStudentsModal';
import { withRouter } from 'react-router';
import { updateCampus } from '../store';

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    selectedStudents: ownProps.selectedStudents,
    selectedCampuses: ownProps.selectedCampuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit(formData, campuses, students) {
      dispatch(updateCampus(formData, campuses, students));
    }
  };
};


const AllStudentsAddModalContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(TransferStudentsModal));
export default AllStudentsAddModalContainer;
