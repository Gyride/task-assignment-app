import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TaskPage from './TaskPage'

ReactDOM.render(<TaskPage/>, document.getElementById('root'));
registerServiceWorker();
