import axios from 'axios';
export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export const GET_STUDENTS = 'GET_STUDENTS';

export const fetchStudents = () => {
  return dispatch => {
    return axios.get('/api/students')
      .then(students => dispatch(getStudents(students.data)))
      .catch(error => {
        console.error(error);
      });
  };
};

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
};
