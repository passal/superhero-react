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
import CardContent from "@material-ui/core/CardContent";
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
        height: '80%',
        display: 'flex',
        justifyContent: 'center',

    },
    cardContent: {
        paddingTop: theme.spacing(16),
    },
    text: {
        textDecoration: 'none'
    },
    cardFooter: {
        height: '20%',
        backgroundColor: '#313746',
        paddingTop: '6px',
        paddingBottom: '6px',
        display: 'flex',
        justifyContent: 'center',
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
                                        <Typography variant="body1" color="Secondary" className={classes.text}>
                                            Earn 1 credit
                                        </Typography>
                                    </Grid>
                                </CardMedia>
                                <CardContent className={classes.cardFooter}>
                                    <Typography variant="h5" color="secondary">
                                        Upload Receipt
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid>
                        <Link underline='none' component={RouterLink} to='/insert-receipt'>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={translateReceiptPhoto}
                                           title="translateReceipt">
                                    <Grid className={classes.cardContent}>
                                        <Typography variant="body1" color="Secondary">
                                            Earn 1 credit
                                        </Typography>
                                    </Grid>
                                </CardMedia>
                                <CardContent className={classes.cardFooter}>
                                    <Typography variant="h5" color="secondary">
                                        Fill Receipt Content
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid>
                        <Link underline='none' component={RouterLink} to='/create-shopping-cart'>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={shoppingCartPhoto}
                                           title="createShoppingCart">
                                    <Grid className={classes.cardContent}>
                                        <Typography variant="body1" color="Secondary">
                                            Use 2 credits
                                        </Typography>
                                    </Grid>
                                </CardMedia>
                                <CardContent className={classes.cardFooter}>
                                    <Typography variant="h5" color="secondary">
                                        Create Shopping Cart
                                    </Typography>
                                </CardContent>
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
