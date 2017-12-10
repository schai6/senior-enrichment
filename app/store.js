import {
  createStore,
  applyMiddleware
} from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import {
  createLogger
} from 'redux-logger';
import {
  composeWithDevTools
} from 'redux-devtools-extension';


export default createStore(reducers, composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger()
)));

export * from './reducers/students';
export * from './reducers/campuses';
export * from './reducers/campus';
export * from './reducers/student';
