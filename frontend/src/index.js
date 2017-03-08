import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducer from './reducers'
import dataService from './services/dataservice'


import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

let store = createStore(reducer, {}, applyMiddleware(dataService));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch({type: 'GET_QUESTION_DATA'});
