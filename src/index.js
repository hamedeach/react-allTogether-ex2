import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import ChatApp from './components/chatApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChatApp></ChatApp>, document.getElementById('root'));
registerServiceWorker();
