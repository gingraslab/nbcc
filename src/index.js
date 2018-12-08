import React from 'react';
import ReactDOM from 'react-dom';

import { unregister } from './registerServiceWorker';
import Router from './router/router';

import './index.css';

ReactDOM.render(<Router />, document.getElementById('root'));
unregister();
