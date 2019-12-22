import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import LeagueSpartanBold from './assets/fonts/LeagueSpartan-Bold.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: LeagueSpartan-Bold;
    src: url('${LeagueSpartanBold}') format('opentype');
  }
  * {
    margin: 0px;
    padding: 0px;
    font-family: Lato;
    box-sizing: border-box;
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
