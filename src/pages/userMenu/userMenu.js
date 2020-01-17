import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link'
import uploadReceiptPhoto from "../../images/foldedReceipt.jpg";
import translateReceiptPhoto from "../../images/receiptPhoto.jpg";
import shoppingCartPhoto from "../../images/shoppingCart.jpg";
import Copyright from "../../components/Copyright";
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
const theme = createMuiTheme({
    palette: {
        primary: {main: "#313746"},
        secondary: {main: '#ffffff'}
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
        height: '200px',
        width: '260px',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',

    },
    cardContent: {
        paddingTop: theme.spacing(20),
    },
    text: {
        textDecoration: 'none'
    }
}));

export default function UserMenu() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <main>
                <Container maxWidth="md">
                    <Typography variant="h4" color="Primary">
                        What would you like to do?
                    </Typography>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid>
                        <Link component={RouterLink} to='/upload'>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={uploadReceiptPhoto}
                                           title="uploadReceipt">
                                    <Grid className={classes.cardContent}>
                                        <Typography variant="h5" color="Secondary" className={classes.text}>
                                            Upload Receipt
                                        </Typography>
                                    </Grid>
                                </CardMedia>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid>
                        <Link underline='none' component={RouterLink} to='/translateReceipt'>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={translateReceiptPhoto}
                                           title="translateReceipt">
                                    <Grid className={classes.cardContent}>
                                        <Typography variant="h5" color="Secondary">
                                            Insert Receipt Content
                                        </Typography>
                                    </Grid>
                                </CardMedia>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid>
                        <Link underline='none' component={RouterLink} to='/shoppingCart'>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={shoppingCartPhoto}
                                           title="createShoppingCart">
                                    <Grid className={classes.cardContent}>
                                        <Typography variant="h5" color="Secondary">
                                            Create Shopping Cart
                                        </Typography>
                                    </Grid>
                                </CardMedia>
                            </Card>
                        </Link>
                    </Grid>
                </Container>
                <Box mt={8}>
                    <Copyright/>
                </Box>
            </main>
        </ThemeProvider>
    );
}