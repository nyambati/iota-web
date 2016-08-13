import React from 'react';
import ReactDOM from 'react-dom';
import { Router, HashHistory } from 'react-router';
import routes from './config/routes';


ReactDOM.render(<Router routes={routes} history={HashHistory}/>, document.getElementById('app'));