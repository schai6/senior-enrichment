import axios from 'axios';
export const FETCH_CAMPUS = 'FETCH_CAMPUS';
export const GET_CURRENT_CAMPUS = 'GET_CURRENT_CAMPUS';

export const fetchCampus = (campusId) => {
  return dispatch => {
    return axios.get('/api/campuses/' + campusId)
      .then(campus => {
        dispatch(getCurrentCampus(campus.data));
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const getCurrentCampus = (campus) => {
  return {
    type: GET_CURRENT_CAMPUS,
    campus
  };
};


export default (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_CAMPUS:
      return action.campus;
    default:
      return state;
  }
};
