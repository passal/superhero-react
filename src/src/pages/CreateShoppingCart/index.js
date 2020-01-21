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
import MultipleSelect from "./MultipleSelect";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import axios from 'axios';
const urlBase = "http://localhost:5000";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        minWidth:'400px',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    popRoot:{
        minWidth: '400px',
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

function mapShopsToId(shopsName, shopsId){
    let id;
    shopsName.forEach(name => {
        id = shopToId[name];
        shopsId.push(id);
    })
}

let shopToId = {
    "SuperYoda": 1,
    "Shufersal Ramat Aviv": 2,
    "SuperYoda Tel-Aviv": 3,
    "SuperYoda East Tel-Aviv": 4,
    "Shufersal Ramat-Gan": 5,
    "SuperYoda South": 6,
    "Rami Levy TLV Center": 7
};

let zoneToId = {
    "Tel-Aviv North": 1,
    "Tel-Aviv East": 2,
    "Tel-Aviv South": 3,
    "Tel-Aviv West": 4,
    "Tel-Aviv Center": 5,
    "Ramat-Gan": 6
};

let productToId = {
    "Milk (1 Liter bottle)": 1,
    "Eggs": 2,
    "Ground Beef (Kilograms)": 3,
    "Water (1.5 Liter bottle)": 4,
    "Cream Cheese (250 Grams cup)": 5,
    "Bread (1 Loaf)": 6,
    "Potatoes (Kilograms)": 7,
    "Tomatoes (Kilograms)": 8,
    "Pasta (500 Grams pack)": 9,
    "Rice (400 Grams pack)": 10,
    "Apples (Kilograms)": 11,
    "Canned Tuna (4 pack)": 12,
    "Soy milk (1 Liter bottle)": 13,
    "Pringles (600 Grams can)": 14,
    "Bamba (70 Grams pack)": 15,
    "Bamba (200 Grams pack)": 16
};

function mapProductToId(products, productsId){
    let id;
    for(let prod in products){
        if(products.hasOwnProperty(prod)){
            id = productToId[prod];
            productsId[id] = products[prod];
        }
    }
}

function mapBasketResultToName(idObj, nameObj){
    nameObj["price"] = idObj["price"];
    let temp = Object.keys(idObj["basket"]);
    let shopName,  prodId, prodName;
    for(let i=0; i<temp.length; i++){
        if(idObj["shopPrice"][temp[i]]===0) continue;
        shopName = Object.keys(shopToId).find(key => shopToId[key] == temp[i]);
        nameObj["basket"][shopName] = idObj["basket"][temp[i]];
        nameObj["shopPrice"][shopName] = idObj["shopPrice"][temp[i]];
        for(let j=0; j<(nameObj["basket"][shopName]).length; j++){
            prodId = nameObj["basket"][shopName][j];
            prodName = Object.keys(productToId).find(key => productToId[key] == prodId);
            nameObj["basket"][shopName][j] = prodName;
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

const getBestBasket = (shops, products, maxSplits, uid,updateResult) => {
    let result = {
        "basket": {},
        "shopPrice": {},
        "price": 0
    };
    let shopsId = [];
    mapShopsToId(shops, shopsId);
    let productsId = {};
    mapProductToId(products, productsId);
    axios.post(urlBase + "/getBasket", {
        "maxSplits": maxSplits,
        "shops": shopsId,
        "products": productsId
    },{
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then( (response) => {
        payCreds(uid);
        mapBasketResultToName(response.data, result);
        console.log(result);
        console.log(response.data);
        localStorage.setItem('cartResult', JSON.stringify(result));
        window.location = '#/cartResult';
    });
};

class CreateShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor")
        this.state = {
            maxSplitAmount: 0,
            maximalDistanceFromLocation: 0,
            area:"",
            StoreName:[],
            isOpen: false,
            products:[],
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

    handleSubmit(products) {
        return (e) => {
            console.log(this.serializeProducts(products))
            this.setState({
                products: this.serializeProducts(products),
            })
        }
    }


    handleChangeStores = (event)=> {
        this.setState({StoreName: event.target.value,});
        console.log("storeName",this.state.StoreName)
    };

    serializeProducts(products) {
        return products.reduce((acc, product) => ({
            ...acc,
            [product.name]: parseInt(product.qty)
        }), {})
    }

    findCart = (e) => {
        e.preventDefault();
        //check for points - if not enough change state, if enough - submit
        // this.setState( {isOpen: true});
        console.log(this.state.products)
        getBestBasket(this.state.StoreName,this.state.products,this.state.maxSplitAmount,this.props.currentUser.id,this.props.updateResult);
        window.location.pathname = '/cartResult';
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
        const names = [
            "SuperYoda",
            "Shufersal Ramat Aviv",
            "SuperYoda Tel-Aviv",
            "SuperYoda East Tel-Aviv",
            "Shufersal Ramat-Gan",
            "SuperYoda South",
            "Rami Levy TLV Center",
        ];

        let zoneToId = [
            "Tel-Aviv North",
            "Tel-Aviv East",
            "Tel-Aviv South",
            "Tel-Aviv West",
            "Tel-Aviv Center",
            "Ramat-Gan",
        ];

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
                                                {zoneToId.map(name => (
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
                                        <MultipleSelect  names={names} handleChangeStores={this.handleChangeStores} StoreName={this.state.StoreName}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Col sm={{ span: 10, offset: 0}} className={classes.buttonDiv}>
                                        <Button className={classes.button} onClick ={this.findCart} >Find The Cheapest Shopping Cart</Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                            {/*<Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.isOpen}>*/}
                            {/*    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>*/}
                            {/*        You dont have enough points*/}
                            {/*    </DialogTitle>*/}
                            {/*    <DialogContent dividers>*/}
                            {/*        <Typography gutterBottom>*/}
                            {/*            Please earn more points and try again*/}
                            {/*        </Typography>*/}
                            {/*    </DialogContent>*/}
                            {/*    <DialogActions>*/}
                            {/*        <Button autoFocus onClick={this.handleClose} color="primary">*/}
                            {/*            Ok Thanks!*/}
                            {/*        </Button>*/}
                            {/*    </DialogActions>*/}
                            {/*</Dialog>*/}
                        </div>
                        <div className={classes.form}>
                            <Products withPrice ={false} handleSubmit={this.handleSubmit}/>
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
    },
    formControl: {
        minWidth: 120,
        maxWidth: 300,
    },

}))(CreateShoppingCart);

