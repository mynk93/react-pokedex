var React = require('react');

var Image = React.createClass({
	
	render: function() {
		var imgStyle = {
			margin: '0 auto'
		}
		return (
			<div>
				<img className='img-responsive' style={imgStyle} src={this.props.imgSrc}></img>
			</div>
		);
	}
});

module.exports = Image;