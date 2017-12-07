import axios from 'axios';
export const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
export const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_CAMPUS = 'GET_CAMPUS';

export const fetchCampuses = () => {
  return dispatch => {
    return axios.get('/api/campuses')
      .then(campuses => {
        dispatch(getCampuses(campuses.data));
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const removeCampus = (campusId) => {
  return dispatch => {
    return axios.delete('/api/campuses/' + campusId)
      .then(() => {
        dispatch(fetchCampuses());
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const postCampus = (campus) => {
  return dispatch => {
    return axios.post('/api/campuses/', campus)
    .then(res => res.data)
    .then(campus => dispatch(getCampuses(campus)));
  };
};

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  };
};

export const getCampus = (campus) => {
  return {
    type: GET_CAMPUS,
    campus
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case GET_CAMPUS:
      return [...state, action.campus];
    default:
      return state;
  }
};
