import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Copyright from "../../components/Copyright";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from "@material-ui/styles/ThemeProvider";

const theme = createMuiTheme({
    palette: {
        primary: {500: "#313746"},
    },
    status: {
        danger: 'red',
    },
});

const SignIn = ({ classes, setCurrentUser }) => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const history = useHistory();

    const urlBase = "http://localhost:3000";

    const signIn = () => {
        let fullUrl = urlBase +  "/signin?username=" + username + "&password=" + password;
        console.log("full path",fullUrl)
        axios.get(fullUrl).then((response) =>{
            console.log(response.data);

            if((response.data).length===0){
                //wrong username\pass
                console.log("wrong username or password dudes!");
            }
        });
    };

    // const signIn = () => {
    //     const fullUrl = `http://localhost:3000/signin`;
    //
    //     axios.post(fullUrl, { username, password }).then((response) =>{
    //         const user = response.data[0];
    //         console.log("user:",user);
    //         if(!user){
    //             return alert('Wrong Credentials!')
    //         }
    //         console.log("Connected succesfully");
    //         setCurrentUser(user);
    //         history.push('/upload');
    //     });
    // };
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Grid container>
                    <Grid container justify="flex-start">
                        <Typography component="h1" variant="h5" color="Primary">
                            Sign In
                        </Typography>
                    </Grid>
                </Grid>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={signIn}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid container justify="flex-end">
                            <Link href="/signUp" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
        </ThemeProvider>
    );
};

export default withStyles(theme => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        width: '380px',
        height: '260px'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))(SignIn);
