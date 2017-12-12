import { connect } from 'react-redux';
import AllStudentsAddModal from '../components/AllStudentsAddModal';
import { withRouter } from 'react-router';
import { postStudent, getCampuses, fetchCampuses } from '../store';

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    selectedStudents: ownProps.selectedStudents,
    selectedCampuses: ownProps.selectedCampuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit(student) {
      dispatch(postStudent(student))
      .then(dispatch(fetchCampuses()));
    }
  };
};


const AllStudentsAddModalContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllStudentsAddModal));
export default AllStudentsAddModalContainer;
