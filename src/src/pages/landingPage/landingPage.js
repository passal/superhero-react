import React from 'react';
import {Jumbotron as Jumbo, Container, Button} from 'react-bootstrap';
import styled from 'styled-components';
import homeImage from '../../images/vegetables-stall-868110.jpg';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


const Styles = styled.div`
  .jumbo {
    background: url(${homeImage}) no-repeat fixed bottom;
    height: 0;
    padding-bottom: 56.25%;
    box-sizing: border-box;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -2;
    background-position: 50% 50%; 
    -webkit-background-size: cover; 
    -moz-background-size: cover; 
    -o-background-size: cover; 
    background-size: cover;
    color: #efefef;
    position: absolute;
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
  .content {
    margin-top: 30px;
    margin-left: 150px;
    padding-right: 300px;
    z-index: 0;
   }
  .innerContent {
    padding-right: 100px;
    z-index: 1;
  }
  .h1 {
    font-size: 55px;
  }
  .itemIcon{
    width:55px;
    height:55px;
  }
  .button{
    background-color: #313746;
    color: #fff;
    font-size: 25px;
    z-index: 100;
  }
`;

export const LandingPage = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container className="content">
                <h1 className="h1"><EmojiPeopleIcon className="itemIcon"/>SUPER-HERO</h1>
                <br/>
                <h1 className="h1">Find the cheapest shopping cart!</h1>
                <Container className="innerContent">
                    <h3>Divide your groceries between several stores in your selected area.
                        Upload receipts, and fill their information to earn credits</h3>
                </Container>
                <br/>
                <Button size="large" variant="contained" href="/signUp" className="button">
                    Sign up for free
                </Button>
            </Container>
        </Jumbo>
    </Styles>
)
