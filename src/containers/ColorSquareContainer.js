import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../store/modules/counter';
import ColorSquare from '../components/ColorSquare';

class ColorSquareContainer extends Component {
    render() {
        const { color, number, changeColor } = this.props;

        return (
            <ColorSquare
                selected={color}
                number={number}
                changeColor={changeColor}
            />
        )
    }
}

const mapStateToProps = state => ({
    color: state.counter.color,
    number: state.counter.number
})

const mapDispatchToProps = dispatch => ({
    changeColor: color => dispatch(changeColor(color))
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorSquareContainer);