/* combineReducers is not currently used, but eventually should be for modular code :D */
import { reducer as formReducer } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import { routerReducer } from 'react-router-redux';
import localForage from 'localforage';
import students from './students';
import campuses from './campuses';
import campus from './campus';
import student from './student';
import persist from './persist';

const config = {
  key: 'root',
  storage: localForage
};


export default persistCombineReducers(config, {
  persist,
  student,
  campus,
  students,
  campuses,
  form: formReducer,
  routing: routerReducer
});
