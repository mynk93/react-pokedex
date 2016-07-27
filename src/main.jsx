var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');


const list = document.getElementById('ingredients');
ReactDOM.render(<List />, list);