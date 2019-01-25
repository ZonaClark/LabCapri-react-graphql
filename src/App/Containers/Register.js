import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

import Loading from '../Components/Loading';

const CREATE_USER = gql`
mutation($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password){
        token
    }
}
`;

class Register extends Component {
    state = {
      username: '',
      email: '',
      password: '',
    };

    onChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    render() {
      const { username, email, password } = this.state;
      const { onChange } = this;
      return (
        <Grid centered columns={2}>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                    Login
                </Header>
                <Segment>
                    <Form size="large">
                        <Form.Input
                            onChange={onChange}
                            value={username}
                            name="username"
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="Username"
                        />
                        <Form.Input
                            onChange={onChange}
                            value={email}
                            name="email"
                            fluid
                            icon="mail"
                            iconPosition="left"
                            placeholder="Email"
                        />
                        <Form.Input
                            onChange={onChange}
                            value={password}
                            name="password"
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                        />

                        <Mutation
                            mutation={CREATE_USER}
                            variables={{ username, email, password }}
                            errorPolicy="all"
                        >
                        {(signUp, { error, data, loading }) => {
                          if (loading) return <Loading />;
                          return (
                            <Button
                                onClick={signUp}
                                color="blue"
                                fluid size="large">
                                Sign Up
                            </Button>
                          );
                        }}
                        </Mutation>
                    </Form>
                </Segment>
                <Message>
                    Already registered? <NavLink to="/login">Log In</NavLink>
                </Message>
            </Grid.Column>
        </Grid>
      );
    }
}

export default Register;
