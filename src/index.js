import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/rootReducer';
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



ReactDOM.render(
  <Provider store = {store}>
    <App />
    <ToastContainer />
  </Provider>,
  document.getElementById('root')
);

