var React = require('react');

var Name = React.createClass({
	render: function() {
		return (
			<h5 src={this.props.name}></h5>
		);
	}
});

module.exports = Name;