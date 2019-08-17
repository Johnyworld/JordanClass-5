import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import ColorList from './components/ColorList';
import ColorSquare from './components/ColorSquare';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Counter />
				<ColorSquare />
				<ColorList />
			</div>
		);
	}
}

export default App;
