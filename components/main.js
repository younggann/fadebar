console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import 'babel-polyfill';


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
