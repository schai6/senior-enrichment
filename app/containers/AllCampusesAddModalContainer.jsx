//oh these names
import { connect } from 'react-redux';
import AllCampusesAddModal from '../components/AllCampusesAddModal';
import { withRouter } from 'react-router';
import {postCampus } from '../store';

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit(formData) {
      dispatch(postCampus(formData));
    }
  };
};


const AllCampusesAddModalContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllCampusesAddModal));
export default AllCampusesAddModalContainer;
