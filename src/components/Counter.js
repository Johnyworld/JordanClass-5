import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
	render() {
		const { onIncrement, onDecrement, number, color } = this.props;

		const style = {
			color
		};

		return (
			<div className="Counter">
				<h1 style={style}>{number}</h1>
				<div className="btn-wrapper">
					<button onClick={onIncrement}>+</button>
					<button onClick={onDecrement}>-</button>
				</div>
			</div>
		);
	}
}

export default Counter;
