import { connect } from 'react-redux';
import SingleCampus from '../components/SingleCampus';

const mapStateToProps = (state) => {
  return {
    campus: state.campus
  };
};

const SingleCampusContainer = connect(mapStateToProps)(SingleCampus);
export default SingleCampusContainer;
