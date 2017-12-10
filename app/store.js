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
import {
  persistStore
} from 'redux-persist';

const enhancer = composeWithDevTools({
  maxAge: 10
})(
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      predicate: (getState, action) => {
        return !action.type.includes('@@redux-form') && action.type !== "persist/PERSIST" && action.type !== "persist/REHYDRATE";
      }
    })
  )
);

let store = createStore(reducers, enhancer);
let persistor = persistStore(store);

export {
  store,
  persistor
};

export * from './reducers/students';
export * from './reducers/campuses';
export * from './reducers/campus';
export * from './reducers/student';
