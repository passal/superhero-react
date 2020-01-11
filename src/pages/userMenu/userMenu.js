import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from "../images/super-hero-logo.png";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © Super-Hero '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const sideBarWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        marginLeft: sideBarWidth,
        width: `calc(100% - ${sideBarWidth}px)`,
    },
    title: {
        flexGrow: 1,
    },
    sideBarBack: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: sideBarWidth,
        backgroundColor: '#F0F0F0'
    },
    sideBar: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: sideBarWidth,
        flexDirection: 'column',
        justify: 'center',
        marginTop: '22px',
        marginLeft: '22px'
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(4),
        flexDirection: 'column',
        justify: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    avatar: {
        width: '240px',
    },
    button: {
        width: '400px'
    }
}));

export default function Dashboard() {
    const classes = useStyles();

    var user = {credits: 10, name: "Michael"};

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Hi {user.name}, what would you like to do?
                    </Typography>
                    <Button
                        item
                        color="inherit"
                        className={classes.submit}
                        href="/signIn"
                        alignSelf="flex-end"
                    >
                        Log Out
                        <ExitToAppIcon />
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.sideBarBack}>
                <div className={classes.sideBar}>
                    <Grid container item>
                        <img src={logo} alt="logo" className={classes.avatar}/>
                    </Grid>

                    <form item className={classes.form}>
                        <br />
                        <br />
                        <Grid item xs={12}>
                            <Typography color="Primary" variant="h5" align="left">
                                {'Credit Balance:'} <br /> {user.credits}
                            </Typography>
                        </Grid>
                    </form>
                </div>
            </div>
            <main className={classes.content}>
                <Container maxWidth="xs" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Button
                                item
                                type="submit"
                                variant="contained"
                                color="primary"
                                href="/uploadReceipt"
                                className={classes.button}
                            >
                                Upload receipt
                            </Button>
                            <Typography variant="body1" color="secondary" align="right">
                                +1 credit
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                item
                                type="submit"
                                variant="contained"
                                color="primary"
                                href="/translateReceipt"
                                className={classes.button}
                            >
                                Insert receipt content
                            </Button>
                            <Typography variant="body1" color="secondary" align="right">
                                +1 credit
                            </Typography>
                        </Grid>
                        <Grid item xs={12} alignSelf="center">
                            <Button
                                item
                                type="submit"
                                variant="contained"
                                color="primary"
                                href="/shoppingCart"
                                className={classes.button}
                            >
                                Create shopping cart
                            </Button>
                            <Typography variant="body1" color="secondary" align="right">
                                -2 credits
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box pt={4} >
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}
