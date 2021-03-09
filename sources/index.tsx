// @ts-nocheck

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from '../sources/storage/reducer';
import App from './components/app';

const reactApp = document.createElement('div');
reactApp.classList.add('react-app');
document.body.appendChild(reactApp);

const store = createStore(reducer /*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    reactApp
);
