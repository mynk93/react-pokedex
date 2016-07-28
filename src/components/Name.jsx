var React = require('react');

var Name = React.createClass({
	render: function() {
		return (
			<div>
				<h3>{this.props.value}</h3>
				<h6>{'Pokemon #' + this.props.index}</h6>
			</div>
		);
	}
});

module.exports = Name;