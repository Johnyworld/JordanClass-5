import React, { Component } from 'react';
import './ColorList.css';

class ColorList extends Component {
	handleChange = e => {
		const { ColorListActions } = this.props;
		ColorListActions.changeInput(e.target.value);
	};

	handleSubmit = e => {
		e.preventDefault();
		const { CounterActions, ColorListActions, input } = this.props;
		ColorListActions.insert(input);
		CounterActions.changeColor(input);
		ColorListActions.changeInput('');
	};

	handleUpdate = id => {
		const { ColorListActions } = this.props;
		ColorListActions.update(id);
	};

	handleRemove = id => {
		const { ColorListActions } = this.props;
		ColorListActions.remove(id);
	};

	render() {
		const { input, list } = this.props;
		return (
			<div>
				<form className="ColorList" onSubmit={this.handleSubmit}>
					<input
						placeholder="원하는 색을 입력하세요"
						value={input}
						onChange={this.handleChange}
					/>
				</form>
				<ul>
					{list.map(color => {
						return (
							<div
								key={color.id}
								style={{
									backgroundColor: color.color,
									width: '50px',
									height: '50px',
									float: 'left'
								}}
								onClick={() => this.handleUpdate(color.id)}
								onContextMenu={e => {
									e.preventDefault();
									this.handleRemove(color.id);
								}}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default ColorList;
