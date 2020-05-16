import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';

const reactApp = document.createElement('div');
reactApp.classList.add('react-app');
document.body.appendChild(reactApp);

ReactDOM.render(<App />, reactApp);
