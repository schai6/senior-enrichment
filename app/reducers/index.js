/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import students from './students';

export default combineReducers({
  students,
  form: formReducer,
});
