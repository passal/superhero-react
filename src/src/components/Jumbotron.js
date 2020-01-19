import React from 'react';
import {Jumbotron as Jumbo, Container, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../images/vegetables-stall-868110.jpg';
import logo from "../images/super-hero-logo.png";

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = (props) => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            {!props.currentUser.id &&
            <Container>
                <h1>Welcome</h1>
                <h5>Build the Cheapest shopping cart</h5>
            </Container>
            }
            {!!props.currentUser.id &&
            <Container>
                <h1>Welcome {props.currentUser.username}</h1>
                <h5>Your credits balance: {JSON.parse(localStorage.getItem('points'))?? 2}</h5>
            </Container>
            }
        </Jumbo>
    </Styles>
)