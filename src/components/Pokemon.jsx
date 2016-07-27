var React = require('react');
var Name = require('./Name.jsx');
var Image = require('./Image.jsx');

var Pokemon = React.createClass({
	render: function() {
		return (
			<div className="panel panel-primary">
				<div className="panel-body">	
					<Name name="Onix" />

				</div>
			</div>
		);
	}	
});


module.exports = Pokemon;
