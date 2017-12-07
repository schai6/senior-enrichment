import axios from 'axios';
export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const GET_STUDENTS = 'GET_STUDENTS';
export const GET_STUDENT = 'GET_STUDENT';

export const fetchStudents = () => {
  return dispatch => {
    return axios.get('/api/students')
      .then(students => {
        dispatch(getStudents(students.data));
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const removeStudent = (studentId) => {
  return dispatch => {
    return axios.delete('/api/students/' + studentId)
      .then(() => {
        dispatch(fetchStudents());
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const postStudent = (student) => {
  return dispatch => {
    return axios.post('/api/students/', student)
    .then(res => res.data)
    .then(student => dispatch(getStudent(student)));
  };
};

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  };
};

export const getStudent = (student) => {
  return {
    type: GET_STUDENT,
    student
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case GET_STUDENT:
      return [...state, action.student];
    default:
      return state;
  }
};
