import {connect} from 'react-redux';
import Student from './Student';

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

const StudentContainer = connect(mapStateToProps)(Student);
export default StudentContainer;
