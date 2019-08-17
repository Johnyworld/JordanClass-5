import React, { Component } from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import ColorSquareContainer from './containers/ColorSquareContainer';
import ColorListContainer from './containers/ColorListContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CounterContainer />
				<ColorSquareContainer />
				<ColorListContainer />
			</div>
		);
	}
}

export default App;
