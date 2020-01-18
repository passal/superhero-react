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


export default function CartResult(props) {
    const classes = useStyles();

    var result =
        [
            {store: "Rami Levi", groceries: [{grocery: "tomatoes", price: 3}, {grocery: "cucumbers", price: 4}],
                unrecommendedGroceries: [{grocery: "olive oil", price: 22}, {grocery: "cream cheese", price: 5}, {grocery: "milk", price: 11}],
                price: 7, totalPrice: 45},
            {store: "Yeinot Bitan", groceries: [{grocery: "cream cheese", price: 5}, {grocery: "milk", price: 5}],
                unrecommendedGroceries: [{grocery: "olive oil", price: 21}, {grocery: "tomatoes", price: 4}, {grocery: "cucumbers", price: 4}],
                price: 10, totalPrice: 39},
            {store: "Mega", groceries: [{grocery: "olive oil", price: 18}],
            unrecommendedGroceries: [{grocery: "cream cheese", price: 6}, {grocery: "milk", price: 10}, {grocery: "tomatoes", price: 4}, {grocery: "cucumbers", price: 4}],
                price: 18, totalPrice: 42}
        ];

    const [seeFullCart, changeCartState] = useState(false);
    const handleClick = () => {
        changeCartState(!seeFullCart)
    }
    let overallPrice = 0;
    for (var i=0; i<result.length; i++){
        overallPrice+=result[i].price;
    }
    var buttonOpen = "See full carts";
    var buttonClose = "Close";
    console.log("from cart result",props.Result);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <main>
                <Container maxWidth="md">
                    <Typography variant="h4" color="Primary">
                        Here's your optimal buying solution! {props.Result.length}
                    </Typography>
                    <Typography variant="h5" color="primary">
                        Overall Price: {overallPrice} ₪
                    </Typography>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    {result.map(function(store, index){
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
                                        {store.groceries.map(function(grocery, index){
                                                return(
                                                    <Typography value={index} color="Primary">
                                                        {grocery.grocery}: {grocery.price} ₪
                                                    </Typography>
                                                );
                                        })}
                                        {seeFullCart && store.unrecommendedGroceries.map(function(grocery, index){
                                            return(
                                                <Typography value={index} color="textSecondary">
                                                    {grocery.grocery}: {grocery.price} ₪
                                                </Typography>
                                            );
                                        })}
                                    </CardContent>
                                    <CardContent className={classes.cardFooter}>
                                        <Typography value={index} variant="body1" color="secondary">
                                                Overall: {seeFullCart ? store.totalPrice : store.price} ₪
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
