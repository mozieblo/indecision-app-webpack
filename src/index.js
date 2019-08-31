import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import isSenior, { isAdult, canDrink } from './person.js'; // test

console.log(isAdult(25));
console.log(canDrink(13));
console.log(isSenior(60));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


