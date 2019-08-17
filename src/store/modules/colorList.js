import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'colorList/CHANGE_INPUT';
const INSERT = 'colorList/INSERT';
const UPDATE = 'colorList/UPDATE';
const REMOVE = 'colorList/REMOVE';

let id = 1;

export const changeInput = createAction(CHANGE_INPUT, color => color);
export const insert = createAction(INSERT, color => ({ color, id: id++ }));
export const update = createAction(UPDATE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
	input: '',
	list: []
};

export default handleActions(
	{
		[CHANGE_INPUT]: (state, action) => ({
			...state,
			input: action.payload
		}),
		[INSERT]: (state, action) => ({
			...state,
			list: state.list.concat({
				id: action.payload.id,
				color: action.payload.color
			})
		}),
		[UPDATE]: (state, action) => ({
			...state,
			list: state.list.map(color => {
				if (color.id === action.payload) {
					return {
						...color,
						color: 'black'
					};
				} else return color;
			})
		}),
		[REMOVE]: (state, action) => ({
			...state,
			list: state.list.filter(color => color.id !== action.payload)
		})
	},
	initialState
);
