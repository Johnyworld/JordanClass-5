const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const CHANGE_COLOR = 'counter/CHANGE_COLOR';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const changeColor = color => ({ type: CHANGE_COLOR, color });

const initialState = {
	number: 0,
	color: '#bfcd7e'
};

export default function counter(state = initialState, action) {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				number: state.number + 1
			};
		case DECREMENT:
			return {
				...state,
				number: state.number - 1
			};
		case CHANGE_COLOR:
			return {
				...state,
				color: action.color
			};
		default:
			return state;
	}
}
