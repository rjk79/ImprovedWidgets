import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/app';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');  
  const names = ['Robbie', 'Russel', 'Rusbie', 'Robsel'];
  ReactDOM.render(<App names={names}/>, root);
})