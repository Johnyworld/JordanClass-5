import React, { Component } from 'react';
import './ColorSquare.css';

const colors = ['#bfcd7e', '#7E57C2', '#EA80FC', '#00BCD4'];

class Color extends Component {
	render() {
		const { color, active, onClick } = this.props;

		const style = {
			backgroundColor: color
		};

		return (
			<div
				className={`Color ${active ? 'active' : ''}`}
				style={style}
				onClick={onClick}
			/>
		);
	}
}

class ColorSquare extends Component {
	render() {
		return (
			<div className="ColorSquare">
				{colors.map(color => {
					return <Color key={color} color={color} />;
				})}
			</div>
		);
	}
}

export default ColorSquare;
