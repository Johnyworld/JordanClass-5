import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
	render() {
		return (
			<div className="Counter">
				<h1>0</h1>
				<div className="btn-wrapper">
					<button>+</button>
					<button>-</button>
				</div>
			</div>
		);
	}
}

export default Counter;
