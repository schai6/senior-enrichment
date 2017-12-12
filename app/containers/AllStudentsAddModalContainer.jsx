import { connect } from 'react-redux';
import AllStudentsAddModal from '../components/AllStudentsAddModal';
import { withRouter } from 'react-router';
import { postStudent, getCampuses } from '../store';
import axios from 'axios';

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    selectedStudents: ownProps.selectedStudents,
    selectedCampuses: ownProps.selectedCampuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit(student, campuses) {
      dispatch(postStudent(student))
        .then(axios.get(`/api/campuses/${student.campusId}`))
        .then(campus => {
          console.log(campus);
          const newCampus = { ...campus, students: [...campus.students, student] };
          dispatch(getCampuses(campuses.map(campus => campus.id === newCampus.id ? newCampus : campus)));
        });
    }
  };
};


const AllStudentsAddModalContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllStudentsAddModal));
export default AllStudentsAddModalContainer;
