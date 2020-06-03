import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

// W aplikacji wykorzystany został TypeScript
// ponieważ JavaScript nie posiada kotrolii typów

// ReactDom przyjmuje korzeń naszej aplikacji
// wstrzykuje i wyrenderowany widok w div 
// o elemencie z id root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
