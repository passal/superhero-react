import {Jumbotron, Container, Row, Col, Image,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Home.css'

import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h2>welcome to home </h2>
                        <p>this is how to build a website</p>
                    </Jumbotron>
                    <Link to={"/about"}>
                        <Button bsStyle={"primary"}> About </Button>
                    </Link>


                </Container>
            </div>
        );
    }
}

export default Home;