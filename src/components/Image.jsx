var React = require('react');

var Image = React.createClass({
	render: function() {
		return (
			<img src={this.props.imgSrc}></img>
		);
	}
});

module.exports = Image;