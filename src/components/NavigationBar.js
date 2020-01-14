import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

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
                        <Nav.Link>
                            <Link to="/Home">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/upload">Upload Receipt</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/insert-Receipt">Fill Receipt</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/create-shopping-cart'> Build a Cart</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles >
)

