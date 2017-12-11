//oh these names
import { connect } from 'react-redux';
import AllCampusesAddModal from '../components/AllCampusesAddModal';
import { withRouter } from 'react-router';
import {postStudent } from '../store';

const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit(formData) {
      dispatch(postStudent(formData));
    }
  };
};


const AllCampusesAddModalContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllCampusesAddModal));
export default AllCampusesAddModalContainer;
