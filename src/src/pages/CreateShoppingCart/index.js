import React from 'react';
import Products from "../insertReceipt/components/Products";
import {withStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import axios from 'axios';

class CreateShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxSplitAmount: 0,
            maximalDistanceFromLocation: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeStores = this.handleChangeStores(this);
    }

    handleChange(arg) {
        return (e) => {
            this.setState({
                [arg]: e.target.value,
            })
        }
    }

    handleChangeStores(e) {
        if (this.state.shops.includes(e.target.name)) {
            this.setState({
                shops: this.state.shops.slice(this.state.shops.indexOf(e.target.name), 1)
            });
        }
    };

    // handleSubmit() {
    //     const uid = this.props.currentUser.id;
    //     let result = {
    //         "basket": {},
    //         "shopPrice": {},
    //         "price": 0
    //     };
    //     let shopsId = [];
    //     mapShopsToId(this.state.shops, shopsId);
    //     let productsId = {};
    //     mapProductToId(this.products, productsId);
    //     axios.post(urlBase + "/getBasket", {
    //         "maxSplits": this.state.maxSplitAmount,
    //         "shops": shopsId,
    //         "products": productsId
    //     },{
    //         headers:{
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         }
    //     }).then( (response) => {
    //         payCreds(uid);
    //         mapBasketResultToName(response.data, result);
    //         console.log(result);
    //     });
    // }

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
                                    <Form.Control onChange={this.handleChange('maxSplitAmount') } />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={classes.input} controlId="formHorizontalPassword">
                                <Form.Label column sm={5} className={classes.font}>
                                    Maximal Distance From Location
                                </Form.Label>
                                <Col sm={6}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">Km</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            aria-describedby="inputGroupPrepend"
                                            onChange={this.handleChange("maximalDistanceFromLocation") }
                                        />
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formGridState">
                                <Form.Label as="legend" column sm={5} className={classes.font}>Filter by Store</Form.Label>
                                <Col sm={6} className={classes.checkBox}>
                                    {["SuperYoda",
                                    "Shufersal Ramat Aviv",
                                    "SuperYoda Tel-Aviv",
                                    "SuperYoda East Tel-Aviv",
                                    "Shufersal Ramat-Gan",
                                    "SuperYoda South",
                                    "Rami Levy TLV Center"].map((shop) => (
                                        <Row>
                                            <Form.Check as ='input' type="checkbox" name={shop} onChange={this.handleChangeStores} label={shop} />
                                        </Row>
                                    ))}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 0}} className={classes.buttonDiv}>
                                    <Button className={classes.button} onClick={this.handleSubmit} type="submit">Find The Cheapest Shopping Cart</Button>
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
