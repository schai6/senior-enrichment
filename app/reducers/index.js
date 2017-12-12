/* combineReducers is not currently used, but eventually should be for modular code :D */
import { reducer as formReducer } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import { routerReducer } from 'react-router-redux';
import localForage from 'localforage';
import students from './students';
import campuses from './campuses';
import student from './student';

const config = {
  key: 'root',
  storage: localForage,
};


export default persistCombineReducers(config, {
  students,
  campuses,
  student,
  form: formReducer,
  routing: routerReducer
});
