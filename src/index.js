import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TaskManager from './TaskManager'

ReactDOM.render(<TaskManager/>, document.getElementById('root'));
registerServiceWorker();