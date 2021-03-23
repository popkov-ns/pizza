import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import './scss/app.scss';
import App from './App';

store.dispatch({
  type: 'SET_SORT_BY',
  payload: 'price'
})

ReactDOM.render(
  <React.StrictMode>
    <Route>
      <Provider store={store}>
        <App />
      </Provider>
    </Route>
  </React.StrictMode>,
  document.getElementById('root')
);
