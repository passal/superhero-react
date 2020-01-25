import React from 'react';
import Products from "./components/Products";
import {withStyles} from "@material-ui/core/styles";
import receipt from "../../images/1.jpg"
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import axios from 'axios';
import { PRODUCT_TO_ID, SHOP_TO_ID } from '../../constants';
import Copyright from "../../components/Copyright";
import Box from "@material-ui/core/Box";
const urlBase = "http://localhost:5000";

const earnCreds = (id) => {
    return axios.post(urlBase + "/earnCredits", {
        id: id
    }, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
};

const getUnfilledRec = () => {
    return axios.get("http://localhost:5000/OCR")
        .then((response) => {
            response.data[0]["shop"] = Object.keys(SHOP_TO_ID).find(key => SHOP_TO_ID[key] === response.data[0]["sid"]);

            if (response.data.length === 0){
                console.log("All out receipts are filled");
            }

            return response.data[0];
    });
};

const fillReceipt = (receipt, uid) => {
    return axios.post(urlBase + "/OCR", receipt, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
};

class InsertReceipt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            products: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        try {
            const { sum, shop, img } = await getUnfilledRec();

            this.setState({
                sum,
                shop,
                img,
                loading: false
            })
        } catch (e) {
            console.log(e);
            alert("Something went wrong");
        }
    }

    handleChange(arg) {
        return (e) => {
            this.setState({
                [arg]: e.target.value
            })
        }
    }

    validateSum(products) {
        const sum = products.reduce((sum, product) => {
            return sum + parseInt(product.price) * parseInt(product.qty)
        }, 0);

        return sum === this.state.sum;
    }

    async handleSubmit(products) {
        const { currentUser } = this.props;

        if (!this.validateSum(products)) {
            alert('Sum of products doesnt match recepit');
            return;
        }

        const receipt = {
            sid: SHOP_TO_ID[this.state.shop],
            products: this.serializeProducts(products),
        };

        await fillReceipt(receipt, currentUser.id);
        await earnCreds(currentUser.id);

        this.props.setCurrentUser({
            ...currentUser,
            credits: currentUser.credits + 1
        });

        window.location = "/#userMenu";
    }

    serializeProducts(products) {
        return products.reduce((acc, { name, price }) => ({
            ...acc,
            [PRODUCT_TO_ID[name]]: parseInt(price)
        }), {})
    }

    render() {
        const { classes } = this.props;
        const { loading } = this.state;

        if (loading) {
            return <h2>Loading</h2>;
        }

        return (
            <Container component="main" >
                <CssBaseline/>
                <div className={classes.paper}>
                    <h1 className={classes.headline}>Fill Receipt</h1>
                    <div className={classes.body}>
                        <div className={classes.img}>
                            <img src={this.state.img} alt="logo" className={classes.avatar}/>
                        </div>
                        <div className={classes.form}>
                            <Products withPrice={true} handleSubmit={this.handleSubmit} />
                        </div>
                    </div>
                </div>
                <Box pt={4} >
                    <Copyright />
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
        justifyContent:'center',
    },
    form: {
        width: 'auto',
        flexGrow:2,
        height:'550px',
        padding:'10px',
        overflow:'scroll',
        border: '1px solid #313746'
    },
    img:{
        width: 'auto',
        flexGrow:1,
        height:'550px',
        padding:'10px',
        marginRight:'10px',
        border: '1px solid #313746'
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
        color:'#313746',
        paddingBottom:'30px'
    }
}))(InsertReceipt);
