import { combineReducers } from 'redux';
import counter from './counter';
import colorList from './colorList';

export default combineReducers({
    counter, colorList
})
