import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateProps from './stateProps';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <StateProps name="Aditya" email="adityakale3@gmail.com" count="0"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
