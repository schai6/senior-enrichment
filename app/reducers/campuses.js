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

//first update campus, update its students to have the proper campusId. Then update all students so that their campusID and campus is the new campus.
export const updateCampus = (campus, campuses, students) => {
  console.log('updateCampus', campus);
  return dispatch => {
    return axios.put(`/api/campuses/${campus.id}`, campus)
      .then(res => res.data)
      .then(updatedCampus => {
        updatedCampus.students.map(student => {
          let campus = {campus: student.campusId !== updatedCampus.id ? student.campusId : campus.id};
          return {...student, campus};
        });
        campuses = campuses.map(campus => campus.id === updatedCampus.id ? updatedCampus : campus);
        dispatch(getCampuses(campuses));
        const studentsIds = students.map(student => student.id);
        const campusStudentsIds = campus.students.map(student => student.id);
        //get campus without students.
        const {campusStudents, ...campus} = updatedCampus;
        console.log('campus', campus);
        //update campus and also campusId.
        campusStudentsIds.map(studentId => {
          return {...students[studentsIds.indexOf(studentId)], campus, campusId: campus.id};
        });
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
