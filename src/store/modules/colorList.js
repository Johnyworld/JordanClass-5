import { createAction, handleActions } from 'redux-actions';
/** 
 * createAction은 액션을 좀 더 편하게 작성하게 해준다. 
 * */

// Action
const CHANGE_INPUT = 'colorList/CHANGE_INPUT';
const INSERT = 'colorList/INSERT';
const UPDATE = 'colorList/UPDATE';
const REMOVE = 'colorList/REMOVE';

// Action Creator
let id = 1;

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const insert = createAction(INSERT, color => ({ color: color, id: id++ }));
export const update = createAction(UPDATE, id => id);
export const remove = createAction(REMOVE, id => id);

const initState = {
    input: '',
    list: [],
    color: '#bfcd7e',
}

export default handleActions({
    [CHANGE_INPUT]: (state, action) => ({
        ...state,
        input: action.payload
    }),
    [INSERT]: (state, action) => ({
        ...state,
        list: [ ...state.list, action.payload ]
    }),
    [REMOVE]: (state, action) => ({
        ...state,
        list: state.list.filter(item=> item.id !== action.payload)
    })
}, initState);
