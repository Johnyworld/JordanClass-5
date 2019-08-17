import React, { Component } from 'react';
import ColorList from '../components/ColorList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as colorListActions from '../store/modules/colorList';
import * as counterActions from '../store/modules/counter';

class ColorListContainer extends Component {
	render() {
		const { input, list, ColorListActions, CounterActions } = this.props;

		return (
			<div>
				<ColorList
					input={input}
					list={list}
					ColorListActions={ColorListActions}
					CounterActions={CounterActions}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ colorList: { input, list } }) => ({
	input,
	list
});

const mapDispatchToProps = dispatch => ({
	ColorListActions: bindActionCreators(colorListActions, dispatch),
	CounterActions: bindActionCreators(counterActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ColorListContainer);
