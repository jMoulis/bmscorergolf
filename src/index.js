import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'components/ErrorBoundary';
import styles from 'styles/GlobalStyles';
import store from 'store';
import { App } from 'components/App';
import { ThemeProvider } from 'emotion-theming';
import { theme } from 'styles/theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Global styles={styles} />
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById('root'),
);

serviceWorker.unregister();
