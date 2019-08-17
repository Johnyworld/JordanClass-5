import React, { Component } from 'react';
import ColorSquare from '../components/ColorSquare';
import { connect } from 'react-redux';
import { changeColor } from '../store/modules/counter';

class ColorSquareContainer extends Component {
	render() {
		const { number, color, changeColor } = this.props;

		return (
			<div>
				<ColorSquare selected={color} onSelect={changeColor} number={number} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	color: state.counter.color,
	number: state.counter.number
});

const mapDispatchToProps = dispatch => ({
	changeColor: color => dispatch(changeColor(color))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ColorSquareContainer);
