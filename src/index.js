import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Router } from 'react-router-dom';
import { store, rrfProps } from './redux/store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import history from './others/history';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6772e5'
    },
    secondary: {
      main: '#FD5665'
    },
    success: {
      main: '#219735'
    }
  },
  typography: {
    fontFamily: 'Lexend Deca'
  }
});

ReactDOM.render(
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
      </Provider>
    </ThemeProvider>
  </Router>,

  document.getElementById('root')
);

serviceWorker.register();
