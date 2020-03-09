import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Redux imports
import { createStore } from 'redux';
import rootReducer from './store/modules';
import { Provider } from 'react-redux'

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
