import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

const Login = () => (
    <Grid centered columns={2}>
        <Grid.Column>
            <Header as="h2" textAlign="center">
                Login
            </Header>
            <Segment>
                <Form size="large">
                    <Form.Input
                        fluid
                        icon="mail"
                        iconPosition="left"
                        placeholder="Email address"
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                    />

                    <Button color="blue" fluid size="large">
                        Login
                    </Button>
                </Form>
            </Segment>
            <Message>
                Not registered yet? <NavLink to="/register">Sign Up</NavLink>
            </Message>
        </Grid.Column>
    </Grid>
);

export default Login;
