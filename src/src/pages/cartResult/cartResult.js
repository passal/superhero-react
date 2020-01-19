import React from 'react';
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

/*
//get all prices for given shops and products
const getAllPrices = (shops, products) => {
    let shopsId = [];
    mapShopsToId(shops, shopsId);
    let productsId = {};
    mapProductToId(products, productsId);
    axios.post(urlBase + "/allPrices", {
        "shops": shopsId,
        "products": productsId
    },{
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then( (response) => {
        for(let i=0; i<(response.data).length; i++){
            response.data[i]["store"] = Object.keys(shopToId).find(key => shopToId[key] == response.data[i]["store"]);
            for(let j=0; j<(response.data[i]["prods"]).length; j++){
                response.data[i]["prods"][j]["product"] = Object.keys(productToId).find(key => productToId[key] == response.data[i]["prods"][j]["product"]);
            }
        }
        //the object is response.data, but js can't print nested objects so for printing use the below line:
        //console.log(console.log(JSON.stringify(response.data, null, 4)));
    });
};
*/

export default function CartResult(props) {
    const classes = useStyles();
    const [seeFullCart, changeCartState] = useState(false);
    const handleClick = () => {
        changeCartState(!seeFullCart)
    }
    let overallPrice = 0;
    let shops = [];
    let products = [];
    const result = [{store: 'Shufersal Ramat Aviv', products: [ 'Milk (1 Liter bottle)', 'Ground Beef (Kilograms)' ], price: 45},
        {store: 'SuperYoda Tel-Aviv', products: [ 'Eggs' ], price: 15}];
    const fullCart = [
        {store:'Shufersal Ramat Aviv', groceries: [ {grocery: 'Milk (1 Liter bottle)', price: 5}, {grocery: 'Ground Beef (Kilograms)', price:40}, {grocery:'Eggs', price: 20} ]},
        {store: 'SuperYoda Tel-Aviv', groceries: [  {grocery: 'Milk (1 Liter bottle)', price: 10}, {grocery: 'Ground Beef (Kilograms)', price:50}, {grocery:'Eggs', price: 15} ]}
    ];
    for (var i=0; i<result.length; i++){
        overallPrice+=result[i].price;
        shops.push(result[i].store);
        for (var j=0; j<result[i].products; j++){
            products.push(result[i].products[j]);
        }
    }


    const sumStoreGroceries = (store) => {
        var fullCartPrice = 0;
        for (var i=0; i<store.groceries.length; i++){
            fullCartPrice+=store.groceries[i].price;
        }
        return fullCartPrice;
    }
    var buttonOpen = "See full carts";
    var buttonClose = "Close";

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
                    {!seeFullCart && result.map(function(store, index){
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
                                                    {product}
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
                                        {store.groceries.map(function(product, index){
                                            return(
                                                <Typography value={index} color="Primary">
                                                    {product.grocery}: {product.price} ₪
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
