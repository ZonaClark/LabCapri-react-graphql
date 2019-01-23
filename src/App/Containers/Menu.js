import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';

import logo from '../../Image/logo.png';

export default () => (
    <Menu>
        <Container>
            <Menu.Item as="a" header>
                <Image
                    size="mini"
                    src={logo}
                />
            </Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item as="a" name="login">
                    Login
                </Menu.Item>

                <Menu.Item as="a" name="login">
                    Sign Up
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
);
