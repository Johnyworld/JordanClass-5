// Actions
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const CHANGE_COLOR = 'counter/CHANGE_COLOR'

// Action Creators
export const increment = (number) => ({ type: INCREMENT, number: number });
export const decrement = (number) => ({ type: DECREMENT, number: number });
export const changeColor = (color) => ({ type: CHANGE_COLOR, color: color });

// State
const initState = {
    number: 0,
    color: '#bfcd7e',
}

// Reducer
export default  (state = initState, action) => {
    switch(action.type) {
        case INCREMENT: 
            return {
                ...state,
                number: state.number + action.number
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - action.number
            }
        case CHANGE_COLOR:
            return {
                ...state,
                color: action.color
            }
        default: 
            return state;
    }
}