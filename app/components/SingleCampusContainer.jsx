import { connect } from 'react-redux';
import SingleCampus from './SingleCampus';
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

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
export default SingleCampusContainer;
