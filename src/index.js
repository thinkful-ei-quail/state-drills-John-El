import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './state-drills/Helloworld';
import Bomb from './state-drills/Bomb';
import Рулеткапистолет from './state-drills/Рулеткапистолет'

ReactDOM.render(
  <div className='Parent'>
    <Рулеткапистолет />
    </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
