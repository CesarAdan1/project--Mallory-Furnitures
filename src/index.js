import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';



ReactDOM.render(
  <HashRouter>
  <I18nextProvider i18n={ i18n }>
    <App />
  </I18nextProvider>
  </ HashRouter>
  , document.getElementById('root')
  );


