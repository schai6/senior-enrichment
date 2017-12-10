import { connect } from 'react-redux';
import AllCampuses from '../components/AllCampuses';
import { removeCampus, postCampus } from '../store';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCampusDelete(campusId) {
      dispatch(removeCampus(campusId));
    },
    handleFormSubmit(formData) {
      dispatch(postCampus(formData));
    }
  };
};

const AllCampusesContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllCampuses));
export default AllCampusesContainer;
