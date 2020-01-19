import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from "@material-ui/core/FormControl";
import Select from '@material-ui/core/Select';
import Copyright from "../../components/Copyright";
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
const urlBase = "http://localhost:3000";

//get all delivery zones
const getAllZones = () => {
    let fullUrl = urlBase +  "/allZones";
    axios.get(fullUrl).then((response) =>{
        return response.data;
        if((response.data).length===0){
            //error
            console.log("No Zones inserted");
        }
    });
};

const registerUser = (username, password, email) => {
    axios.post("http://localhost:3000/register", {
        username: username,
        password: password,
        email: email
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

const theme = createMuiTheme({
    palette: {
        primary: {500: "#313746"},
    },
    status: {
        danger: 'red',
    },
});
const useStyles = makeStyles(theme => ({
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 380,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    contain: {
        backgroundImage: `url(${"https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
    }
}));

export default function SignUp() {
    const classes = useStyles();
    const [area, setArea] = React.useState('');
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setArea(event.target.value);
    };

    const handleSubmit = () => {
        registerUser(username, password, email);
    };

    const areas = getAllZones();

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper}>
                <Grid container>
                    <Grid container justify="flex-start">
                        <Typography component="h1" variant="h5" color="Primary">
                            Sign Up
                        </Typography>
                    </Grid>
                </Grid>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="User Name"
                                name="useName"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                        </Grid>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel ref={inputLabel} id="select-area-label">
                                Area *
                            </InputLabel>
                            <Select
                                labelId="select-area-label"
                                id="select-area"
                                value={area}
                                onChange={handleChange}
                                labelWidth={labelWidth}
                                autoWidth
                            >
                                {areas.map(function(area, index){
                                    return <MenuItem value={ index }>{area.name}</MenuItem>;
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/signIn" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
        </ThemeProvider>
    );
}
