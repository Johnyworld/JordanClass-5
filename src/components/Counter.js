import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
	render() {
        const { counter, color, increment, decrement } = this.props;

		const style = { color, fontSize: '30px' }

		return (
			<div className="Counter">
				<h1 style={style}>{counter}</h1>
				<div className="btn-wrapper">
					<button onClick={() => increment(1)}>+</button>
					<button onClick={() => decrement(1)}>-</button>
				</div>
			</div>
		);
	}
}

export default Counter;
