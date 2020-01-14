import React from 'react';
import Products from "../insertReceipt/components/Products";
import {withStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

class CreateShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(arg) {
        return (e) => {
            this.setState({
                [arg]: e.target.value
            })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" >
                <CssBaseline/>
                <div className={classes.paper}>
                    <h1 className={classes.headline}>Create Shopping Cart</h1>
                    <div className={classes.body}>
                    <div  className={classes.img}>
                        <Form>
                            <Form.Group as={Row}  className={classes.input} controlId="formHorizontalEmail">
                                <Form.Label column sm={5} className={classes.font}>
                                    Maximal Splits Amount
                                </Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="email"  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={classes.input} controlId="formHorizontalPassword">
                                <Form.Label column sm={5} className={classes.font}>
                                    Maximal Distance From Location
                                </Form.Label>
                                <Col sm={6}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">Kg</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            aria-describedby="inputGroupPrepend"
                                        />
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formGridState">
                                <Form.Label as="legend" column sm={5} className={classes.font}>Filter by Store</Form.Label>
                                <Col sm={6} className={classes.checkBox}>
                                    <Row>
                                    <Form.Check type="checkbox" label="Rami Levi" />
                                    </Row>
                                    <Row>
                                    <Form.Check type="checkbox" label="Shufersal" />
                                    </Row>
                                    <Row>
                                    <Form.Check type="checkbox" label="Tiv Taam" />
                                    </Row>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 0}} className={classes.buttonDiv}>
                                    <Button className={classes.button} type="submit">Find The Cheapest Shopping Cart</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className={classes.form}>
                        <Products withPrice ={false}/>
                    </div>
                </div>
                </div>
            </Container>
        );
    }
}

export default withStyles(theme => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',

    },
    form: {
        width: 'auto',
        flexGrow:2,
        height:'550px',
        padding:'10px',
        overflow:'scroll',
        border: '1px solid #20639B'
    },
    img:{
        width: 'auto',
        flexGrow:1,
        height:'550px',
        marginRight:'10px',
        marginTop:'10px'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    avatar: {
        height: '260px'
    },
    checkBox:{
        paddingLeft:'30px'
    },
    buttonDiv:{
        paddingTop: '100px',
    },
    button:{
        backgroundColor: '#20639B'
    },
    font:{
        fontWeight: 'bold',
        color:'#20639B',
        lineHeight: 'normal',
        paddingTop: '0px'
    },
    body:{
        display:'flex',
    },
    root:{
        display:'flex',
        flexDirection:'column'
    },
    headline:{
        color:'red',
        paddingBottom:'30px'
    },
    input:{
        paddingBottom: '10px'
    }

}))(CreateShoppingCart);
