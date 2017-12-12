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

export const updateStudent = (student, campuses, students) => {
  //when updating a student, need to update his/her campus as well.
  return dispatch => {
    return Promise.all([axios.get(`/api/campuses/${student.campusId}`), axios.put(`/api/students/${student.id}`, student)])
      .then(([campus, student]) => [campus.data, student.data])
      .then(([campus, student]) => {
        const newStudent = {...student, campus, campusId: campus.id};
        const newCampus = students.map(student => student.id === newStudent.id ? newStudent : student);
        campuses = campuses.map(campus => campus.id === newCampus.id ? newCampus : campus);
        students = students.map(student => student.id === newStudent.id ? newStudent : student);
        dispatch(getStudents(students));
      })
      .catch(error => {
        console.error(error);
      });
  };
};

//when deleting a student, remove student from all students, and remove student from his/her campus.
export const removeStudent = (student, students) => {
  const studentId = student.id;
  return dispatch => {
    return axios.delete(`/api/students/${studentId}`)
      .then(() => {
        dispatch(getStudents(students.filter(student => student.id !== studentId)))
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const postStudent = (student) => {
  return dispatch => {
    //attach campus to student when adding to state, add student to campus, and update all campuses.
    return Promise.all([axios.get(`/api/campuses/${student.campusId}`), axios.post('/api/students/', student)])
      .then(([campus, student]) => [campus.data, student.data])
      .then(([campus, student]) => {
        const newStudent = {...student, campus};
        dispatch(getStudent(newStudent));
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
