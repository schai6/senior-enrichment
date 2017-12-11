/* combineReducers is not currently used, but eventually should be for modular code :D */
import { reducer as formReducer } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import { routerReducer } from 'react-router-redux';
import {
  createBlacklistFilter
} from 'redux-persist-transform-filter';
import localForage from 'localforage';
import students from './students';
import campuses from './campuses';
import persist from './persist';
import student from './student';

const saveSubsetBlacklistFilter = createBlacklistFilter(
  persist, ['form']
);

const config = {
  key: 'root',
  storage: localForage,
  blacklist: ['form'],
  transforms: [
    saveSubsetBlacklistFilter
  ]
};


export default persistCombineReducers(config, {
  persist,
  students,
  campuses,
  student,
  form: formReducer,
  routing: routerReducer
});
