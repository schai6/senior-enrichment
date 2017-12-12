import { connect } from 'react-redux';
import CampusSubmitForm from '../components/CampusSubmitForm';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    initialValues: ownProps.campus
  };
};

const CampusFormContainer = withRouter(connect(mapStateToProps)(CampusSubmitForm));
export default CampusFormContainer;
