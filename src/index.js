import React from 'react';
import ReactDOM from 'react-dom';
import { Estudiante } from './components/Estudiante';
import { Provider } from 'react-redux';
import { store } from './store/store';


ReactDOM.render(
  <Provider store={store}>
    <Estudiante />
  </Provider>,
  document.getElementById('root')
);
