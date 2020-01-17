<<<<<<< HEAD
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
                </Container>
            </div>
        );
=======
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
// import Copyright from "../../components/Copyright";
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import shoppingCartPhoto from "../../images/person-on-red-grocery-cart-2871490.jpg";
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
        paddingTop: '56.25%',
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
    },
    actionCard: {
        paddingTop: '6px',
        paddingBottom: '6px',
        display: 'flex',
        justifyContent: 'center',
>>>>>>> 2786675d5cf3fa8810c1121a0a46397cbfd54999
    }
}));

export default function Home() {
    const classes = useStyles();
    const [bto, setbto] = useState(false);

    const handleclick = () => {
        setbto(!bto)
    }



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
    for (var i=0; i<result.length; i++){
        result[i]['seeFullCart'] = false;
    }
    console.log(result)
    var buttonOpen = "See full cart";
    var buttonClose = "Close";

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <main>
                <Container maxWidth="md">
                    <Typography variant="h4" color="Primary">
                        Here's your optimal buying solution!
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
                                                <Typography value={index}>
                                                    {grocery.grocery}: {grocery.price} ILS
                                                </Typography>
                                            );
                                        })}
                                        {store.seeFullCart && store.unrecommendedGroceries.map(function(grocery, index){
                                            return(
                                                <Typography value={index} color="textSecondary">
                                                    {grocery.grocery}: {grocery.price} ILS
                                                </Typography>
                                            );
                                        })}
                                    </CardContent>
                                    <CardContent className={classes.cardFooter}>
                                        <Typography value={index} variant="body1" color="secondary">
                                            Overall: {store.seeFullCart ? store.totalPrice : store.price} ILS
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.actionCard}>
                                        <Button size="medium" color="primary" onClick={handleclick}>
                                            {bto ? buttonClose : buttonOpen}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
                </Container>
                <Box pt={4} >
                    {/*<Copyright />*/}
                </Box>
            </main>
        </ThemeProvider>
    );
}
