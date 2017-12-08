import { connect } from 'react-redux';
import AllCampuses from './AllCampuses';
import { removeCampus, postCampus } from '../store';

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

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
export default AllCampusesContainer;
