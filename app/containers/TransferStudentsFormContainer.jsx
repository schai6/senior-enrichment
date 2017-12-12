import { connect } from 'react-redux';
import TransferStudentsForm from '../components/TransferStudentsForm';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    students: state.students,
    selectedStudents: ownProps.selectedStudents ? ownProps.selectedStudents : state.students,
  };
};

const TransferStudentsFormContainer = withRouter(connect(mapStateToProps)(TransferStudentsForm));
export default TransferStudentsFormContainer;
