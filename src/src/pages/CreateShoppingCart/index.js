import React from 'react';
import Products from "../insertReceipt/components/Products";
import {withStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import MultipleSelect from "./MultipleSelect";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";
import axios from 'axios';
import { PRODUCT_TO_ID, SHOP_TO_ID, ZONE_TO_ID, ZONE_TO_STORES } from '../../constants';
import Copyright from "../../components/Copyright";
import Box from "@material-ui/core/Box";
const urlBase = "http://localhost:5000";


function mapProductToId(products, productsId){
    let id;
    for(let prod in products){
        if(products.hasOwnProperty(prod)){
            id = PRODUCT_TO_ID[prod];
            productsId[id] = products[prod];
        }
    }
}

const payCreds = (id) => {
    axios.post(urlBase + "/payCredits", {
        id: id
    }, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((response) => {
        console.log(response.status);
    }).catch((error) => {
        console.log((error.response.data)); //this will return a message from the server on the error
    })
};

const getBestBasket = (shops = [], products, maxSplits, uid) => {
    const shopsId = shops.map((shop) => SHOP_TO_ID[shop]);
    //const productsId = products.map(({ name }) => PRODUCT_TO_ID[name]);
    let productsId = {};
    mapProductToId(products, productsId);
    return axios.post(urlBase + "/getBasket", {
        maxSplits: maxSplits,
        shops: shopsId,
        products: productsId
    },{
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then( (response) => {
        payCreds(uid);
    });
};

class CreateShoppingCart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            maxSplitAmount: 0,
            area:"",
            StoreName:[],
            isOpen: false,
            products:[],
            shops: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeStores = this.handleChangeStores.bind(this);
        this.findCart = this.findCart.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(arg) {
        return (e) => {
            this.setState({
                [arg]: e.target.value,
            })
        }
    }

     handleSubmit = async (products) =>
        this.setState({
            products,
        }, async () => this.findCart());

    handleChangeStores = (event)=> {
        this.setState({ shops: event.target.value });
    };

    serializeProducts(products) {
        return products.reduce((acc, product) => ({
            ...acc,
            [product.name]: product.qty
        }), {})
    }

    validateBasket = () => {
        const { products, shops } = this.state;
        return (
            products.reduce((val, item) => {
                return val || item.name === null || item.qty === null
            }, false) || shops.length === 0
        );
    }

    async findCart() {
        const { currentUser, setCurrentUser } = this.props;
        const { maxSplitAmount, products, shops } = this.state;
        const validationErr = this.validateBasket();
        if (validationErr) {
            window.alert('Missing fields, make sure you choose shops and have no empty products')
        } else {
            await getBestBasket(shops, this.serializeProducts(products), maxSplitAmount, currentUser.id);
            setCurrentUser({
                ...currentUser,
                credits: currentUser.credits - 2
            });

            window.location = '/#cartResult';
        }
    };

    handleClose = () => {
        //this.setState( {isOpen: false});
    };

    render() {
        const { classes } = this.props;
        const ITEM_HEIGHT = 48;
        const ITEM_PADDING_TOP = 8;
        const MenuProps = {
            PaperProps: {
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 250
                }
            }
        };

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
                                <Form.Group as={Row} controlId="formGridState">
                                    <Form.Label as="legend" column sm={5} className={classes.font}>Select Area</Form.Label>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formGridState">
                                    <Col sm={6}>
                                        <FormControl className={classes.formControl}>
                                            <Select
                                                labelId="demo-mutiple-checkbox-label"
                                                id="demo-mutiple-checkbox"
                                                value={this.state.area}
                                                onChange={this.handleChange("area")}
                                                input={<Input />}
                                                MenuProps={MenuProps}
                                            >
                                                {Object.keys(ZONE_TO_ID).map(name => (
                                                    <MenuItem key={name} value={name}>
                                                        <ListItemText primary={name} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formGridState">
                                    <Form.Label as="legend" column sm={5} className={classes.font}>Filter by Store</Form.Label>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formGridState">
                                    <Col sm={6}>
                                        <MultipleSelect names={ZONE_TO_STORES[this.state.area] || []} handleChangeStores={this.handleChangeStores} StoreName={this.state.shops}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Col sm={{ span: 10, offset: 0}} className={classes.buttonDiv}>
                                        {/*<Button className={classes.button} onClick ={this.findCart} >Find The Cheapest Shopping Cart</Button>*/}
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className={classes.form}>
                            <Products withPrice ={false} handleSubmit={this.handleSubmit}/>
                        </div>
                    </div>
                </div>
                <Box pt={4} >
                    <Copyright />
                </Box>
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
        border: '1px solid #313746'
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
        backgroundColor: '#313746'
    },
    font:{
        fontWeight: 'bold',
        color:'#313746',
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
        color:'#313746',
        paddingBottom:'30px'
    },
    input:{
        paddingBottom: '10px'
    },
    formControl: {
        minWidth: 120,
        maxWidth: 300,
    },

}))(CreateShoppingCart);

