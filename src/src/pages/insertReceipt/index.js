import React from 'react';
import ReceiptForm from "./components/ReceiptForm";
import Products from "./components/Products";
import {withStyles} from "@material-ui/core/styles";
import receipt from "../../images/receipt.gif";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

class InsertReceipt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleChange = this.handleChange.bind(this);
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
        console.log(this.state);
        return (
            <Container component="main" >
                <CssBaseline/>
                <div className={classes.paper}>
                    <h1 className={classes.headline}>Fill Receipt Content</h1>
                    <div className={classes.body}>
                        <div className={classes.img}>
                            <img src={receipt} alt="logo" className={classes.avatar}/>
                        </div>
                        <div className={classes.form}>
                            <Products withPrice ={this.props.withPrice}/>
                        </div>
                    </div>
                </div>
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
        justifyContent:'center',
    },
    form: {
        width: 'auto',
        flexGrow:2,
        height:'550px',
        padding:'10px',
        overflow:'auto',
    },
    img:{
        width: 'auto',
        flexGrow:1,
        height:'550px',
        padding:'10px',
        marginRight:'10px',
        border: '1px solid #313746',
        overflow: 'auto'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    avatar: {
    },
    body:{
        display:'flex',
    },
    headline:{
        color: '#313746',
        paddingBottom:'30px'
    },


}))(InsertReceipt);
