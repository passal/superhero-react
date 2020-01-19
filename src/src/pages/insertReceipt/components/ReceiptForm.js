import React,{ useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment'
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import ThemeProvider from "@material-ui/styles/ThemeProvider";

const theme = createMuiTheme({
    palette: {
        primary: {500: "#313746"},
    },
    status: {
        danger: 'red',
    },
});

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 200,
    },
    formButtons: {
        marginRight: theme.spacing(1),
    },
}));


export default function ReceiptForm() {
    const classes = useStyles();
    // const [groceries, setGroceries] = useState([{item:"",price:""}]);
    return (
        <ThemeProvider theme={theme}>
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <div>
                    <TextField
                        id="outlined-required"
                        label="Product Name"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-start-adornment"
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                        }}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-required"
                        label="Product Name"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-start-adornment"
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                        }}
                        variant="outlined"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="contained-button-file" className={classes.formButtons}>
                    <Button  variant="contained" color="primary" component="span">
                        Add Product
                    </Button>
                </label>
                <label htmlFor="contained-button-file" className={classes.formButtons}>
                    <Button variant="contained" color="primary" component="span">
                        Submit
                    </Button>
                </label>
            </div>
        </form>
        </ThemeProvider>
    );
}
