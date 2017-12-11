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

export const updateStudent = (student, students) => {
  return dispatch => {
    return Promise.all([axios.get(`/api/campuses/${student.campusId}`), axios.put(`/api/students/${student.id}`, student)])
      .then(([campus, student]) => [campus.data, student.data])
      .then(([campus, student]) => {
        const newStudent = {...student, campus};
        students = students.map(student => {
          return student.id === newStudent.id ? newStudent : student;
        });
        dispatch(getStudents(students));
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const removeStudent = (studentId, students) => {
  return dispatch => {
    return axios.delete(`/api/students/${studentId}`)
      .then(dispatch(getStudents(students.filter(student => student.id !== studentId))))
      .catch(error => {
        console.error(error);
      });
  };
};

export const postStudent = (student) => {
  return dispatch => {
    //attach campus to student when adding to state.
    return Promise.all([axios.get(`/api/campuses/${student.campusId}`), axios.post('/api/students/', student)])
      .then(([campus, student]) => [campus.data, student.data])
      .then(([campus, student]) => {
        student.campus = campus;
        return dispatch(getStudent(student));
      });
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
