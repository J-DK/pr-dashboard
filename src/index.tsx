import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import * as serviceWorker from './serviceWorker';

import Homepage from './view/Homepage/Homepage';
import {Dashboard} from './view/Dashboard/Dashboard';

ReactDOM.render(
    <Router>
              <div>
                <Route exact path="/" component={Homepage} />
                <Route path="/dashboard" component={Dashboard} />
              </div>
            </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
