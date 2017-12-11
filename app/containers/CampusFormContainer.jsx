import { connect } from 'react-redux';
import CampusForm from '../components/CampusForm';
import StudentForm from '../components/StudentForm';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    initialValues: ownProps.campus
  };
};

const CampusFormContainer = withRouter(connect(mapStateToProps)(StudentForm));
export default CampusFormContainer;
