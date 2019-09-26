import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {cars} from './demo';

ReactDOM.render(<App cars={cars}/>, document.getElementById('root'));
