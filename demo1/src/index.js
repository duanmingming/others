import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo1 from './saga/store'
import registerServiceWorker from './registerServiceWorker';
import Test from './Test';

ReactDOM.render(<Test />, document.getElementById('root'));
registerServiceWorker();