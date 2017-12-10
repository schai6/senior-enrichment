import { connect } from 'react-redux';
import SingleCampus from '../components/SingleCampus';
import { withRouter } from 'react-router'

const mapStateToProps = (state, ownProps) => {
  const campus = state.campuses.find(campus => campus.id === +ownProps.match.params.id);
  return {
    campus
  };
};

const SingleCampusContainer = withRouter(connect(mapStateToProps)(SingleCampus));
export default SingleCampusContainer;
