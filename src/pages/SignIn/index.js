import React from 'react';
import logo from "./big-logo.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Copyright from "./components/Copyright";
import Typography from "@material-ui/core/Typography";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    signIn() {
        const { email, password } = this.state;

        // axios.post('/signin', { email, password }).then((response) => {
        //     if (!response.user) {
        //
        //     }
        // })
    }

    handleChange(arg) {
        return (e) => {
            this.setState({
                [arg]: e.target.value
            })
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.dpassal}></div>
                <div className={classes.paper}>
                    <img src={logo} alt="logo" className={classes.avatar}/>
                    <Grid container>
                        <Grid container justify="flex-start">
                            <Typography component="h1" variant="h5">
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
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.handleChange('email')}
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
                            onChange={this.handleChange('password')}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.signIn}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid container justify="flex-end">
                                <Link href="/" variant="body2">
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
        );
    }
}

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
//     dPassal: {
//         backgroundColor: 'red'
// }
}))(SignIn);
