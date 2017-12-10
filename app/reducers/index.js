/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import students from './students';
import campuses from './campuses';
import campus from './campus';
import student from './student';

export default combineReducers({
  student,
  campus,
  students,
  campuses,
  form: formReducer,
});
