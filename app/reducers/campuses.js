import axios from 'axios';
export const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
export const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const GET_CAMPUS = 'GET_CAMPUS';
import getStudents from './students';

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

//update the campus, update campuses state, then update the campus on every single student, then update students state.
export const updateCampus = (campus, selectedStudents, campuses, students) => {
  return dispatch => {
    return axios.put(`/api/campuses/${campus.id}`, campus)
      .then(res => res.data)
      .then(updatedCampus => {
        campuses = campuses.map(campus => campus.id === updatedCampus.id ? updatedCampus : campus);
        dispatch(getCampuses(campuses));
        let selectedStudentsIds = [];
        selectedStudents = selectedStudents.map(student => {
          selectedStudentsIds.push(student.id);
          return {...student, campus};
        });
        students = students.map(student => {
          let index = selectedStudentsIds.indexOf(student);
          return index > -1 ? selectedStudents[index] : student;
        });
        dispatch(getStudents(students));
      })
      .catch(error => {
        console.error(error);
      });
  };
};

//only remove a campus if it has no students, so ez.
export const removeCampus = (campusId, campuses) => {
  return dispatch => {
    return axios.delete('/api/campuses/' + campusId)
      .then(dispatch(getCampuses(campuses.filter(campus => campus.id !== campusId))))
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
