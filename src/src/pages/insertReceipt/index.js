import React from 'react';
import Products from "./components/Products";
import {withStyles} from "@material-ui/core/styles";
// import  logo from "../SignIn/big-logo.png";
// import receipt from "../SignIn/reciptm_example.jpg"
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import axios from 'axios';
const urlBase = "http://localhost:3000";

const earnCreds = (id) => {
    axios.post(urlBase + "/earnCredits", {
        id: id
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

const fillReceipt = (receipt, uid) => {

    axios.post(urlBase + "/OCR", receipt, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((response) => {
        earnCreds(uid);
        markRec(receipt.rid);
        console.log(response.status);
    }).catch((error) => {
        console.log((error.response.data)); //this will return a message from the server on the error
    })
};

const markRec = (id) => {
    axios.post(urlBase + "/markRec", {
        id: id
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

class InsertReceipt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(arg) {
        return (e) => {
            this.setState({
                [arg]: e.target.value
            })
        }
    }

    handleSubmit(products) {
        //console.log(this.serializeProducts(products))
        return (e) => {
            this.setState({
                products: this.serializeProducts(products),
            })
            const receipt = {
                "shop":"SuperYuda",
                "products": this.serializeProducts(products),
            }
            fillReceipt(receipt,this.props.currentUser.id);

        }
    }

    serializeProducts(products) {
        return products.reduce((acc, product) => ({
            ...acc,
            [product.name]: parseInt(product.qty)*parseInt(product.price)
        }), {})
    }

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" >
                <CssBaseline/>
                <div className={classes.paper}>
                    <h1 className={classes.headline}>Insert Receipt</h1>
                    <div className={classes.body}>
                        <div className={classes.img}>
                            {/*<img src={receipt} alt="logo" className={classes.avatar}/>*/}
                        </div>
                        <div className={classes.form}>
                            <Products withPrice ={true} handleSubmit={this.handleSubmit} />
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
        overflow:'scroll',
        border: '1px solid #20639B'
    },
    img:{
        width: 'auto',
        flexGrow:1,
        height:'550px',
        padding:'10px',
        marginRight:'10px',
        border: '1px solid #20639B'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    avatar: {
        minWidth: "100%",
        maxHeight: "100%",
    },
    body:{
        display:'flex',
    },
    headline:{
        color:'#20639B',
        paddingBottom:'30px'
    },


}))(InsertReceipt);
