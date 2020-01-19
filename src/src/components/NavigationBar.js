import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

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

const handleClick = () => {
    this.props.logOut()
    console.log("here")
}

export const NavigationBar = (props) => (
    <Styles>
        {props.currentUser==null &&
        <Navbar expand="lg">
            <Navbar.Brand href="/"><EmojiPeopleIcon className="itemIcon"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/signIn'>Log In</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        }
        {props.currentUser!=null &&
        <Navbar expand="lg">
            <Navbar.Brand href="/"><EmojiPeopleIcon className="itemIcon"/>Super-Hero</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/userMenu">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/upload">Upload Receipt</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/insert-receipt">Fill Receipt</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/create-shopping-cart'> Build a Cart</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/signIn' onClick={() => props.logOut}><b>Log Out</b></Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        }
    </Styles >
)
