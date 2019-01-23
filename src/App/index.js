import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Containers/Home';
import Login from './Containers/Login';
import Error from './Containers/Error';
import Menu from './Containers/Menu';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
