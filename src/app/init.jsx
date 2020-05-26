import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { asyncActions } from './slices';
import '../css/App.css';
import store from './lib/store';
import App from './components/App.jsx';


export default () => {
  store.dispatch(asyncActions.fetchTickets());

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};
