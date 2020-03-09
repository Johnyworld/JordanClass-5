import React, { Component } from 'react';
import CounterContainer from './containers/CounterContainer';
import ColorListContainer from './containers/ColorListContainer';
import ColorSquareContainer from './containers/ColorSquareContainer';

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
