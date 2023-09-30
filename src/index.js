import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import { Provider } from 'react-redux';
import store from "./store.js"; // Stelle sicher, dass der Redux-Store importiert wird

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
</Provider>,
document.getElementById('root')
);

