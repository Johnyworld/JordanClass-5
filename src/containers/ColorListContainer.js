import React, { Component } from 'react';
import ColorList from '../components/ColorList';
import { connect } from 'react-redux';
import { insert, remove, update, changeInput } from '../store/modules/colorList';
import { changeColor } from '../store/modules/counter';

class ColorListContainer extends Component {
	render() {
		const { input, list, insert, remove, update, changeInput, changeColor } = this.props;

		return (
            <ColorList
                input={input}
                list={list}
                insert={insert}
                remove={remove}
                update={update}
                changeColor={changeColor}
                changeInput={changeInput}
            />
		);
	}
}

const mapStateToProps = state => {
	return ({
        input: state.colorList.input,
        list: state.colorList.list
    })
}

const mapDispatchToProps = dispatch => ({
    insert: color => dispatch( insert(color) ),
    remove: id => dispatch( remove(id) ),
    update: id => dispatch( update(id) ),
    changeInput: value => dispatch( changeInput(value) ),
    changeColor: color => dispatch( changeColor(color) )
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorListContainer);
