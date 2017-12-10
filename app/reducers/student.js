export const GET_CURRENT_STUDENT = 'GET_CURRENT_STUDENT';

export const getCurrentStudent = (student) => {
  return {
    type: GET_CURRENT_STUDENT,
    student
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_STUDENT:
      return action.student;
    default:
      return state;
  }
};
