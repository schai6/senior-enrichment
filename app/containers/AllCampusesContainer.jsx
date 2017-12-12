import { connect } from 'react-redux';
import AllCampuses from '../components/AllCampuses';
import { removeCampus } from '../store';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCampusDelete(campusId, campuses) {
      dispatch(removeCampus(campusId, campuses));
    }
  };
};

const AllCampusesContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllCampuses));
export default AllCampusesContainer;
