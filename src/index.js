import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    font-family: 'leaguespartan-bold', 'Lato', 'Roboto', 'sans-serif'
  }
  html {
    font-size: 16px;
  } 
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router>
        <App />
    </Router>
  </>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
