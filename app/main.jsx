'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './components/Root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor, store } from './store';

render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}>
      <MuiThemeProvider>
        <Router>
          <Root />
        </Router>
      </MuiThemeProvider>
    </PersistGate >
  </Provider>,
  document.getElementById('main')
);
