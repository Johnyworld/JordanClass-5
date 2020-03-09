import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { increment, decrement } from '../store/modules/counter';
import Counter from '../components/Counter';

// 퉁쳐서 가져오고 싶을 때는 bindActionCreators 로 묶어줄 수 있다.
import * as CounterActions from '../store/modules/counter';
import { bindActionCreators } from 'redux';

class CounterContainer extends Component {
    render() {
        const { number, color, counterActions } = this.props;
        const { increment, decrement } = counterActions;

        return (
            <Counter
                counter={number}
                color={color}
                increment={increment}
                decrement={decrement}
            />
        )
    }
};

const mapStateToProps = state => ({
    number: state.counter.number,
    color: state.counter.color
});

/** 아래 2개의 mapDispatchToProps는 같은 내용이다. */
// const mapDispatchToProps = dispatch => ({
//     increment: number => dispatch(CounterActions.increment(number)),
//     decrement: number => dispatch(CounterActions.decrement(number))
// });

// const mapDispatchToProps = {
//     increment,
//     decrement
// }

/** bindActionCreators 로 하나로 묶어줄 수 있다.*/
const mapDispatchToProps = dispatch => ({
    counterActions: bindActionCreators( CounterActions, dispatch )
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);