import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import Login from './Containers/Login';
import Profile from './Containers/Profile';
import Menu from './Containers/Menu';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu />
        <Container>
          <Login />
        </Container>
      </Fragment>
    );
  }
}

export default App;
