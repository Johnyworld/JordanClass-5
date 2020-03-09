import React, { Component } from 'react';
import './ColorList.css';

class ColorList extends Component {

	handleSubmit = e => {
		e.preventDefault();
		const { insert, changeColor } = this.props;
		const color = this.props.input;
		insert(color);
		changeColor(color);
		this.props.changeInput('');
    }

	handleChange = e => {
		this.props.changeInput(e.target.value);
	}

	handleUpdate = color => {
		this.props.changeColor(color);
	}

	handleRemove = id => e => {
		e.preventDefault();
		this.props.remove(id)
	}

	render() {
		const { list, input } = this.props;

		return (
			<div>
				<form className="ColorList" onSubmit={this.handleSubmit}>
					<input value={input} onChange={this.handleChange} placeholder="원하는 색을 입력하세요" />
				</form>
				{ list && list[0] && list.map(item=> (
					<div  
						onClick={() => this.handleUpdate(item.color)}
						onContextMenu={this.handleRemove(item.id)}
						key={item.id}
						style={{ backgroundColor: item.color }}
						className="ColorListItem" 
					/>
				))}
			</div>
		);
	}
}

export default ColorList;
