import { connect } from 'react-redux';
import CampusForm from '../components/CampusForm';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    initialValues: ownProps.campus
  };
};

const CampusFormContainer = withRouter(connect(mapStateToProps)(CampusForm));
export default CampusFormContainer;
