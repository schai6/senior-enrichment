import { connect } from 'react-redux';
import AllCampuses from '../components/AllCampuses';
import { removeCampus, postCampus, getCurrentCampus } from '../store';

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses,
    campus: state.campus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCampusDelete(campusId) {
      dispatch(removeCampus(campusId));
    },
    handleFormSubmit(formData) {
      dispatch(postCampus(formData));
    },
    handleGetCurrentCampus(campus) {
      dispatch(getCurrentCampus(campus));
    }
  };
};

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
export default AllCampusesContainer;
