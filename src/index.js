import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './App';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Timer name="Vivek"/>, document.getElementById('root'));
registerServiceWorker();
