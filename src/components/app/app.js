import React, { Component } from 'react';

import SwapiService from '../../service/swapi-service';
import './app.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
  };

  render() {

    return (
          <Router>
            <div>

            </div>
          </Router>
    );
  }
}
