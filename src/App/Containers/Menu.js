import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import logo from '../../Image/logo.png';

export default () => (
    <Menu>
        <Container>
            <Menu.Item as={NavLink} to="/" header>
                <Image
                    size="mini"
                    src={logo}
                />
            </Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item as={NavLink} to="/login" name="login">
                    Login/Register
                </Menu.Item>
                <Menu.Item as={NavLink} to="/profile" name="profile">
                    Profile
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
);
