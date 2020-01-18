import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import logo from '../images/super-hero-logo.png';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Super-Hero</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link to="/userMenu">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/about">About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/upload">Upload Receipt</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/insert-Receipt">Fill Receipt</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/create-shopping-cart'> Build a Cart</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/signIn'><b>Log In</b></Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles >
)

