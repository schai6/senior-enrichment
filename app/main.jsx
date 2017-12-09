'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import Root from './components/Root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <Root />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
);
