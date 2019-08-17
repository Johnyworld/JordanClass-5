import React, { Component } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends Component {
	render() {
		const { increment, decrement, number, color } = this.props;

		return (
			<div>
				<Counter
					onIncrement={increment}
					onDecrement={decrement}
					number={number}
					color={color}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ counter: { number, color } }) => ({
	number,
	color
});

const mapDispatchToProps = dispatch => ({
	increment: () => dispatch(increment()),
	decrement: () => dispatch(decrement())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterContainer);
