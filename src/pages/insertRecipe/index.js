import React from 'react';
import RecipeForm from "./components/RecipeForm";
import Products from "./components/Products";
import {withStyles} from "@material-ui/core/styles";
import  logo from "../SignIn/big-logo.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

class InsertRecipe extends React.Component {
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
        return (
            <Container component="main" >
                <CssBaseline/>
                <div className={classes.paper}>
                    <div className={classes.img}>
                        <img src={logo} alt="logo" className={classes.avatar}/>
                    </div>
                    <div className={classes.form}>
                        <Products withPrice ={this.props.withPrice}/>
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
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent:'center',

    },
    form: {
        width: 'auto',
        marginTop: theme.spacing(1),
        flexGrow:2,
    },
    img:{
        width: 'auto',
        flexGrow:1,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    avatar: {
        height: '260px'
    },


}))(InsertRecipe);
