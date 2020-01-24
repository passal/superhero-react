import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
import Copyright from "../../components/Copyright";
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import shoppingCartPhoto from "../../images/shoppingCart.jpg";
import {useState } from 'react';
import axios from 'axios';
import { PRODUCT_TO_ID, SHOP_TO_ID } from '../../constants';

const theme = createMuiTheme({
    palette: {
        primary: {main: "#313746"},
        secondary: {main: '#ffffff'},
        textSecondary: {main: '#70757a'}
    },
    status: {
        danger: 'red',
    },
});

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    card: {
        height: '100%',
        width: '270px',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '30%',
        display: 'flex',
        justifyContent: 'center',
    },
    cardContent: {
        flexGrow: 1,
    },
    text: {
        textAlign: 'center'
    },
    cardFooter: {
        backgroundColor: '#313746',
        paddingTop: '6px',
        paddingBottom: '6px',
    }
}));

function mapProductToId(products, productsId){
    let id;
    for(let prod in products){
        if(products.hasOwnProperty(prod)){
            id = PRODUCT_TO_ID[prod];
            productsId[id] = products[prod];
        }
    }
}
//get all prices for given shops and products
const getAllPrices = (shops, products) => {
    const shopsId = shops.map((shop) => SHOP_TO_ID[shop]);
    let productsId = {};
    mapProductToId(products, productsId);
    return axios.post("http://localhost:5000/allPrices", {
        "shops": shopsId,
        "products": productsId
    },{
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then( (response) => {
        for(let i=0; i<(response.data).length; i++){
            response.data[i]["store"] = Object.keys(SHOP_TO_ID).find(key => SHOP_TO_ID[key] == response.data[i]["store"]);
            for(let j=0; j<(response.data[i]["prods"]).length; j++){
                response.data[i]["prods"][j]["product"] = Object.keys(PRODUCT_TO_ID).find(key => PRODUCT_TO_ID[key] == response.data[i]["prods"][j]["product"]);
            }
        }
        return response.data;
    });
};

const mapBasketResultToName = (idObj) => {
    const result = [];
    const stores = Object.keys(idObj["basket"]);
    let storeName, prodId, prodName, prodCnt;

    for (let i = 0; i < stores.length; i++) {
        if (idObj["shopPrice"][stores[i]] === 0) {
            continue;
        }
        let shopObj = {
            "store": "",
            "price": 0,
            "products": []
        };
        storeName = Object.keys(SHOP_TO_ID).find(key => SHOP_TO_ID[key] == stores[i]);
        shopObj["store"] = storeName;
        shopObj["price"] = idObj["shopPrice"][stores[i]];
        for (let j=0; j<(idObj["basket"][stores[i]]).length; j++) {
            prodId = idObj["basket"][stores[i]][j].product;
            prodName = Object.keys(PRODUCT_TO_ID).find(key => PRODUCT_TO_ID[key] === prodId);
            prodCnt = idObj["basket"][stores[i]][j].quantity;
            let productItem = {product: prodName, quantity: prodCnt};
            shopObj["products"].push(productItem);
        }
        result.push(shopObj);
    }

    return result;
};

const getBasketResult = (uid) =>{
    return axios.get("http://localhost:5000/getBasket")
        .then((response) => {
            return mapBasketResultToName(response.data);
        });
};

export default function CartResult({ currentUser }) {
    const classes = useStyles();
    const [seeFullCart, changeCartState] = useState(false);
    const [basketResult, setBasketResult] = useState([]);
    const [fullCart, setFullCart] = useState([]);
    const handleClick = () => {
        changeCartState(!seeFullCart)
    };

    let overallPrice = 0;
    for (let i = 0; i < basketResult.length; i++) {
        overallPrice += basketResult[i].price;
    }

    useEffect(() => {
        (async() => {
            const basketResult = await getBasketResult(currentUser.id);
            setBasketResult(basketResult);
            let shops = [];
            let products = {};
            for (let i = 0; i < basketResult.length; i++) {
                shops.push(basketResult[i].store);
                for (let j = 0; j < basketResult[i].products.length; j++){
                    products[basketResult[i].products[j].product] = basketResult[i].products[j].quantity;
                }
            }
            const fullCart = await getAllPrices(shops, products);
            setFullCart(fullCart);
        })();
    }, []);

    const sumStoreGroceries = (store) => {
        var fullCartPrice = 0;
        for (var i=0; i<store.prods.length; i++){
            fullCartPrice+=(store.prods[i].price*store.prods[i].quantity);
        }
        return fullCartPrice;
    }
    const buttonOpen = "See full carts";
    const buttonClose = "Close";

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <main>
                <Container maxWidth="md">
                    <Typography variant="h4" color="Primary">
                        Here's your optimal buying solution!
                    </Typography>
                    <Typography variant="h5" color="primary">
                        Overall Price: {overallPrice} $
                    </Typography>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    {!seeFullCart && basketResult.map(function(store, index){
                        return(
                            <Grid item value={index} xs={10} sm={4} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image={shoppingCartPhoto} title="createShoppingCart">
                                        <Grid>
                                            <Typography variant="h5" color="Secondary" className={classes.text}>
                                                {store.store}
                                            </Typography>
                                        </Grid>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        {store.products.map(function(product, index){
                                            return(
                                                <Typography value={index} color="Primary">
                                                    {product.product} X {product.quantity}
                                                </Typography>
                                            );
                                        })}

                                    </CardContent>
                                    <CardContent className={classes.cardFooter}>
                                        <Typography value={index} variant="body1" color="secondary">
                                            Overall: {store.price} $
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                    {seeFullCart && fullCart.map(function(store, index){
                        return(
                            <Grid item value={index} xs={10} sm={4} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image={shoppingCartPhoto} title="createShoppingCart">
                                        <Grid>
                                            <Typography variant="h5" color="Secondary" className={classes.text}>
                                                {store.store}
                                            </Typography>
                                        </Grid>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        {store.prods.map(function(product, index){
                                            return(
                                                <Typography value={index} color="Primary">
                                                    {product.product} X {product.quantity}: <b>{product.price*product.quantity} $</b>
                                                </Typography>
                                            );
                                        })}

                                    </CardContent>
                                    <CardContent className={classes.cardFooter}>
                                        <Typography value={index} variant="body1" color="secondary">
                                            Overall: {sumStoreGroceries(store)} $
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Container>
                <Box align='center'>
                    <Button size="medium" variant="contained" color="primary" onClick={() => changeCartState(handleClick)}>
                        {seeFullCart ? buttonClose : buttonOpen}
                    </Button>
                </Box>
                <Box pt={4} >
                    <Copyright />
                </Box>
            </main>
        </ThemeProvider>
    );
}
