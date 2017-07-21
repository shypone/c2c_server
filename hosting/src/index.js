import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Config/routes';
import { BrowserRouter } from 'react-router-dom';
//import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter><Routes /></BrowserRouter>
  , document.getElementById('root')
);

