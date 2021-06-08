import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/Montserrat-Regular.ttf';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat-Regular',
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
