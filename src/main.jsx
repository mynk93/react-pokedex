var React = require('react');
var ReactDOM = require('react-dom');
var Pokemon = require('./components/Pokemon.jsx');


const list = document.getElementById('main');
ReactDOM.render(<Pokemon />, list);