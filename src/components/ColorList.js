import React, { Component } from 'react';
import './ColorList.css';

class ColorList extends Component {
	render() {
		return (
			<div>
				<form className="ColorList">
					<input placeholder="원하는 색을 입력하세요" />
				</form>
			</div>
		);
	}
}

export default ColorList;
